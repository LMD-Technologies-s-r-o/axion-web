#!/usr/bin/env python3
"""Axion web build: one site on axion-cad.com – English at the root, Czech under /cs/.

Source of truth:
  - English pages in the repo root (index.html, features/, integrations/, cases/, deployment/)
  - Czech texts in assets/site.js  (var CS={...}, keys = data-i18n / data-i18n-html)
  - Page titles/descriptions below in PAGES

Output: English pages updated in place (SEO head, language switch), Czech pages generated into cs/,
        one sitemap.xml / robots.txt / 404.html for both languages.
Usage:  python3 tools/build.py [../axion-cz-redirect]
        Optional argument = clone of the repo serving axion-cad.cz; it gets redirect pages
        (old Czech URLs -> axion-cad.com/cs/...). Then commit + push.
"""
import json, os, re, shutil, sys
from bs4 import BeautifulSoup

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN_DOM = "https://axion-cad.com/"
CS_DOM = EN_DOM + "cs/"
OLD_CS_DOM = "https://axion-cad.cz/"

# page id -> (en path, cs path)
PATHS = {"home": ("", ""), "features": ("features/", "funkce/"), "integrations": ("integrations/", "propojeni/"),
         "cases": ("cases/", "z-praxe/"), "deployment": ("deployment/", "nasazeni/"),
         "download": ("download/", "stazeni/"), "terms": ("terms/", "podminky/"), "privacy": ("privacy/", "ochrana-udaju/"),
         "guide": ("guide/", "navod/"), "pricing": ("pricing/", "cenik/"), "thanks": ("thank-you/", "dekujeme/")}
NOINDEX = {"thanks"}                                   # not in sitemap, robots noindex

PAGES = {
 "home": {
  "en": ("AI assistant for SOLIDWORKS – drawing checks | Axion",
         "Axion is an AI design engineer inside SOLIDWORKS: drawing checks, manufacturability, standards and cost, connected to PDM/PLM, ERP and MES. Up to 60–70 % less time checking drawings."),
  "cs": ("AI asistent pro SOLIDWORKS – kontrola výkresů | Axion",
         "Axion je AI konstruktér přímo v SOLIDWORKS: kontrola výkresů, vyrobitelnost, normy a cena, propojení s PDM/PLM, ERP a MES. O 60–70 % méně času na kontrolu výkresů.")},
 "features": {
  "en": ("Features: drawing checks, manufacturability, standards | Axion",
         "What Axion does in SOLIDWORKS: reads live geometry and drawings, checks standards (ISO 2768, ISO 286) and manufacturability, estimates cost, generates drawings and finds similar parts."),
  "cs": ("Funkce: kontrola výkresů, vyrobitelnost, normy | Axion",
         "Co Axion umí v SOLIDWORKS: čte živou geometrii a výkresy, kontroluje normy (ISO 2768, ISO 286) a vyrobitelnost, odhadne cenu, generuje výkresy a najde podobné díly.")},
 "integrations": {
  "en": ("Connect SOLIDWORKS with PDM/PLM, ERP (SAP, Helios) and MES | Axion",
         "Axion brings CAD, PDM/PLM, ERP (SAP, Helios), MES, production, quality and documentation together in one interface. It writes only to PDM/PLM and reads other systems via API."),
  "cs": ("Propojení SOLIDWORKS s PDM/PLM, ERP (SAP, Helios) a MES | Axion",
         "Axion spojí CAD, PDM/PLM, ERP (SAP, Helios), MES, výrobu, kvalitu i dokumentaci v jednom rozhraní. Zapisuje jen do PDM/PLM, ostatní systémy čte přes API.")},
 "cases": {
  "en": ("Real cases: AI drawing review and design checks | Axion",
         "Unedited Axion answers on real parts and drawings: manufacturability of a shaft drawing, GD&T errors, sheet-metal design review and modeling from text or an image."),
  "cs": ("Z praxe: AI kontrola výkresu a návrhu dílu | Axion",
         "Needitované odpovědi Axionu na skutečných dílech a výkresech: vyrobitelnost hřídele, chyby v GD&T, kontrola plechového dílu a modelování z textu nebo obrázku.")},
 "deployment": {
  "en": ("Deploying AI in engineering, tailored and local-first | Axion",
         "How Axion is built for your company: kick-off, pilot on your parts, rollout. Local-first security, your own AI API key (Claude, ChatGPT, Gemini, Mistral) and low running costs."),
  "cs": ("Nasazení AI do konstrukce na míru a bezpečně | Axion",
         "Jak Axion stavíme pro vaši firmu: úvodní schůzka, pilot na vašich dílech, nasazení. Lokálně od základu, vlastní API klíč k AI (Claude, ChatGPT, Gemini, Mistral) a nízké náklady.")}, "download": {
  "en": ("Download Axion – free 30-day trial for SOLIDWORKS | Axion",
         "Try Axion, the AI design assistant inside SOLIDWORKS, free for 30 days on your own parts and drawings. Download link and activation key by e-mail."),
  "cs": ("Stáhnout Axion – 30 dní zdarma pro SOLIDWORKS | Axion",
         "Vyzkoušejte Axion, AI asistenta konstruktéra v SOLIDWORKS, 30 dní zdarma na vlastních dílech a výkresech. Odkaz ke stažení a aktivační klíč e-mailem.")},
 "pricing": {
  "en": ("Pricing: Start, Plus and Pro plans | Axion",
         "Axion plans for SOLIDWORKS designers: Start without AI, Plus with the AI design assistant, Pro for demanding engineers. Monthly or yearly, prices incl. VAT, cancel anytime."),
  "cs": ("Ceník: balíčky Start, Plus a Pro | Axion",
         "Balíčky Axionu pro konstruktéry v SOLIDWORKS: Start bez AI, Plus s AI asistentem, Pro pro náročné. Měsíčně nebo ročně, ceny vč. DPH, zrušení kdykoli.")},
 "thanks": {
  "en": ("Thank you for your purchase | Axion", "Your Axion licence key is on its way by e-mail."),
  "cs": ("Děkujeme za nákup | Axion", "Licenční klíč k Axionu vám posíláme e-mailem.")},
 "terms": {
  "en": ("Terms of use and licence terms | Axion", "Terms of use of axion-cad.com, the free Axion trial and the Start, Plus and Pro subscriptions: renewal, cancellation, refunds."),
  "cs": ("Podmínky užívání a licenční podmínky | Axion", "Podmínky užívání webu axion-cad.com, zkušební verze Axionu a předplatného Start, Plus a Pro: obnova, zrušení, vrácení peněz.")},
 "privacy": {
  "en": ("Privacy policy | Axion", "How LMD Technologies s.r.o. processes personal data for the Axion trial, licences and website."),
  "cs": ("Zásady ochrany osobních údajů | Axion", "Jak LMD Technologies s.r.o. zpracovává osobní údaje u zkušební verze, licencí a webu Axion.")}, "guide": {
  "en": ("Axion user guide – installation, activation, first steps | Axion",
         "How to install and activate Axion in SOLIDWORKS, set up your AI key and work with the panel, menus and similar parts."),
  "cs": ("Uživatelská příručka Axionu – instalace, aktivace, první kroky | Axion",
         "Jak nainstalovat a aktivovat Axion v SOLIDWORKS, nastavit klíč k AI a pracovat s panelem, nabídkami a podobnými díly.")},
}

