# axion-web – pravidla pro Claude

Web produktu **Axion** (LMD Technologies s.r.o.) na **https://axion-cad.com**. Odpovídej česky, stručně.

## Jedna doména, dva jazyky
- **axion-cad.com** = celý web, GitHub Pages z `main`. Angličtina v kořeni, **čeština v `/cs/`** (generovaná – needitovat ručně).
- Česká verze má české adresy: `/cs/funkce/`, `/cs/propojeni/`, `/cs/z-praxe/`, `/cs/nasazeni/` (EN: features, integrations, cases, deployment).
- Přepínač EN/CZ vede na odpovídající stránku druhého jazyka; volba se pamatuje (localStorage `axion-lang`).
  Prohlížeč v češtině/slovenštině dostane na EN webu lištu „Přepnout do češtiny" – **žádné automatické přesměrování**.
- **axion-cad.cz** = repo `axion-cz-redirect`: jen přesměrování starých adres na `axion-cad.com/cs/...` (generuje build.py).
  Staré odkazy `axion-cad.com/#cs` JS přesměruje na `/cs/`.
- `CNAME` (`axion-cad.com`) a `.nojekyll` neměnit.

## Demo ke stažení a právní texty
- `download/` (`/cs/stazeni/`): formulář → licenční server `axion-license` (`/api/trial/register`) → e-mail s odkazem a klíčem.
  Odkaz z e-mailu vede na `get/#<token>` → server `/d/<token>` → přesměruje na instalátor.
- Instalátor dema: `dl/Axion-Demo-Setup-<verze>.exe` (podepsaný, mimo vyhledávače – `Disallow: /dl/`). Nová verze = nový soubor
  + změna `DOWNLOAD_URL` v repu `axion-license` (wrangler.toml); starý soubor smazat.
- `terms/` (`/cs/podminky/`), `privacy/` (`/cs/ochrana-udaju/`) – podmínky a zásady ochrany údajů; odkazy v patičce všech stránek.
  Při změně podmínek změnit datum na stránce i `TERMS` v `assets/site.js` (verze souhlasu ukládaná serverem).
- `guide/` (`/cs/navod/`): uživatelská příručka – odkaz v patičce, na stránce stažení a ve všech e-mailech licenčního serveru.
  Při změně menu nebo průvodce v Axionu aktualizovat i příručku.
- Příručka, sekce **5. Modely AI** (`#models`, CZ `/cs/navod/#models`): tabulka modelů, které jde v Axionu vybrat (stav k datu v textu).
  Při změně nabídky modelů v aplikaci aktualizovat tabulku tady (EN v `guide/index.html`, CZ `g_p_models` v `assets/site.js`)
  i v e-mailu licenčního serveru (`axion-license/src/mail.js`). Odkazuje na ni Nastavení v Axionu.
- Formulář „Domluvit schůzku“ (okno, `#meet` ho otevře z odkazu): `assets/site.js` → licenční server `POST /api/meet` → e-mail na info@.
- Tlačítka (cíl = placené balíčky, demo až druhé): menu = Ceník (na stránce ceníku Stáhnout demo); úvod = Vybrat balíček (hlavní) + Stáhnout demo zdarma + Domluvit schůzku;
  kontaktní box = verze na míru (schůzka).

## Struktura
- `index.html` (úvod), `features/`, `integrations/`, `cases/`, `deployment/` – anglické stránky (zdroj).
- `assets/site.css`, `assets/site.js` (+ český slovník `var CS={...}`), `assets/img/`, favicon, `og-*.png` (náhled pro sdílení).
- `cs/` – česká verze, **generovaná** z EN stránek + slovníku. Sdílí `assets/` (o úroveň výš).
- `tools/build.py` – generátor: SEO hlavička EN stránek (mezi `<!-- seo -->` a `<!-- /seo -->`) + celá česká verze v `cs/`,
  jeden `sitemap.xml` (oba jazyky), `robots.txt`, `404.html`; s argumentem i přesměrování v repu `axion-cz-redirect`. **Titulky a popisy stránek jsou v `PAGES` v build.py.**
- Menu, patička a kontakt jsou v každé stránce zvlášť → změnu udělat ve všech 5 EN souborech.

## Jazyky
- Text v HTML je anglicky; čeština je ve slovníku `CS` v `assets/site.js` (klíče = `data-i18n` / `data-i18n-html`).
  **Každý nový text = HTML (EN) + klíč v CS.** Bez klíče zůstane na české verzi angličtina.
- V českých textech nedělit jednopísmenné předložky (a, i, k, o, s, u, v, z) – za ně `\u00a0`.

## Postup při úpravě webu
1. `git pull` (u změny adres i v `axion-cz-redirect`).
2. Upravit EN stránky + český slovník (+ případně `PAGES` v build.py).
3. `python3 tools/build.py` (vyžaduje `bs4`); při změně adres stránek `python3 tools/build.py ../axion-cz-redirect`.
4. Otestovat lokálně (`python3 -m http.server`) `/` i `/cs/`, PC i mobil, bez chyb v konzoli.
5. Commit + push do `main` (+ `axion-cz-redirect`, pokud se měnil); po ~2 min ověřit axion-cad.com i axion-cad.com/cs/.
6. Zrcadlo na PC uživatele (`MechCopilot\Claude outputs\axion-github\`) je jen záloha; zdrojem pravdy je GitHub.

## Obsahová pravidla
- „SOLIDWORKS" velkými písmeny a v češtině se neskloňuje („v SOLIDWORKS").
- Axion neprezentovat jako vázaný na konkrétní verzi SW; nasazení na míru zákazníkovi (úvodní schůzka → výběr funkcí).
- Zápis jen do PDM/PLM (primární prostředí konstruktéra); ERP, MES, výroba a další jen čtení přes API.
- Čísla 60–70 % (čas kontroly výkresu, reklamace) jsou z testování LMD – vždy s poznámkou o původu.
- Jazyky: CZ + EN, další na přání zákazníka. Kontakt: info@lmd-technologies.cz, www.lmd-technologies.cz.
- Na webu nezmiňovat zákazníky ani interní projekty bez výslovného souhlasu. Repo je veřejné – sem nepsat nic interního.
