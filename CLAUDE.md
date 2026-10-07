# axion-web – pravidla pro Claude

Web produktu **Axion** (LMD Technologies s.r.o.) na **https://axion-cad.com**. Odpovídej česky, stručně.

## Jak funguje nasazení
- GitHub Pages, zdroj = větev `main`, kořen repa. **Každý push do `main` = web se sám aktualizuje** (cca 1–2 min).
- Doména: `CNAME` = `axion-cad.com` (neměnit). `.nojekyll` musí zůstat.
- `axion-cad.cz` obsluhuje samostatné repo `axion-cz-redirect` – jen přesměrování na `https://axion-cad.com/#cs`.
  Do něj se web **nikdy nekopíruje**.

## Postup při úpravě webu
1. `git pull` (nebo čerstvý clone), upravit `index.html` (single-file: CSS + JS + obrázky jako data URI).
2. Zachovat dvojjazyčnost EN/CS (přepínač, `#cs` v URL otevře češtinu). Obsah měnit v obou jazycích.
3. Commit se srozumitelnou zprávou česky → push do `main`.
4. Po ~2 min ověřit živý web (WebFetch / prohlížeč) – titulek, změněný text.
5. Zrcadlo na PC uživatele (`MechCopilot\Claude outputs\axion-github\axion-web\`) aktualizovat jen jako zálohu;
   **zdrojem pravdy je GitHub**, ne lokální složka.

## Obsahová pravidla
- „SOLIDWORKS" velkými písmeny a v češtině se neskloňuje („v SOLIDWORKS").
- Axion neprezentovat jako vázaný na konkrétní verzi SW; nasazení na míru zákazníkovi (úvodní schůzka → výběr funkcí).
- Jazyky: CZ + EN, další na přání zákazníka. Kontakt: info@lmd-technologies.cz, www.lmd-technologies.cz.
- Na webu nezmiňovat zákazníky ani interní projekty bez výslovného souhlasu. Repo je veřejné – sem nepsat nic interního.
