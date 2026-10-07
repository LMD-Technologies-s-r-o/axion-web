(function(){if(document.body.dataset.page!=="home")return;var M={features:"features/",panel:"features/#panel",demo:"features/#demo",connect:"integrations/",real:"cases/",build:"deployment/",security:"deployment/#security",faq:"deployment/#faq"},h=location.hash.slice(1);if(M[h])location.replace(M[h]);})();

(function(){
var HAS_HERO=!!document.getElementById("cad"),HAS_TABS=!!document.getElementById("tp-b");
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
/* ---------- i18n ---------- */
var CS={n8:"Nasazení",t_home:"Axion · AI konstruktér v\u00a0SOLIDWORKS",t_features:"Funkce · Axion",t_integrations:"Propojení · Axion",t_cases:"Z praxe · Axion",t_deployment:"Nasazení · Axion",x_k:"Přehled",x_h:"Prozkoumejte Axion",more:"Více",x1k:"Funkce",x1h:"Co Axion umí",x1p:"Živá geometrie, výkresy, normy, vyrobitelnost, cena a\u00a0znovupoužití dílů. Včetně interaktivní ukázky.",x2k:"Propojení",x2h:"Celá firma na jednom místě",x2p:"PDM/PLM, ERP, MES i\u00a0další oddělení v\u00a0jednom rozhraní. Zapisuje se jen do PDM/PLM.",x3k:"Z praxe",x3h:"Skutečné výstupy",x3p:"Neupravené odpovědi Axionu na skutečných dílech a\u00a0výkresech.",x4k:"Nasazení",x4h:"Jak ho nasadíme",x4p:"Na míru vaší firmě, lokálně od základu, s\u00a0vlastním API klíčem k\u00a0AI a\u00a0přehledem nákladů.",f1b:"< 0,01 €",f1:"jedna kontrola vyrobitelnosti přes AI",f2b:"Lokálně",f2:"většina funkcí běží bez AI, nic neopustí váš počítač",f3b:"PDM · ERP · MES",f3:"data z\u00a0celé firmy v\u00a0jednom rozhraní",f4b:"Na míru",f4:"žádné uzamčené jádro, funkce si vyberete",f5b:"60–70 %",f5:"méně času seniorních konstruktérů na kontrolu výkresů",f6b:"≈ 60–70 %",f6:"méně reklamací po výrobě",f_n:"Úspora času a\u00a0pokles reklamací vycházejí z\u00a0našeho testování. Skutečný výsledek závisí na typu výkresů a\u00a0na vašich procesech.",w_k:"Proč Axion",w_h:"Konstruktér, který zná výkres, výrobu i\u00a0celou firmu.",w1k:"Výkresy a\u00a0výroba",w1h:"Rozumí výkresům i\u00a0výrobě",w1p:"Čte živou geometrii a\u00a0značky na výkresu, hlídá normy, vyrobitelnost a\u00a0cenu a\u00a0najde díly, které už máte navržené. Šetří čas těch nejdražších lidí ve firmě: seniorních konstruktérů.",w2k:"Propojení",w2h:"Celá firma na jednom místě",w2p:"Data z\u00a0PDM/PLM, ERP, MES i\u00a0dalších oddělení v\u00a0jednom rozhraní. Zapisuje jen do PDM/PLM, ostatní systémy čte přes API.",w2a:"zápis",w3k:"Bezpečnost",w3h:"Data zůstávají u\u00a0vás",w3p:"Většina funkcí běží lokálně bez AI. AI se zapojí jen v\u00a0chatu, s\u00a0vaším vlastním API klíčem a\u00a0jen s\u00a0tím, co dotaz potřebuje.",w3c:"Váš vlastní API klíč",z_k:"Z praxe",z_h:"Skutečný výkres. Konkrétní nálezy.",z_p:"Hřídel Ø20 h9, délka 866 mm, materiál C45+C. Na otázku, jestli se dá vyrobit tak, jak je nakreslená, Axion odpověděl:",z1:"Kruhovitost 6 µm na tažené tyči h9 bez broušení na bezhrotce nedosáhnete.",z2:"Zóna kruhovitosti nesmí mít symbol Ø (ISO 1101).",z3:"Frézování drážky uvolní pnutí v\u00a0C45+C a\u00a0hřídel se prohne.",z4:"Ke každé kótě dal aktuální hodnotu, doporučení a\u00a0důvod, připravené pro revizi výkresu.",z_q:"› Dá se to vyrobit, jak je nakresleno?",z_m:"Další případy z\u00a0praxe",uh_m:"Prohlédnout panel",q_h2:"Co zajímá vedení i\u00a0konstruktéry",nx_k:"Pokračujte",ak_h:"Vlastní API klíč k\u00a0AI",ak_p:"Část funkcí, například hodnocení vyrobitelnosti nebo prohledávání externích norem, využívá velký jazykový model (LLM). Firma k\u00a0tomu potřebuje vlastní API klíč u\u00a0poskytovatele AI. Doporučujeme Claude, Gemini nebo Mistral, Axion ale přizpůsobíme i\u00a0jinému poskytovateli.",ak_r:"Doporučujeme",ak_o:"+ jiný poskytovatel",
q9:"Co potřebujeme pro AI funkce?",a9:"Vlastní API klíč u\u00a0poskytovatele AI (LLM). Využívají ho funkce jako hodnocení vyrobitelnosti nebo prohledávání externích norem. Doporučujeme Claude, Gemini nebo Mistral, Axion ale přizpůsobíme i\u00a0jinému poskytovateli. Lokální funkce, jako generování výkresů nebo kontroly pravidel, běží bez AI.",
q10:"Na jaké informační systémy se Axion napojí?",a10:"Na standardní systémy jako SAP nebo Helios, na MES systémy a\u00a0na další, které poskytují API rozhraní. Data z\u00a0nich Axion čte, položky zakládá a\u00a0upravuje jen v\u00a0PDM/PLM.",
n7:"Propojení",m_8:"Napojení PDM / PLM / ERP",
i_k:"Propojení",i_h:"Celá firma na jednom místě.",
i_p:"Axion spojí data z\u00a0konstrukce i\u00a0zbytku firmy ve svém rozhraní. Z\u00a0ERP, výroby a\u00a0dalších systémů čte informace přes API a\u00a0skládá je do jedné odpovědi. Zapisuje jen do PDM/PLM, protože to je primární pracovní prostředí konstruktéra. Odtud vaše schválené procesy předají data dál do ERP a\u00a0výroby. Napojená je i\u00a0technická dokumentace, která s\u00a0konstruktéry úzce spolupracuje a\u00a0přebírá data přímo z\u00a0CAD.",
i_l:"Vývoj a\u00a0dokumentace",i_lm:"čte i\u00a0zapisuje",i_l1:"modely, výkresy, sestavy",i_l2:"položky, revize, workflow",i_l3h:"Technická dokumentace",i_l3:"přebírá data přímo z\u00a0CAD",i_c:"vše na jednom místě",
i_r:"Firma",i_rm:"čte přes API",i_r1:"ceny, sklad, dodavatelé",i_r2h:"Výroba",i_r2:"MES, kapacity, živý plán výroby",i_r3h:"Nákup",i_r3:"objednávky, termíny dodání",i_r4h:"Kvalita",i_r4:"měření, neshody, reklamace",i_r5h:"Obchod a\u00a0servis",i_r5:"nabídky, zakázky, servis",
i1h:"Zapisuje tam, kde konstruktér pracuje",i1p:"PDM/PLM je primární pracovní prostředí konstruktéra, proto Axion zapisuje jen sem: zakládá položky, vyplňuje datové karty, vyzvedává a\u00a0vrací soubory a\u00a0spouští přechody workflow. Navazující operace v\u00a0PDM/PLM pak předají data do ERP a\u00a0výroby tak, jak je máte nastavené.",
i2h:"Ceny a\u00a0sklad u\u00a0každého dílu",i2p:"Přes API (např. SAP, Helios) načte cenu, dodavatele, skladovou zásobu i\u00a0technologický postup a\u00a0ukáže je přímo u\u00a0dílů, v\u00a0kusovnících a\u00a0v\u00a0odhadech ceny. Do ERP nic nezapisuje.",
i3k:"Výroba",i3h:"Výroba v\u00a0živém přenosu",i3p:"Pomůže propojit data a\u00a0informace z\u00a0MES systémů. Konstruktér tak má plánování výroby v\u00a0živém přenosu na jednom místě: kapacity, technologie i\u00a0stav zakázek vidí ještě před vydáním dílu.",
i4k:"Další oddělení",i4h:"Celá firma v\u00a0jedné odpovědi",i4p:"Nákup, kvalita, obchod: Axion spojí jejich data s\u00a0konstrukcí. Zeptáte se jednou a\u00a0k\u00a0dílu dostanete cenu, termín, sklad i\u00a0historii reklamací najednou.",
i_n:"Informační systémy napojujeme přes API: standardní systémy jako SAP nebo Helios a\u00a0další, které API rozhraní poskytují. Připojují se jen pro čtení. Zápis zůstává v\u00a0PDM/PLM, v\u00a0prostředí, kde konstruktéři pracují a\u00a0kde máte revize i\u00a0schvalování pod kontrolou. Které systémy a\u00a0jaká data propojíme, určíme společně na úvodní schůzce.",


langs:"Funguje v <b>češtině</b> i <b>angličtině</b> – další jazyky podle přání zákazníka",q8:"V jakých jazycích Axion funguje?",a8:"Axion funguje v češtině i angličtině, v panelu i v chatu. Další jazyky doplníme podle přání zákazníka.",ft1:"© 2026 LMD Technologies s.r.o. · Axion pro SOLIDWORKS",ft2:"Přesnost v každé ose. Akce na každý příkaz.",k_h:"Kolik stojí provoz AI",k_p:"Orientační náklady na poskytovatele AI při napojení Gemini, podle míry používání a aktuálního ceníku poskytovatele.",k1:"běžný dotaz na kontrolu vyrobitelnosti, méně než jeden eurocent",k2b:"8–16 € / měsíc",k1b:"< 0,01 €",k3b:"0 €",k2:"na uživatele při používání všech funkcí včetně modelování a úprav přes AI",k3:"lokální funkce: výkresy, kontroly a výpočty běží bez AI",q7:"Kolik stojí provoz AI?",a7:"Velmi málo. Běžný dotaz na kontrolu vyrobitelnosti vyjde na méně než jeden eurocent. S Gemini se uživatel, který využívá všechny funkce včetně modelování a úprav přes AI, pohybuje zhruba na 8–16 € měsíčně. Lokální funkce běží bez AI a nic navíc nestojí.",c2f:"Ra 0,2 → výřez R17",r6h:"Modelování podle přiloženého obrázku",r6a:"<b>Přiložte a zeptejte se.</b> Obrázek a jedna věta. Žádná skica, žádné ručně zadané rozměry.",r6b:"<b>Axion pracuje přímo v SOLIDWORKS.</b> Přečte aktivní dokument, najde potřebné soubory a postaví díl prvek po prvku.",r6c:"<b>Výsledek.</b> Plechový díl s bočními stěnami, dírami, drážkami a výřezy. Stejný díl se živě staví v úvodu této stránky.",you:"Vy",r0h:"Modelování ze zadání běžnou řečí",r0q:"Vytvoř hřídel o průměru 15 mm, délce 120 mm a se sražením 3 mm",r0a:"<b>Zpracování.</b> Každý krok, který Axion v SOLIDWORKS provede, se průběžně vypisuje i s časem.",r0b:"<b>Hotovo.</b> Kroky se sbalí do jednoho řádku, kliknutím uvidíte, co přesně se v modelu udělalo, a pod tím je shrnutí výsledku.",r0f:"<b>Výsledek v SOLIDWORKS.</b> Nový díl s hřídelí a oběma sraženími, připravený k další práci.",u_k:"Panel",u_h:"Takhle Axion vypadá v SOLIDWORKS.",u_p:"Panel ukotvený vedle modelu. Žádná samostatná aplikace, žádná záložka v prohlížeči.",u1h:"Navrhovat · Analyzovat · Podpora",u1p:"Nástroje seskupené tak, jak konstruktér pracuje: modelování a výkresy, kontroly a výpočty, nápověda a kontakt.",u2h:"Co umím",u2p:"Modelování, výkresy, sestavy, normy a výpočty, AI asistent. Přehled se přizpůsobí funkcím, které u vás nasadíme.",u3h:"Zadání běžnou řečí",u3p:"Popište úkol vlastními slovy nebo přiložte výkres. Poskytovatele AI si vyberete sami.",u4h:"Nastavení pro každého uživatele",u4p:"Velikost písma celého panelu a firemní pravidla, šablony a zdroje dat.",n6:"Jak ho stavíme",b_k:"Jak ho stavíme",b_h:"Váš asistent, postavený podle toho, jak pracujete.",b_p:"Před implementací si spolu sedneme a určíme, co má Axion u vás umět. Pak postavíme přesně to.",b_nh:"Žádné uzamčené jádro.",b_np:"Nekupujete hotový produkt, kterému se musíte přizpůsobit. Vyberete funkce, které potřebujete teď, a další přidáte nebo změníte podle toho, jak se vyvíjí váš tým a procesy.",b1h:"Úvodní schůzka",b1p:"Určíte, co má asistent zvládat, které funkce nasadit a s jakými normami, šablonami a daty má pracovat.",b2h:"Stavba na míru",b2p:"Axion poskládáme z vybraných modulů, doplníme vlastní funkce a napojíme ho na vaše systémy, ceníky a knihovnu dílů.",b3h:"Pilot na vašich dílech",b3p:"Vaši konstruktéři ho vyzkouší na skutečných modelech a výkresech. Pravidla a odpovědi ladíme, dokud výsledky neodpovídají vaší praxi.",b4h:"Nasazení a rozvoj",b4p:"Nasazení na vaši verzi SOLIDWORKS. Nové funkce lze přidat kdykoli, bez začínání od nuly.",m_1:"Vyrobitelnost",m_2:"Kontrola výkresu",m_3:"Odhad ceny",m_4:"Normy a ISO",m_5:"Generování výkresů",m_6:"Podobné díly",m_7:"Modelování z textu",m_9:"+ vaše vlastní funkce",n5:"Z praxe",r_k:"Skutečné výstupy",r_h:"Žádná maketa. Skutečné odpovědi na skutečných dílech.",r_p:"Needitované snímky odpovědí Axionu na výrobních výkresech a modelech. Anonymizovali jsme jen názvy dílů.",r1h:"Vyrobitelnost podle výkresu",r1q:"Dá se tahle hřídel vyrobit podle výkresu? Co bys změnil?",r1a:"<b>Výkres vs. realita.</b> Kruhovitost 6 µm se na taženém polotovaru h9 bez bezhrotého broušení nedá dosáhnout.",r1b:"<b>Syntaxe GD&amp;T.</b> Před hodnotou tolerance kruhovitosti nesmí být symbol Ø (ISO 1101).",r1c:"<b>Chování materiálu.</b> Frézování drážky pro pero uvolní zbytková napětí v C45+C a hřídel se prohne.",r1d:"<b>Konkrétní seznam změn.</b> Současná hodnota, doporučená hodnota a důvod u každé kóty, vše připravené pro revizi výkresu.",r2h:"Revize plechového dílu",r2q:"Zkontroluj tenhle díl, než ho vydám.",r2a:"<b>Zahloubení vs. tloušťka plechu.</b> Zahloubení 90° pro M5 nechá v plechu 3 mm jen válcovou plošku 0,2–0,5 mm.",r_n:"Snímky jsou v původním znění (anglicky). Kliknutím odpověď zvětšíte.",n1:"Funkce",n2:"Ukázka",n3:"Bezpečnost",n4:"Otázky",cta_demo:"Domluvit ukázku",cta_see:"Podívat se, jak funguje",new:"Novinka",
pill:"Na míru vaší firmě · pro jakoukoli verzi SOLIDWORKS",
h1:"AI konstruktér <span class=\"grad\">přímo v SOLIDWORKS</span>",
sub:"Méně předělávek, méně dotazů z\u00a0dílny. Axion hlídá výkresy, normy, vyrobitelnost i\u00a0cenu přímo v\u00a0SOLIDWORKS a\u00a0propojí konstrukci s\u00a0celou firmou.",
ask:"Napište úkol nebo příkaz…",ph_s:"AI asistent konstruktéra · LMD Technologies",ph_m1:"Navrhovat ▾",ph_m2:"Analyzovat ▾",
st_big:"AI, která za vás modeluje, zní skvěle. <em>Dokud nezačnete předělávat každý detail, který si domyslela.</em>",
st_p:"Axion na to jde jinak. Je to parťák konstruktéra přímo v SOLIDWORKS: čte, jak je model postavený, co výkres doopravdy říká, co vaše výroba umí vyrobit a kolik to bude stát. Méně oprav, méně dotazů z dílny, méně reklamací po výrobě.",
f_k:"Schopnosti",f_h:"Jeden asistent. Každý krok od modelu po výrobu.",
c1k:"Živá geometrie",c1h:"Vidí, jak je model postavený",c1p:"Nevidí jen obrázek dílu, ale <strong>živou geometrii</strong>: strom prvků, jak je díl postavený a jak je složená sestava. Proto radí <strong>u konkrétního prvku</strong>.",c1t:"R0,5 je na t = 3 mm málo",
c2k:"Porozumění výkresu",c2h:"Rozumí výkresu, nečte obrázek",c2p:"Žádné OCR. Axion čte <strong>značky a jejich vazby na geometrii</strong>: ví, že Ra 0,2 je na výřezu R17 plechového dílu, kde je taková drsnost zbytečně drahá.",
c3k:"Vyrobitelnost",c3h:"Myslí na výrobu jako první",c3p:"Podle <strong>možností vaší výroby</strong> upozorní na prvky, které se špatně vyrábějí, jsou zbytečně drahé nebo u nich hrozí reklamace.",ch1:"R1 < nástroj R3",ch2:"Hloubka díry 10×D",ch3:"Stěna 1,2 mm OK",
c4k:"Cena",c4h:"Zná cenu a ví, jak ji snížit",c4p:"Odhadne <strong>cenu výroby</strong> z geometrie, materiálu a tolerancí, zpřesní ji podle <strong>vašich ceníků, nabídek nebo dat z ERP</strong> a navrhne levnější výrobní řešení.",m1:"Obrábění",m2:"Plech",m3:"Použít hotový díl",
c5k:"Normy",c5h:"Hlídá normy a kvalitu dat",c5p:"Kontroluje výkresy, díly, sestavy i dokumenty podle technických norem a firemních pravidel a výsledek ukáže v přehledné tabulce OK / NOK.",o2:"Formát listu A3",o3:"Razítko · materiál",d1:"3 pohledy · 1:2",d2:"Kóty",d3:"Kusovník",d4:"Rozvin",
c6k:"Výkresy",c6h:"Výkresy za zlomek času",c6p:"Pohledy, měřítko, kóty, kusovník i rozvin podle vašich firemních šablon. Vy už jen dolaďujete.",
c7k:"Znovupoužití",c7h:"Nekreslete totéž dvakrát",c7p:"Najde v databázi tvarově podobné díly a protikusy.",
c8k:"Modelování",c8h:"A když potřebujete, i vymodeluje",c8p:"Z výkresu nebo zadání postaví díl s plně určenými skicami a materiálem. Rychlý start, který pak upravíte podle sebe.",
c9k:"Lokálně",c9h:"Vaše data zůstávají vaše",c9p:"Většina funkcí běží lokálně v add-inu, bez AI a bez odesílání dat. Poskytovatel AI se zapojí jen v chatu a jen s tím, co dotaz potřebuje.",
d_k:"Ukázka",d_h:"Ptejte se běžnou řečí. Dostanete odborné odpovědi.",tb1:"Kontrola výkresu",tb2:"Vyrobitelnost",tb3:"Podobné díly",
s_k:"Bezpečnost",s_h:"Lokálně od základu",s_p:"Velká část Axionu běží přímo v kódu add-inu, na vašem počítači. Zvolený poskytovatel AI se zapojí jen při práci v chatu.",
s1h:"Lokálně · bez AI",s1a:"Generování výkresů z firemních šablon",s1b:"Hledání podobných dílů a protikusů",s1c:"Kontroly pravidel a norem",s1d:"Výpočty podle ISO 2768 a ISO 286, závity, plechy",s1t:"Nic neopustí váš počítač",
s2h:"AI chat · podle vás",s2a:"Jen kontext, který dotaz potřebuje",s2b:"Poskytovatele AI si volíte sami",s2c:"Možnost lokálního AI modelu bez internetu",s2d:"Platí vaše vlastní pravidla a omezení",s2t:"Kontrolu máte vy",
q_h:"Na co se konstruktéři ptají",
q1:"Je Axion jen další AI, která modeluje díly?",a1:"Ne. Modelování je jedna z funkcí. Hlavní hodnota je v propojení dat: čtení živé geometrie a výkresů, kontrola norem a vyrobitelnosti, odhad ceny a znovupoužití existujících dílů.",
q2:"Které verze SOLIDWORKS podporuje?",a2:"Tu, kterou používáte. Axion je nativní add-in s vlastním panelem a postavíme ho pro verzi SOLIDWORKS, která běží u vás ve firmě.",q6:"Musíme brát pevně daný balík?",a6:"Ne. Žádné uzamčené jádro neexistuje. Na úvodní schůzce si určíte, co má Axion umět, a podle toho ho postavíme. Funkce lze později přidat, změnit nebo odebrat.",
q3:"Opouštějí naše data firmu?",a3:"Lokální funkce běží celé v add-inu. Jen dotazy v chatu jdou k poskytovateli AI, kterého si zvolíte, a to jen s kontextem, který dotaz potřebuje. Možný je i lokální AI model bez přístupu k internetu.",
q4:"Umí se řídit našimi normami a šablonami?",a4:"Ano. Šablony, formáty listů, materiály, pravidla i zdroje dat pro kontroly se nastaví pro vaši firmu, aby výsledky odpovídaly tomu, jak pracujete.",
q5:"Jak začít?",a5:"Domluvte si ukázku. Předvedeme Axion na vašich dílech a výkresech a nastavíme ho podle vašich norem.",
ct_k:"Kontakt",ct_h:"Vyzkoušejte Axion na vlastních modelech",ct_p:"Napište nám a připravíme ukázku na vašich dílech, výkresech a firemních normách.",copy:"Kopírovat",copied:"Zkopírováno",dev:"Vyvíjí"};
var EN={};
document.querySelectorAll("[data-i18n]").forEach(function(e){EN[e.dataset.i18n]=e.textContent});
document.querySelectorAll("[data-i18n-html]").forEach(function(e){EN[e.dataset.i18nHtml]=e.innerHTML});
EN.copied="Copied";
var lang="en";
function T(k){var d=lang==="cs"?CS:EN;return d[k]!=null?d[k]:EN[k]}

/* demo + mock data per language */
var DATA={
 en:{marq:["Live geometry","Drawing intelligence","Design for manufacturing","Cost estimate","ISO 2768","ISO 286","Drawing generation","Similar parts","Mating parts","PDM / PLM","ERP","Local-first"],
  tabs:{check:{h:"Drawing check against your standards",p:"Axion reads every sheet, symbol and title block field and compares it with the rules assigned to the drawing type.",q:"› check drawing Draw1.SLDDRW",c:["Item","Finding","Status"],r:[["General tolerances","ISO 2768-m stated","OK"],["Fit Ø25","H7/g6 matches ISO 286","OK"],["Surface Ra 0.4","Recessed face, poor tool access","NOK"],["Title block","Material missing","NOK"]]},
   dfm:{h:"Manufacturability before release",p:"Feature by feature against your shop limits: radii, hole depths, wall thickness, bend radii.",q:"› is this part manufacturable in our shop?",c:["Feature","Finding","Status"],r:[["Pocket 2","Inner radius R1 < tool R3","NOK"],["Hole Ø6×60","Depth 10×D, drill only","NOK"],["Wall","1.2 mm, limit 1.0 mm","OK"],["Edge-Flange2","Bend R0.5 for t = 3 mm","NOK"]]},
   sim:{h:"Find it before you draw it",p:"Shape fingerprints of your whole library. Open, compare and reuse proven geometry.",q:"› find parts similar to the active one",c:["Part","Match","Material"],r:[["Part7","96 %","S235JR"],["Part12","88 %","S235JR"],["Assembly3","71 %","1.4301"]]}},
  th:["Working…","Done"],
  scen:[{u:"Create the component based on the attached image",att:"Screenshot 2026-10-06 073948.png",ref:"drawing",s:["Reading active document","Finding files","Analysing the attached image","Creating base flange","Adding side flanges","Cutting holes, slots and cut-outs"],build:{3:1,4:2,5:3},a:"I have created a sheet-metal part from the attached image:<ul><li><b>Base flange</b> ≈ 150 × 110 mm, t = 3 mm</li><li><b>Two side flanges</b> rising to the rear, length ≈ 200 mm</li><li><b>Holes, slots</b> and rear cut-outs</li></ul>",file:"Part3.SLDPRT",tag:"<b>LIVE</b> · Sheet-Metal1 · t = 3 mm · L ≈ 200"},
        {u:"Check this part for manufacturability",s:["Reading feature tree","Measuring inner radii","Checking hole depths","Comparing with shop rules"],a:"<b>2 issues found.</b><table><tr><td>Pocket 2 · R1 &lt; tool R3</td><td class='nok'>NOK</td></tr><tr><td>Hole Ø6×60 · 10×D</td><td class='nok'>NOK</td></tr><tr><td>Wall 1.2 mm</td><td class='ok'>OK</td></tr></table>"},
        {u:"What will this part cost and how to make it cheaper?",s:["Reading geometry and material","Estimating machining time","Searching similar parts"],a:"Machined ≈ <b>€75</b>. As sheet metal ≈ <b>€31</b>. <b>Part7</b> is a 96 % match and could be reused."}]},
 cs:{marq:["Živá geometrie","Porozumění výkresu","Vyrobitelnost","Odhad ceny","ISO 2768","ISO 286","Generování výkresů","Podobné díly","Protikusy","PDM / PLM","ERP","Lokálně"],
  tabs:{check:{h:"Kontrola výkresu podle vašich norem",p:"Axion projde každý list, značku i pole razítka a porovná je s pravidly přiřazenými typu výkresu.",q:"› zkontroluj výkres Draw1.SLDDRW",c:["Položka","Zjištění","Stav"],r:[["Volné tolerance","ISO 2768-m uvedeno","OK"],["Uložení Ø25","H7/g6 odpovídá ISO 286","OK"],["Drsnost Ra 0,4","Zahloubená plocha, špatný přístup nástroje","NOK"],["Razítko","Chybí materiál","NOK"]]},
   dfm:{h:"Vyrobitelnost ještě před vydáním",p:"Prvek po prvku proti limitům vaší dílny: rádiusy, hloubky děr, tloušťky stěn, ohyby.",q:"› dá se tenhle díl vyrobit u nás?",c:["Prvek","Zjištění","Stav"],r:[["Kapsa 2","Vnitřní rádius R1 < nástroj R3","NOK"],["Díra Ø6×60","Hloubka 10×D, jen vrtání","NOK"],["Stěna","1,2 mm, limit 1,0 mm","OK"],["Edge-Flange2","Ohyb R0,5 při t = 3 mm","NOK"]]},
   sim:{h:"Najděte díl dřív, než ho nakreslíte",p:"Tvarové otisky celé knihovny. Otevřete, porovnejte a použijte ověřenou geometrii.",q:"› najdi díly podobné aktivnímu",c:["Díl","Shoda","Materiál"],r:[["Part7","96 %","S235JR"],["Part12","88 %","S235JR"],["Assembly3","71 %","1.4301"]]}},
  th:["Pracuji…","Hotovo"],
  scen:[{u:"Vytvoř díl podle přiloženého obrázku",att:"Screenshot 2026-10-06 073948.png",ref:"výkres",s:["Čtu aktivní dokument","Hledám soubory","Analyzuji přiložený obrázek","Vytvářím základní plech","Ohýbám boční stěny","Vyřezávám díry, drážky a výřezy"],build:{3:1,4:2,5:3},a:"Vytvořil jsem plechový díl podle přiloženého obrázku:<ul><li><b>Základní plech</b> ≈ 150 × 110 mm, t = 3 mm</li><li><b>Dvě boční stěny</b> stoupající dozadu, délka ≈ 200 mm</li><li><b>Díry, drážky</b> a zadní výřezy</li></ul>",file:"Part3.SLDPRT",tag:"<b>LIVE</b> · Sheet-Metal1 · t = 3 mm · L ≈ 200"},
        {u:"Zkontroluj vyrobitelnost tohoto dílu",s:["Čtu strom prvků","Měřím vnitřní rádiusy","Kontroluji hloubky děr","Porovnávám s pravidly dílny"],a:"<b>Nalezeny 2 problémy.</b><table><tr><td>Kapsa 2 · R1 &lt; nástroj R3</td><td class='nok'>NOK</td></tr><tr><td>Díra Ø6×60 · 10×D</td><td class='nok'>NOK</td></tr><tr><td>Stěna 1,2 mm</td><td class='ok'>OK</td></tr></table>"},
        {u:"Kolik bude díl stát a jak ho zlevnit?",s:["Čtu geometrii a materiál","Odhaduji čas obrábění","Hledám podobné díly"],a:"Obrábění ≈ <b>75 €</b>. Jako plech ≈ <b>31 €</b>. Díl <b>Part7</b> má shodu 96 % a dá se použít."}]}
};

function apply(l){
  lang=l;document.documentElement.lang=l==="cs"?"cs":"en";
  document.querySelectorAll("[data-i18n]").forEach(function(e){e.textContent=T(e.dataset.i18n)});
  document.querySelectorAll("[data-i18n-html]").forEach(function(e){e.innerHTML=T(e.dataset.i18nHtml)});
  document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.lang===l?"true":"false")});
  var m=DATA[l].marq.concat(DATA[l].marq);
  var tr=document.getElementById("track");if(tr)tr.innerHTML=m.map(function(x){return"<span>"+x+"</span>"}).join("");
  if(HAS_TABS)showTab(curTab);if(HAS_HERO)restartChat();
  document.querySelectorAll("a[data-p]").forEach(function(a){a.setAttribute("href",a.dataset.p+(l==="cs"?"#cs":""))});
  try{localStorage.setItem("axion-lang",l)}catch(e){}
}