# site-verification meta tags (search engines), per language, home page only
VERIFY = {"cs": ['<meta name="seznam-wmt" content="bSFUqpU7w6FnbOcUHECLMPJb2pOOMLrl">'], "en": ['<meta name="seznam-wmt" content="bSFUqpU7w6FnbOcUHECLMPJb2pOOMLrl">']}

ORG = {"@type": "Organization", "@id": "https://www.lmd-technologies.cz/#org", "name": "LMD Technologies s.r.o.",
       "url": "https://www.lmd-technologies.cz", "email": "info@lmd-technologies.cz",
       "logo": EN_DOM + "assets/img/lmd-technologies-s-r-o.png",
       "address": {"@type": "PostalAddress", "addressLocality": "Praha", "addressCountry": "CZ"}}


def url(lang, pid):
    return (EN_DOM if lang == "en" else CS_DOM) + PATHS[pid][0 if lang == "en" else 1]


def seo_block(lang, pid, depth):
    title, desc = PAGES[pid][lang]
    R = "../" * depth
    other = "cs" if lang == "en" else "en"
    ld = [ORG, {"@type": "WebSite", "name": "Axion", "url": url(lang, "home"), "inLanguage": lang,
                "publisher": {"@id": ORG["@id"]}}]
    if pid == "home":
        ld.append({"@type": "SoftwareApplication", "name": "Axion", "applicationCategory": "DesignApplication",
                   "operatingSystem": "Windows", "url": url(lang, "home"), "inLanguage": ["cs", "en"],
                   "description": desc, "publisher": {"@id": ORG["@id"]},
                   "image": EN_DOM + f"assets/og-{lang}.png"})
    ldj = json.dumps({"@context": "https://schema.org", "@graph": ld}, ensure_ascii=False)
    og_locale = "cs_CZ" if lang == "cs" else "en_US"
    verify = "".join("\n" + v for v in VERIFY[lang]) if pid == "home" else ""
    robots_meta = '\n<meta name="robots" content="noindex">' if pid in NOINDEX else ""
    return f'''<!-- seo -->
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url(lang, pid)}">{robots_meta}
<link rel="alternate" hreflang="en" href="{url("en", pid)}">
<link rel="alternate" hreflang="cs" href="{url("cs", pid)}">
<link rel="alternate" hreflang="x-default" href="{url("en", pid)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Axion">
<meta property="og:locale" content="{og_locale}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url(lang, pid)}">
<meta property="og:image" content="{EN_DOM}assets/og-{lang}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{R}assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{R}assets/apple-touch-icon.png">
<meta name="theme-color" content="#1F6FD6">
<script type="application/ld+json">{ldj}</script>{verify}
<!-- /seo -->'''


