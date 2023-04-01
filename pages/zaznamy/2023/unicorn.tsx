import RecordPage from '../../../components/RecordPage';

function Page() {
  return (
    <RecordPage
      h1Title="Jak vytvořit unicorna - PŘEDNÁŠKA 21.2.2023"
      bg="knihovna"
      ytUrl="https://www.youtube.com/embed/4I2k5i9YbTA"
    >
      <h2 className="text-white font-bold">Jak vytvořit unicorna</h2>
      <p>Přednáška je vedená jako otázky a odpovědi</p>
      <br />
      <b>💡 Nápad</b>
      <p>Nápad je pouze 5%</p>
      <br />
      <b>Product - Market - Team</b>
      <p>
        Pokud máte hloupý tým a blbý produkt, ale máte extrémně chtivý market
        tak pořád budete mít nějaký úspěch
      </p>
      <p>
        Důležité je získat zpětnou vazbu od trhu. Nekonečně rostoucí produkt.
        Nejlepší startup je ten který už má nějaké zákazníky. Mít hotové MVP
        (minimal value product)
      </p>
      <p>
        Na začátek není tak podstatné se soustředit na techstack. Může se časem
        přepsat nebo zelpšit.
      </p>
      <p>
        Business plan = jaké jsou vaše zkušenosti, jaká je vize, nesnažte se tam
        odhadnout budoucnost
      </p>
      <p>
        Motivace a vůle - dobré dělat v mladém věku, je to psychicky i fyzicky
        náročné, lidé se rozvádějí, deprese po neúspěchu, přepnout se do
        egoisty, který si nepřipouští neúspěch, naučit se prodávat, pochopit
        člověka na druhé straně
      </p>
      <br />
    </RecordPage>
  );
}

export default Page;