/* ---------- tabs ---------- */
var curTab="check";
function showTab(k){
  curTab=k;var t=DATA[lang].tabs[k];
  document.getElementById("tp-h").textContent=t.h;document.getElementById("tp-p").textContent=t.p;document.getElementById("tp-q").textContent=t.q;
  ["th1","th2","th3"].forEach(function(id,i){document.getElementById(id).textContent=t.c[i]});
  document.getElementById("tp-b").innerHTML=t.r.map(function(r){var c=r[2]==="OK"?"ok":(r[2]==="NOK"?"nok":"");return"<tr><td>"+r[0]+"</td><td>"+r[1]+"</td><td class='"+c+"'>"+r[2]+"</td></tr>"}).join("");
  document.querySelectorAll(".tabs button").forEach(function(b){b.setAttribute("aria-selected",b.dataset.tab===k?"true":"false")});
}
document.querySelectorAll(".tabs button").forEach(function(b){b.addEventListener("click",function(){showTab(b.dataset.tab)})});

/* ---------- animated chat in the mock (real Axion chat behavior) ---------- */
var timers=[],scenIdx=0;
function later(f,ms){timers.push(setTimeout(f,ms))}
function clearT(){timers.forEach(function(t){if(t&&t.c)clearInterval(t.c);else clearTimeout(t)});timers=[]}
var $=function(id){return document.getElementById(id)};
var um=$("um"),inp=$("inp"),cmp=$("cmp"),chip=$("chip"),mu=$("mu"),ts=$("ts"),ts2=$("ts2"),st=$("st"),stl=$("st-l"),sth=$("st-h"),stt=$("st-t"),stg=$("st-g"),aw=$("aw"),ma=$("ma"),vfile=$("vfile"),vtag=$("vtag");
function stamp(){var d=new Date(),p=function(n){return(n<10?"0":"")+n};return p(d.getDate())+"."+p(d.getMonth()+1)+"."+d.getFullYear()+" "+p(d.getHours())+":"+p(d.getMinutes())}
function arrow(){stg.textContent=st.classList.contains("col")?"▸":"▾"}
if(stg)stg.addEventListener("click",function(){st.classList.toggle("col");arrow()});
var chatEl=$("chat");try{new MutationObserver(function(){chatEl.scrollTop=chatEl.scrollHeight}).observe(chatEl,{childList:true,subtree:true,characterData:true,attributes:true})}catch(e){}
function scene(sc,lvl){ // lvl 0 empty .. 3 complete
  vfile.textContent="SOLIDWORKS · "+(sc.file||"Part1.SLDPRT");
  hero.set(lvl?sheetGeo(lvl):[]);vtag.innerHTML=lvl===3?sc.tag:"<b>LIVE</b> · "+(lang==="cs"?"Nový díl":"New part");
}
function userHtml(sc){var e=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;")};return e(sc.u)+(sc.att?"<small>[📎 "+e(sc.ref)+"]</small>":"")}
function finish(sc,secs){st.classList.add("done");sth.textContent=DATA[lang].th[1]+" · "+sc.s.length+(lang==="cs"?(sc.s.length>=2&&sc.s.length<=4?" kroky":" kroků"):(sc.s.length===1?" step":" steps"));if(secs)stt.textContent=secs;
  stl.querySelectorAll("li").forEach(function(li){li.className="done"})}
function renderFinal(sc){scene(sc,3);um.hidden=false;mu.innerHTML=userHtml(sc);ts.textContent=stamp();st.hidden=false;st.className="steps";
  stl.innerHTML=sc.s.map(function(x){return"<li><span class='s'></span>"+x+"</li>"}).join("");finish(sc,"15.0 s");arrow();aw.hidden=false;ma.innerHTML=sc.a;ts2.textContent=stamp()}
var firstRun=true;
function runScenario(){
  clearT();var sc=DATA[lang].scen[0];
  if(reduce){renderFinal(sc);return}
  if(firstRun){firstRun=false;renderFinal(sc);st.classList.add("col");arrow();later(runScenario,4500);return}
  scene(sc,1);
  um.hidden=true;ts.textContent="";st.hidden=true;st.className="steps";aw.hidden=true;stl.innerHTML="";
  var i=0,t0;inp.textContent=T("ask");cmp.classList.remove("typing","sent");chip.hidden=true;
  if(sc.att)later(function(){chip.innerHTML="📎 "+sc.att+" <u>✕</u>";chip.hidden=false},700);
  later(function(){cmp.classList.add("typing");(function type(){if(i<=sc.u.length){inp.innerHTML=sc.u.slice(0,i)+"<span class='caret'></span>";i++;later(type,30)}else{later(send,450)}})()},1500);
  function send(){cmp.classList.add("sent");later(function(){cmp.classList.remove("typing","sent");inp.textContent=T("ask");chip.hidden=true;mu.innerHTML=userHtml(sc);ts.textContent=stamp();um.hidden=false;later(startSteps,500)},160)}
  function startSteps(){st.hidden=false;sth.textContent=DATA[lang].th[0];arrow();t0=performance.now();var tick=setInterval(function(){stt.textContent=((performance.now()-t0)/1000).toFixed(1)+" s"},100);timers.push({c:tick});
    sc.s.forEach(function(x,k){later(function(){var lis=stl.querySelectorAll("li");if(lis.length){lis[lis.length-1].className="done";if(sc.build&&sc.build[k-1])scene(sc,sc.build[k-1])}
      var li=document.createElement("li");li.innerHTML="<span class='s'></span>"+x;stl.appendChild(li)},k*1150)});
    later(function(){clearInterval(tick);scene(sc,3);finish(sc);
      later(function(){st.classList.add("col");arrow()},700);
      later(function(){aw.hidden=false;ma.innerHTML=sc.a;ts2.textContent=stamp()},1100);
      later(function(){st.classList.remove("col");arrow()},3400);
      later(function(){st.classList.add("col");arrow()},6000);
      later(function(){scenIdx++;runScenario()},9000)},sc.s.length*1150+500)}
}
function restartChat(){runScenario()}
/* ---------- card hover glow ---------- */
document.querySelectorAll(".card").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")})});

/* ---------- copy ---------- */
var cp=document.getElementById("copy");
if(cp)cp.addEventListener("click",function(){var t=document.getElementById("mail").textContent;
  function ok(){cp.textContent=T("copied");setTimeout(function(){cp.textContent=T("copy")},1500)}
  function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById("mail"));var s=getSelection();s.removeAllRanges();s.addRange(r)}
  try{navigator.clipboard.writeText(t).then(ok,sel)}catch(e){sel()}});