def lang_switch(lang, pid):
    en_cur = ' aria-current="true"' if lang == "en" else ''
    cs_cur = ' aria-current="true"' if lang == "cs" else ''
    return (f'<div class="lang" role="group" aria-label="Language"><a href="{url("en", pid)}" hreflang="en" lang="en"{en_cur}>EN</a>'
            f'<a href="{url("cs", pid)}" hreflang="cs" lang="cs"{cs_cur}>CZ</a></div>')


def set_head(html, lang, pid, depth):
    block = seo_block(lang, pid, depth)
    if "<!-- seo -->" in html:
        return re.sub(r"<!-- seo -->.*?<!-- /seo -->", lambda m: block, html, flags=re.S)
    html = re.sub(r'<meta name="description"[^>]*>\n', "", html, count=1)
    html = re.sub(r"<title[^>]*>.*?</title>\n", "", html, count=1, flags=re.S)
    html = re.sub(r'<link rel="canonical"[^>]*>\n', "", html, count=1)
    return html.replace('<meta name="viewport"', block + '\n<meta name="viewport"', 1)


def set_lang_switch(html, lang, pid):
    new, n = re.subn(r'<div [^>]*class="lang"[^>]*>.*?</div>', lambda m: lang_switch(lang, pid),
                     html, count=1, flags=re.S)
    assert n == 1, "language switch not found"
    return new


def load_cs():
    js = open(os.path.join(ROOT, "assets/site.js"), encoding="utf-8").read()
    i = js.index("var CS={") + len("var CS={")
    j = js.index("};", i)
    out = {}
    for m in re.finditer(r'(?:^|,|\n)\s*([A-Za-z_][A-Za-z0-9_]*):"((?:[^"\\]|\\.)*)"', js[i:j]):
        out[m.group(1)] = json.loads('"' + m.group(2) + '"')
    return out


def to_czech(html, pid, CS):
    soup = BeautifulSoup(html, "html.parser")
    for el in soup.select("[data-i18n]"):
        k = el["data-i18n"]
        if k in CS:
            el.string = CS[k]
    for el in soup.select("[data-i18n-html]"):
        k = el["data-i18n-html"]
        if k in CS:
            el.clear()
            el.append(BeautifulSoup(CS[k], "html.parser"))
    soup.html["lang"] = "cs"
    soup.html["data-site"] = "cs"
    for a in soup.find_all(attrs={"href": True}):
        a["href"] = cz_path(a["href"])
    for a in soup.find_all(attrs={"data-p": True}):
        a["data-p"] = cz_path(a["data-p"])
    for attr in ("href", "src"):                       # cs/ is one level deeper -> shared assets
        for a in soup.find_all(attrs={attr: True}):
            v = a[attr]
            if not v.startswith(("http", "mailto:", "#", "/", "data:")) and re.match(r"(\.\./)*assets/", v):
                a[attr] = "../" + v
    return str(soup)


def cz_path(v):
    if v.startswith(("http", "mailto:", "#")):
        return v
    for pid, (en, cs) in PATHS.items():
        if en:
            v = re.sub(r"(^|/)" + re.escape(en), lambda m: m.group(1) + cs, v)
    return v


