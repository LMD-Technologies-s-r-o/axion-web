# axion-web – pravidla pro Claude

Web produktu **Axion** (LMD Technologies s.r.o.) na **https://axion-cad.com**. Odpovídej česky, stručně.

## Jak funguje nasazení
- GitHub Pages, zdroj = větev `main`, kořen repa. **Každý push do `main` = web se sám aktualizuje** (cca 1–2 min).
- Doména: `CNAME` = `axion-cad.com` (neměnit). `.nojekyll` musí zůstat.
- `axion-cad.cz` obsluhuje samostatné repo `axion-cz-redirect` – jen přesměrování na `https://axion-cad.com/#cs`.
  Do něj se web **nikdy nekopíruje**.

## Struktura (od 2026-10-07 víc stránek)
- `index.html` = úvod (hero, fakta, Proč Axion, panel, ukázka z praxe, FAQ, kontakt)
- `features/`, `integrations/`, `cases/`, `deployment/` – podstránky (každá `index.html`)
- `assets/site.css` – společné styly, `assets/site.js` – společný skript, `assets/img/` – obrázky
- Menu, patička a kontakt jsou v každé stránce zvlášť → změnu udělat ve všech 5 souborech.
- Odkazy mezi stránkami jsou relativní (`features/`, `../`), mají i `data-p` (JS k nim při CZ přidá `#cs`).

## Jazyky
- Výchozí text v HTML je **anglicky**; čeština je ve slovníku `var CS={...}` v `assets/site.js`
  (klíče odpovídají `data-i18n` / `data-i18n-html` v HTML). **Každý nový text = HTML (EN) + klíč v CS.**
- V českých textech nedělit jednopísmenné předložky (a, i, k, o, s, u, v, z) – za ně ` `.
- Jazyk se drží napříč stránkami (localStorage + `#cs`), `?lang=cs` funguje taky.

## Postup při úpravě webu
1. `git pull`, upravit soubory, otestovat lokálně (`python3 -m http.server`) v EN i CZ, PC i mobil.
2. Commit se srozumitelnou zprávou česky → push do `main`.
3. Po ~2 min ověřit živý web.
4. Zrcadlo na PC uživatele (`MechCopilot\Claude outputs\axion-github\axion-web\`) je jen záloha; **zdrojem pravdy je GitHub**.

## Obsahová pravidla
- „SOLIDWORKS" velkými písmeny a v češtině se neskloňuje („v SOLIDWORKS").
- Axion neprezentovat jako vázaný na konkrétní verzi SW; nasazení na míru zákazníkovi (úvodní schůzka → výběr funkcí).
- Zápis jen do PDM/PLM (primární prostředí konstruktéra); ERP, MES, výroba a další jen čtení přes API.
- Čísla 60–70 % (čas kontroly výkresu, reklamace) jsou z testování LMD – vždy s poznámkou o původu.
- Jazyky: CZ + EN, další na přání zákazníka. Kontakt: info@lmd-technologies.cz, www.lmd-technologies.cz.
- Na webu nezmiňovat zákazníky ani interní projekty bez výslovného souhlasu. Repo je veřejné – sem nepsat nic interního.
