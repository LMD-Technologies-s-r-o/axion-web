# axion-web – pravidla pro Claude

Web produktu **Axion** (LMD Technologies s.r.o.) na **https://axion-cad.com**. Odpovídej česky, stručně.

## Dvě domény, jeden zdroj
- **axion-cad.com** = anglická verze = toto repo (`axion-web`), GitHub Pages z `main`.
- **axion-cad.cz** = česká verze = repo `axion-cz-redirect` (název historický), **generované** – needitovat ručně.
- Česká verze má české adresy: `/funkce/`, `/propojeni/`, `/z-praxe/`, `/nasazeni/` (EN: features, integrations, cases, deployment).
- Přepínač EN/CZ vede na odpovídající stránku druhé domény. Staré odkazy `axion-cad.com/#cs` JS přesměruje na .cz.
- `CNAME` (`axion-cad.com`) a `.nojekyll` neměnit.

## Struktura
- `index.html` (úvod), `features/`, `integrations/`, `cases/`, `deployment/` – anglické stránky (zdroj).
- `assets/site.css`, `assets/site.js` (+ český slovník `var CS={...}`), `assets/img/`, favicon, `og-*.png` (náhled pro sdílení).
- `tools/build.py` – generátor: SEO hlavička EN stránek (mezi `<!-- seo -->` a `<!-- /seo -->`) + celá česká verze,
  `sitemap.xml`, `robots.txt`, `404.html` pro obě domény. **Titulky a popisy stránek jsou v `PAGES` v build.py.**
- Menu, patička a kontakt jsou v každé stránce zvlášť → změnu udělat ve všech 5 EN souborech.

## Jazyky
- Text v HTML je anglicky; čeština je ve slovníku `CS` v `assets/site.js` (klíče = `data-i18n` / `data-i18n-html`).
  **Každý nový text = HTML (EN) + klíč v CS.** Bez klíče zůstane na české verzi angličtina.
- V českých textech nedělit jednopísmenné předložky (a, i, k, o, s, u, v, z) – za ně `\u00a0`.

## Postup při úpravě webu
1. `git pull` v obou repech (`axion-web`, `axion-cz-redirect`).
2. Upravit EN stránky + český slovník (+ případně `PAGES` v build.py).
3. `python3 tools/build.py ../axion-cz-redirect` (vyžaduje `bs4`).
4. Otestovat lokálně (`python3 -m http.server`) obě verze, PC i mobil, bez chyb v konzoli.
5. Commit + push **obou** rep do `main`; po ~2 min ověřit axion-cad.com i axion-cad.cz.
6. Zrcadlo na PC uživatele (`MechCopilot\Claude outputs\axion-github\`) je jen záloha; zdrojem pravdy je GitHub.

## Obsahová pravidla
- „SOLIDWORKS" velkými písmeny a v češtině se neskloňuje („v SOLIDWORKS").
- Axion neprezentovat jako vázaný na konkrétní verzi SW; nasazení na míru zákazníkovi (úvodní schůzka → výběr funkcí).
- Zápis jen do PDM/PLM (primární prostředí konstruktéra); ERP, MES, výroba a další jen čtení přes API.
- Čísla 60–70 % (čas kontroly výkresu, reklamace) jsou z testování LMD – vždy s poznámkou o původu.
- Jazyky: CZ + EN, další na přání zákazníka. Kontakt: info@lmd-technologies.cz, www.lmd-technologies.cz.
- Na webu nezmiňovat zákazníky ani interní projekty bez výslovného souhlasu. Repo je veřejné – sem nepsat nic interního.