def sitemap():
    rows = []
    for lang in ("en", "cs"):
      for pid in [p for p in PATHS if p not in NOINDEX]:
        rows.append(f'''  <url><loc>{url(lang, pid)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="{url("en", pid)}"/>
    <xhtml:link rel="alternate" hreflang="cs" href="{url("cs", pid)}"/>
  </url>''')
    return ('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
            'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + "\n".join(rows) + "\n</urlset>\n")


def robots():
    return f"User-agent: *\nAllow: /\nDisallow: /dl/\n\nSitemap: {EN_DOM}sitemap.xml\n"


def page_404(home_html):
    t = ("Page not found", "This page does not exist or has moved.", "Back to the home page")
    head = re.sub(r"<!-- seo -->.*?<!-- /seo -->",
                  f'<title>{t[0]} | Axion</title>\n<meta name="robots" content="noindex">\n'
                  f'<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">', home_html.split("<body")[0], flags=re.S)
    head = head.replace('href="assets/', 'href="/assets/')
    nav = re.search(r"<header class=\"nav\">.*?</header>", home_html, re.S).group(0)
    nav = re.sub(r'(href|data-p)="(?!https?:|#|mailto:)([^"]*)"', lambda m: f'{m.group(1)}="/{m.group(2).lstrip("./")}"', nav)
    nav = nav.replace('href="#contact"', 'href="/#contact"')
    footer = re.search(r"<footer>.*?</footer>", home_html, re.S).group(0)
    return (head + '<body data-page="404">\n' + nav +
            f'\n<main id="top"><section class="statement first"><div class="wrap"><div class="sh"><span class="eyebrow">404</span>'
            f'<h1>{t[0]}</h1><p>{t[1]}</p><p lang="cs">Stránka nenalezena – neexistuje nebo se přesunula.</p></div>'
            f'<a class="btn primary" href="/"><span>{t[2]}</span><span class="arrow">→</span></a> '
            f'<a class="btn" href="/cs/" lang="cs"><span>Česká verze</span><span class="arrow">→</span></a>'
            f'</div></section></main>\n{footer}\n</body>\n</html>\n')


def redirect_page(target):
    return f'''<!doctype html>
<html lang="cs"><head><meta charset="utf-8">
<title>Axion – přesměrování</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="{target}">
<meta http-equiv="refresh" content="0; url={target}">
<script>location.replace("{target}"+location.hash)</script>
</head><body><p>Web se přesunul na <a href="{target}">{target}</a>.</p></body></html>
'''


def build_redirects(cz):
    """Old Czech domain -> axion-cad.com/cs/... (path preserved). Only CNAME/.nojekyll/docs stay."""
    keep = {"CNAME", ".nojekyll", ".git", "CLAUDE.md", "README.md"}
    for n in os.listdir(cz):
        if n in keep:
            continue
        p = os.path.join(cz, n)
        shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    for pid, (_, cs_path) in PATHS.items():
        os.makedirs(os.path.join(cz, cs_path), exist_ok=True)
        open(os.path.join(cz, cs_path, "index.html"), "w", encoding="utf-8").write(redirect_page(CS_DOM + cs_path))
    # anything else (unknown paths) -> same path under /cs/
    open(os.path.join(cz, "404.html"), "w", encoding="utf-8").write(redirect_page(CS_DOM).replace(
        f'location.replace("{CS_DOM}"+location.hash)',
        f'location.replace("{CS_DOM}"+location.pathname.replace(/^\\/+/,"")+location.search+location.hash)'))
    open(os.path.join(cz, "robots.txt"), "w").write("User-agent: *\nAllow: /\n")
    open(os.path.join(cz, "CNAME"), "w").write("axion-cad.cz\n")
    open(os.path.join(cz, ".nojekyll"), "w").close()


def main():
    if len(sys.argv) > 2:
        sys.exit(__doc__)
    CS = load_cs()
    shutil.rmtree(os.path.join(ROOT, "cs"), ignore_errors=True)
    for pid, (en_path, cs_path) in PATHS.items():
        src = os.path.join(ROOT, en_path, "index.html")
        depth = en_path.count("/")
        html = open(src, encoding="utf-8").read()
        html = set_lang_switch(set_head(html, "en", pid, depth), "en", pid)
        open(src, "w", encoding="utf-8").write(html)
        cz_html = to_czech(html, pid, CS)
        cz_html = set_lang_switch(set_head(cz_html, "cs", pid, depth + 1), "cs", pid)
        cz_html = cz_html.replace('<html data-site="cs" lang="cs">', '<html lang="cs" data-site="cs">')
        if not cz_html.lstrip().lower().startswith("<!doctype"):
            cz_html = "<!doctype html>\n" + cz_html
        os.makedirs(os.path.join(ROOT, "cs", cs_path), exist_ok=True)
        open(os.path.join(ROOT, "cs", cs_path, "index.html"), "w", encoding="utf-8").write(cz_html)
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write(sitemap())
    open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8").write(robots())
    home = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    open(os.path.join(ROOT, "404.html"), "w", encoding="utf-8").write(page_404(home))
    if len(sys.argv) == 2:
        build_redirects(os.path.abspath(sys.argv[1]))
        print("ok: en + cs/ (in place), redirects ->", sys.argv[1])
    else:
        print("ok: en + cs/ (in place)")


if __name__ == "__main__":
    main()