/* ---------- wireframe part in the viewport ---------- */
/* ---------- shaded 3D viewer: convex groups + back-face culling, drag to rotate ---------- */
function sub(a,b){return[a[0]-b[0],a[1]-b[1],a[2]-b[2]]}
function cross(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}
function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}
function nrm(a){var l=Math.hypot(a[0],a[1],a[2])||1;return[a[0]/l,a[1]/l,a[2]/l]}
function edgesAll(n){var e=[];for(var i=0;i<n;i++)e.push([i,(i+1)%n]);return e}
function boxGeo(x0,y0,z0,x1,y1,z1){var v=[[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]];
  var F=[[0,3,2,1,[0,0,-1]],[4,5,6,7,[0,0,1]],[0,1,5,4,[0,-1,0]],[3,7,6,2,[0,1,0]],[0,4,7,3,[-1,0,0]],[1,2,6,5,[1,0,0]]];
  return F.map(function(f){return{p:[v[f[0]],v[f[1]],v[f[2]],v[f[3]]],n:f[4],fe:edgesAll(4)}})}
function diskGeo(cx,cz,r,y){var p=[];for(var i=0;i<28;i++){var a=i/28*Math.PI*2;p.push([cx+r*Math.cos(a),y,cz+r*Math.sin(a)])}return[{p:p,n:[0,1,0],fe:edgesAll(28),col:"#3B4048"}]}
function bracketGeo(){return[boxGeo(-60,-6,-35,60,6,35),diskGeo(10,-12,8,6.05).concat(diskGeo(35,12,8,6.05)),boxGeo(-60,6,-35,-48,66,35)]}
var SH={};
function shaftGeo(c){if(SH[c])return SH[c];var R=9.75,L=156,n=56,yc=20,g=[];
  var prof=c>0?[[-L/2,R-c],[-L/2+c,R],[L/2-c,R],[L/2,R-c]]:[[-L/2,R],[L/2,R]];
  function P(x,r,a){return[x,yc+r*Math.cos(a),r*Math.sin(a)]}
  for(var j=0;j<prof.length-1;j++){var base=g.length;for(var i=0;i<n;i++){var a0=i/n*Math.PI*2,a1=(i+1)/n*Math.PI*2,x0=prof[j][0],r0=prof[j][1],x1=prof[j+1][0],r1=prof[j+1][1];
    var p=[P(x0,r0,a0),P(x0,r0,a1),P(x1,r1,a1),P(x1,r1,a0)],nn=nrm(cross(sub(p[1],p[0]),sub(p[3],p[0]))),cc=[(p[0][0]+p[2][0])/2,(p[0][1]+p[2][1])/2,(p[0][2]+p[2][2])/2];
    if(dot(nn,[0,cc[1]-yc,cc[2]])<0)nn=[-nn[0],-nn[1],-nn[2]];
    g.push({p:p,n:nn,fe:[[0,1],[2,3]],nb:[base+(i+n-1)%n,base+(i+1)%n]})}}
  [-1,1].forEach(function(sg){var x=sg*L/2,r=prof[0][1],p=[];for(var i=0;i<n;i++)p.push(P(x,r,i/n*Math.PI*2));g.push({p:p,n:[sg,0,0],fe:edgesAll(n)})});
  return SH[c]=[g]}

