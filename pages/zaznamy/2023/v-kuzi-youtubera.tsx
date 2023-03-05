import { useState } from 'react';
import Footer from '../../../components/Footer';
import Head from '../../../components/Head';
import Menu from '../../../components/Menu';

function Page() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <Head />
      <Menu showHome />
      <main className="hory min-h-[calc(100%_-_64px_-_64px)] flex flex-col items-center">
        <div className="bg-black/60 flex-1 px-2 flex flex-col items-center sm:px-6 md:px-8">
          <h1 className="mt-12 text-white uppercase text-2xl font-bold sm:text-3xl">
            Karel &quot;Kovy&quot; Kovář: V kůži youtubera - přednáška 20.1.2023
          </h1>
          <div className="mt-12 rounded-xl drop-shadow relative w-[350px] h-[415px] sm:w-[540px] md:w-[740px]">
            <iframe
              className="rounded-xl w-full h-full"
              src="https://www.youtube.com/embed/BFj8z-ShIIQ"
              title="Kovy - v kůži youtubera - přednáška"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {showText && (
              <div className="absolute top-3/4 bg-nabifli-black-card rounded-b-lg drop-shadow-md text-slate-400 p-4 overflow-y-auto max-h-72">
                <div className="flex justify-between">
                  <h1 className="text-white font-bold">
                    Kovy - v kůži youtubera
                  </h1>
                  <button
                    onClick={() => setShowText(!showText)}
                    className="px-2 py-1 bg-gradient-to-r from-indigo-700 to-red-500 rounded-full text-white hover:from-indigo-700 hover:to-indigo-700 focus:outline outline-offset-2 outline-1 outline-purple-600"
                  >
                    ╳
                  </button>
                </div>
                <b>V čem spočívá síla influencerů?</b>
                <p>
                  - každodenní kontakt vytváří &quot;iluzi&quot; přátelství
                  <br /> - parasociální interakce = vysvětluje vztah, jakým
                  čloenové publika vnímají jejich jednostranný vztah s postavami
                  vystupujících v masových mediích
                </p>
                <b>Influencer vs celebrita</b>
                <p>
                  - nyní v podstatě stejné
                  <br />- celebritám pomáhají sociální sítě k přímému kontaktu a
                  být fanouškům blíž
                </p>
                <b>Jak si influencer může vydělat?</b>
                <p>
                  - reklama na platformě (youtube)
                  <br />- spolupráce se značkami
                  <br />- merch (prodávání vlastních triček, mikin, ...)
                  <br />- vlastní kniha
                  <br />- patreon (předplatné placeného obsahu)
                </p>
                <p className="mt-1">
                  U reklam je třeba si vybírat značky, které spadají do
                  influencerovo života, cílí na jeho publikum atd. Tvůrce by měl
                  zůstat stále autentický.
                </p>
                <b>Dnešní trendy</b>
                <p>
                  - Facebook je zastaralý (hlavně pro starší ročníky)
                  <br />- Youtube (pro vzdělávání a relax, tutoriály)
                  <br />- Instagram (velkmé nožství uživatelů)
                  <br />- TikTok (nyní nejvíce rostoucí síť, hlavně mladší
                  generace, neformální komunikace, rychlý krátký obsah)
                  <br />- BeReal (autenticita)
                  <br />- Twitter (psané slovo)
                  <br />- Twitch (live streamy a hry)
                  <p className="mt-1">
                    Průměrný Čech tráví na soc. sítích 2,5hod/denně
                  </p>
                </p>
                <p></p>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowText(!showText)}
            className="mt-8 p-2 bg-gradient-to-r from-indigo-700 to-red-500 rounded-lg w-40 text-white hover:from-indigo-700 hover:to-indigo-700 focus:outline outline-offset-2 outline-1 outline-purple-600"
          >
            Text
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
