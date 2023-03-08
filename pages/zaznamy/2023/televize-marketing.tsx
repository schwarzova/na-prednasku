import { useState } from 'react';
import Footer from '../../../components/Footer';
import Head from '../../../components/Head';
import Menu from '../../../components/Menu';

function Page() {
  return (
    <>
      <Head />
      <Menu />
      <main className="mesto min-h-[calc(100%_-_64px_-_64px)] flex flex-col items-center">
        <div className="bg-black/60 flex-1 px-2 flex flex-col items-center sm:px-6 md:px-8 overflow-y-auto">
          <h1 className="mt-8 text-white uppercase text-2xl font-bold sm:text-3xl">
            Televize a její role v marketingu - webinář 5.1.2023
          </h1>
          <div className="mt-6 rounded-xl drop-shadow relative w-[350px] h-[415px] sm:w-[540px] md:w-[740px]">
            <iframe
              className="rounded-xl w-full h-full"
              src="https://www.youtube.com/embed/UW7AuCwA_U4"
              title="Televize a její role v marketingu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="my-3 bg-nabifli-black-card rounded-lg drop-shadow-md text-slate-400 p-4 mb-3">
              <h2 className="text-white font-bold">
                Televize a její role v marketingu
              </h2>
              <b>⛓️ Marketingové kanály</b>
              <p>
                <u>Mass</u> tv, pos, rádio, eventy, print, PR, sociální sítě,
                ooh (out of home, př. bilboardy)
                <br />
                <u>Direct</u> aplikace, online, email
              </p>
              <br />
              <b>📺 Televize</b>
              <p>
                Podle tradičního rozdělení je to Mass medium. Můžu koukat na
                různé metriky
                <br /> GRP (každý point znamená, že jste zasáhli 1 procento
                populace). Jednotka kterou kupujeme v TV. Každý den utratíme
                např. 80 GRPů a můžeme měřit co nám to přineslo.
                <br /> TRP (zásah dané cílené skupiny př. muži)
                <br /> SHARE (kolik lidí se zrovna dívalo na Váš pořad)
                <br /> AFINITA (efektivita zásahu vůči cílové skupině)
                <br /> RATING (kolik lidí se dívalo na obrazovku)
              </p>
              <p className="mt-1">
                TV by neměla být jediným marketingovým nástrojem
              </p>
              <br />
              <b>🚪 Zdroje návštěv na webu (důležité pro TV)</b>
              <p>
                organic - vyloženě vyhledávají Vaší značku
                <br />
                direct - napíšou web do lišty vyhledávače
                <br />
                brand search - napíšou do vyhledávače rovnou název vašeho brandu
              </p>
              <p className="mt-1">
                Po nějaké době se reklama už nechytala. Bylo lepší nasadit nový
                spot. V metrice měrili kolik uživatelů jim přinesl jeden GRP.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