function prismGeo(prof,z0,z1,col,holes){ // prof: [[x,y]..] in part coords; extruded along z
  var A=0;for(var i=0;i<prof.length;i++){var a=prof[i],b=prof[(i+1)%prof.length];A+=a[0]*b[1]-b[0]*a[1]}
  if(A<0)prof=prof.slice().reverse();var n=prof.length,g=[];
  for(var i=0;i<n;i++){var a=prof[i],b=prof[(i+1)%n],dx=b[0]-a[0],dy=b[1]-a[1];
    g.push({p:[[a[0],a[1],z0],[b[0],b[1],z0],[b[0],b[1],z1],[a[0],a[1],z1]],n:nrm([dy,-dx,0]),fe:[]})}
  g.push({p:prof.map(function(q){return[q[0],q[1],z1]}),n:[0,0,1],fe:edgesAll(n)});
  g.push({p:prof.map(function(q){return[q[0],q[1],z0]}),n:[0,0,-1],fe:edgesAll(n)});
  (holes||[]).forEach(function(h){[[z1+.06,1],[z0-.06,-1]].forEach(function(zz){g.push({p:h.map(function(q){return[q[0],q[1],zz[0]]}),n:[0,0,zz[1]],fe:edgesAll(h.length),col:"#2E3238"})})});
  return g}
