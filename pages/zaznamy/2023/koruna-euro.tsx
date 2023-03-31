import RecordPage from '../../../components/RecordPage';

function Page() {
  return (
    <RecordPage
      h1Title="Koruna nebo EURO? - PŘEDNÁŠKA 13.2.2023"
      bg="kancl"
      ytUrl="https://www.youtube.com/embed/vN7oygGA0A8"
    >
      <h2 className="text-white font-bold">Koruna nebo EURO?</h2>
      <b>🔋 Co přinesly krize?</b>
      <ul>
        <li>
          - energetická krize (naštěstí nížší dopad než se predikovalo), ceny
          jsou na úrovni před válkou, pro tuto sezónu je EU zachráněna
        </li>
        <li>- doprava - prudký nárust cen dopravy, dlouhé čekací lhůty</li>
        <li>- problémy na straně nabídky</li>
        <li>- intervence vlád do ekonomiky (popory během COVIDu)</li>
        <li>- politické nástroje, sankce</li>
        <li>- INFLACE (nejvyšší za několik desítek let)</li>
        <li>- obavy z budoucnosti</li>
      </ul>
      <br />
      <b>📈 INFLACE</b>
      <p>
        Opakovaný růst většiny cen v dané ekonomice. V ČR jí měří český
        statistický úřad
      </p>
      <p>Od roku 2000 se pohybovala okolo 2%. V ČR (prosinec 2022) 15,8%</p>
      <br />
      <b>📄 Maastrichtská kritéria</b>
      <p>Podmínky (6) pro země, které chtějí vstoupit do Eurozóny</p>
      <ul>
        <li>- Cenová stabilita (inflace max 1.5% *lepšího průměru EU)</li>
        <li>- Veřejné finance (udržitelný stav)</li>
        <li>-- Veřejný deficit (schodek max 3% HDP)</li>
        <li>-- Veřejný dluh (dluh max 60% HDP)</li>
        <li>- Stabilita kurzu měny</li>
        <li>- Dlouhodobé úrokové sazby (+2% *lepšího průměru EU)</li>
      </ul>
      <p>*lepšího = berou se 3 nejlepší země v EU</p>
      <p>
        Kritéria vychází z toho aby byla nízká a udržitelná inflace, stabilní
        měnový kurz.
      </p>
      <p>
        V ČR jsme dlouho kritéria plnili, teď je neplníme. Máme vyšší inflaci,
        od 2020 neplníme ani deficit státního rozpočtu. Dluh je ještě ok ale
        rychle se blížíme limitu. Úrokovou míru plníme, protože se to bere za
        delší dobu, časem je otázka jak se naše míry budou vyvíjet. V této době
        tedy debata o Euru není prioritou.
      </p>
      <br />
      <b>🟢 PRO přijetí EURA</b>
      <ul>
        <li>- po dolaru druhá nejdůležitější měna</li>
        <li>- usnadnění podnikání, objem investic, nová pracovní místa</li>
        <li>- zjednodušení výkaznictví a reportingu</li>
        <li>- rychleji se můžeme přibližovat úrovni vyspělých zemí</li>
        <li>
          - porovnání cen a přístup do zahraničních obchodů zlepší nabídku a
          konkurenci
        </li>
        <li>- odpadnou poplatky spojené s převodem měny</li>
        <li>
          - odstraní se nestabilita a nejistota směnných kurzů, která brání v
          mezinárodním obchodu
        </li>
        <li>
          - pojistka pro nás, abychom v rámci EU neskončili na vedlejší koleji
        </li>
        <li>- úspěšný globální projekt</li>
      </ul>
      <br />
      <b>🔴 PROTI přijetí EURA</b>
      <ul>
        <li>- ztráta národní měny, symbolu a národní suverenity</li>
        <li>
          - ztráta nezávislé měnové politiky (měnový kurz, ČNB ztratí monetární
          nástroje, politika ECB není stejně výhodná pro všechny země, ECB bude
          častěji jednat ve prospěch větších zemí)
        </li>
        <li>
          - riziko vnímané inflace (spotřebitelé vnímají fenomén inflace po
          přijetí eura, média, psychologické faktory)
        </li>
        <li>- finanční náklady vstupu do EURO-zóny (jednorázově)</li>
        <li>- dopad na ekonomickou konvergenci (dohánění EU Českem)</li>
      </ul>
      <br />
      <b>🕑 načasování přijetí EURA</b>
      <ul>
        <li>- nejdříve plnit Maastrichtská kritéria</li>
        <li>- musí převládnout celospolečenský konsensus PRO přijetí eura</li>
      </ul>
    </RecordPage>
  );
}

export default Page;