function arcPts(cx,cy,r,a0,a1,k){var o=[];for(var i=0;i<=k;i++){var a=a0+(a1-a0)*i/k;o.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return o}
function circ(cx,cy,r){return arcPts(cx,cy,r,0,Math.PI*2*(23/24),23)}
function slot(cx,cy,w,h){var r=w/2;return arcPts(cx,cy+h/2-r,r,0,Math.PI,8).concat(arcPts(cx,cy-h/2+r,r,Math.PI,Math.PI*2,8))}
var SG={};
function sheetGeo(lvl){if(SG[lvl])return SG[lvl];
  var L=200,W=110,t=3,LB=150,ox=-100,oy=-42; // part coords -> viewer coords (y centred around 20)
  function T2(p){return[p[0]+ox,p[1]+oy+20]}
  var groups=[];
  var r=3,zi=W/2-t-r; // inner bend radius 3 mm
  var base=boxGeo(ox,oy+20-t,lvl>=2?-zi:-W/2+t,ox+LB,oy+20,lvl>=2?zi:W/2-t);base.first=true;groups.push(base);
  function bend(sg){var g=[],k=10,yc=oy+20+r,zc=sg*zi,x0=ox,x1=ox+LB;
    function P(x,rad,a){return[x,yc+rad*Math.sin(a),zc+sg*rad*Math.cos(a)]}
    for(var i=0;i<k;i++){var a0=-Math.PI/2+Math.PI/2*i/k,a1=-Math.PI/2+Math.PI/2*(i+1)/k,am=(a0+a1)/2,nn=[0,Math.sin(am),sg*Math.cos(am)];
      g.push({p:[P(x0,r+t,a0),P(x1,r+t,a0),P(x1,r+t,a1),P(x0,r+t,a1)],n:nn,fe:[]});
      g.push({p:[P(x0,r,a0),P(x1,r,a0),P(x1,r,a1),P(x0,r,a1)],n:[-nn[0],-nn[1],-nn[2]],fe:[]})}
    [[x0,-1],[x1,1]].forEach(function(e){var pts=[];for(var i=0;i<=k;i++)pts.push(P(e[0],r+t,-Math.PI/2+Math.PI/2*i/k));for(var i=k;i>=0;i--)pts.push(P(e[0],r,-Math.PI/2+Math.PI/2*i/k));g.push({p:pts,n:[e[1],0,0],fe:edgesAll(pts.length)})});
    return g}
  if(lvl>=2){
    groups.push(bend(1));groups.push(bend(-1));
    var prof=[[0,r]];
    if(lvl>=3){prof=prof.concat([[150,r]]).concat(arcPts(172,r,22,Math.PI,0,14).slice(1,-1)).concat([[194,r]])}else prof.push([194,r]);
    prof=prof.concat([[200,6+r],[200,92]]).concat(arcPts(190,92,10,0,Math.PI/2,5).slice(1)).concat([[10,26]]).concat(arcPts(10,16,10,Math.PI/2,Math.PI,5).slice(1)).concat([[0,0]]);
    prof.pop();prof=prof.map(T2);
    var holes=lvl>=3?[circ(20,13,5),circ(152,74,4),slot(152,50,7,16)].map(function(h){return h.map(T2)}):[];
    groups.push(prismGeo(prof,W/2-t,W/2,null,holes));
    groups.push(prismGeo(prof,-W/2,-W/2+t,null,holes));
  }
  return SG[lvl]=groups}
var LIGHT=nrm([-0.45,0.6,-0.66]),HALF=nrm([LIGHT[0],LIGHT[1],LIGHT[2]-1]);
function Viewer(cv,o){var self=this;this.cv=cv;this.ctx=cv.getContext("2d");this.groups=[];this.ang=o.ang;this.tilt=o.tilt;this.span=o.span;this.auto=o.auto;this.drag=false;
  this.resize=function(){var r=cv.getBoundingClientRect(),d=window.devicePixelRatio||1;cv.width=Math.max(1,r.width*d);cv.height=Math.max(1,r.height*d);self.ctx.setTransform(d,0,0,d,0,0);self.draw()};
  window.addEventListener("resize",this.resize);
  var lx=0,ly=0,host=o.host||cv;
  host.addEventListener("pointerdown",function(e){self.drag=true;lx=e.clientX;ly=e.clientY;host.style.cursor="grabbing";try{host.setPointerCapture(e.pointerId)}catch(_){}});
  host.addEventListener("pointermove",function(e){if(!self.drag)return;self.ang-=(e.clientX-lx)*0.01;self.tilt=Math.max(0.12,Math.min(1.25,self.tilt+(e.clientY-ly)*0.008));lx=e.clientX;ly=e.clientY;self.draw()});
  function up(){self.drag=false;host.style.cursor=""}
  host.addEventListener("pointerup",up);host.addEventListener("pointercancel",up);
}
Viewer.prototype.fit=function(g){var mn=[1e9,1e9,1e9],mx=[-1e9,-1e9,-1e9];g.forEach(function(gr){gr.forEach(function(f){f.p.forEach(function(v){for(var k=0;k<3;k++){mn[k]=Math.min(mn[k],v[k]);mx[k]=Math.max(mx[k],v[k])}})})});
  this.c=[(mn[0]+mx[0])/2,(mn[1]+mx[1])/2,(mn[2]+mx[2])/2];this.rad=Math.hypot(mx[0]-mn[0],mx[1]-mn[1],mx[2]-mn[2])/2};
Viewer.prototype.set=function(g){this.groups=g;this.draw()};
Viewer.prototype.draw=function(){var c=this.ctx,w=this.cv.clientWidth,h=this.cv.clientHeight,dp=window.devicePixelRatio||1;if(Math.abs(this.cv.width-Math.max(1,w*dp))>1||Math.abs(this.cv.height-Math.max(1,h*dp))>1){this.cv.width=Math.max(1,w*dp);this.cv.height=Math.max(1,h*dp);c.setTransform(dp,0,0,dp,0,0)}c.clearRect(0,0,w,h);if(!this.groups.length)return;
  var C=this.c||[0,20,0],s=this.rad?Math.min(w,h)*0.47/this.rad:Math.min(w*0.82,h*1.25)/this.span,cy=Math.cos(this.ang),sy=Math.sin(this.ang),cx=Math.cos(-this.tilt),sx=Math.sin(-this.tilt),D=1100;
  function T(v,yo){var X=v[0]-(yo?C[0]:0),Z=v[2]-(yo?C[2]:0),x=X*cy-Z*sy,z=X*sy+Z*cy,y=v[1]-(yo?C[1]:0);return[x,y*cx-z*sx,y*sx+z*cx]}
  function Pj(v){var p=D/(D+v[2]);return[w/2+v[0]*s*p,h/2-v[1]*s*p]}
  c.lineJoin="round";
  var gs=this.groups.slice(),key=function(g){var z=0;g.forEach(function(f){var v=T(f.p[0],20);z+=v[2]});return z/g.length};
  var first=gs.filter(function(g){return g.first}),rest=gs.filter(function(g){return!g.first}).map(function(g){return[key(g),g]}).sort(function(a,b){return b[0]-a[0]}).map(function(x){return x[1]});
  first.concat(rest).forEach(function(g){
    var info=g.map(function(f){var tp=f.p.map(function(v){return T(v,20)}),tn=T(f.n,0),cc=[0,0,0];tp.forEach(function(v){cc[0]+=v[0];cc[1]+=v[1];cc[2]+=v[2]});cc=cc.map(function(q){return q/tp.length});
      return{tp:tp,tn:tn,front:dot(tn,[cc[0],cc[1],cc[2]+D])<0}});
    g.forEach(function(f,k){var I=info[k];if(!I.front)return;var pp=I.tp.map(Pj);
      var dl=Math.max(0,dot(I.tn,LIGHT)),sp=Math.pow(Math.max(0,dot(I.tn,HALF)),24),v=Math.min(1,0.18+0.62*dl+0.3*sp),gv=Math.round(62+140*v);
      var col=f.col||("rgb("+gv+","+gv+","+(gv+3)+")");
      c.beginPath();pp.forEach(function(q,i){i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1])});c.closePath();c.fillStyle=col;c.fill();c.strokeStyle=col;c.lineWidth=.7;c.stroke();
      c.strokeStyle="#16191F";c.lineWidth=1.1;c.beginPath();
      f.fe.forEach(function(e){c.moveTo(pp[e[0]][0],pp[e[0]][1]);c.lineTo(pp[e[1]][0],pp[e[1]][1])});
      if(f.nb){if(!info[f.nb[0]].front){c.moveTo(pp[0][0],pp[0][1]);c.lineTo(pp[3][0],pp[3][1])}if(!info[f.nb[1]].front){c.moveTo(pp[1][0],pp[1][1]);c.lineTo(pp[2][0],pp[2][1])}}
      c.stroke()})})};
var hero=null;if(HAS_HERO){hero=new Viewer(document.getElementById("cad"),{ang:-0.5,tilt:0.55,span:370,host:document.querySelector(".viewport")});
hero.fit(sheetGeo(3));hero.resize();
(function loop(){if(!reduce){if(!hero.drag){hero.ang+=0.005}hero.draw()}requestAnimationFrame(loop)})();}

/* ---------- start ---------- */
var start="en",qs=/[?&]lang=(cs|en)\b/.exec(location.search);if(qs)start=qs[1];else if(location.hash==="#cs")start="cs";else{try{if(localStorage.getItem("axion-lang")==="cs")start="cs"}catch(e){}}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){apply(b.dataset.lang)})});
apply(start);
})();

/* real output: hotspot <-> answer linking + lightbox */
(function(){
  var shots=[].slice.call(document.querySelectorAll('.shot')),hots=[].slice.call(document.querySelectorAll('.hot'));
  function mark(ids){shots.forEach(function(s){s.classList.toggle('on',!!ids&&s.dataset.h.split(' ').some(function(x){return ids.indexOf(x)>-1}))});
    hots.forEach(function(h){h.classList.toggle('on',!!ids&&ids.indexOf(h.dataset.h)>-1)})}
  hots.forEach(function(h){h.addEventListener('mouseenter',function(){mark([h.dataset.h])});h.addEventListener('mouseleave',function(){mark(null)});
    h.addEventListener('click',function(){mark([h.dataset.h]);var t=shots.filter(function(s){return s.dataset.h.split(' ').indexOf(h.dataset.h)>-1})[0];if(t)t.scrollIntoView({behavior:'smooth',block:'center'})})});
  shots.forEach(function(s){s.addEventListener('mouseenter',function(){mark(s.dataset.h.split(' '))});s.addEventListener('mouseleave',function(){mark(null)});
    s.addEventListener('click',function(){var d=document.createElement('div');d.className='lb';var i=document.createElement('img');i.src=s.querySelector('img').src;i.alt=s.querySelector('img').alt;d.appendChild(i);
      d.addEventListener('click',function(){d.remove()});document.addEventListener('keydown',function k(e){if(e.key==='Escape'){d.remove();document.removeEventListener('keydown',k)}});document.body.appendChild(d)})});
})();

(function(){var it=[].slice.call(document.querySelectorAll('.ui li[data-u], .ui .hot'));
 function m(id){it.forEach(function(e){e.classList.toggle('on',id!==null&&e.dataset.u===id)})}
 it.forEach(function(e){e.addEventListener('mouseenter',function(){m(e.dataset.u)});e.addEventListener('mouseleave',function(){m(null)});e.addEventListener('focus',function(){m(e.dataset.u)});e.addEventListener('blur',function(){m(null)})})})();

(function(){var n=document.querySelector('.nav'),b=document.getElementById('burger');if(!n||!b)return;
 b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
 n.querySelectorAll('ul a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false')})});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});})();
