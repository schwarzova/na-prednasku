import { useState } from 'react';
import Footer from '../../../components/Footer';
import Head from '../../../components/Head';
import Menu from '../../../components/Menu';

function Page() {
  return (
    <>
      <Head />
      <Menu />
      <main className="knihovna min-h-[calc(100%_-_64px_-_64px)] flex flex-col items-center">
        <div className="bg-black/60 flex-1 px-2 flex flex-col items-center sm:px-6 md:px-8 overflow-y-auto">
          <h1 className="mt-8 text-white uppercase text-2xl font-bold sm:text-3xl">
            Karel &quot;Kovy&quot; Kovář: V kůži youtubera - přednáška 20.1.2023
          </h1>
          <div className="mt-6 rounded-xl drop-shadow relative w-[350px] h-[415px] sm:w-[540px] md:w-[740px]">
            <iframe
              className="rounded-xl w-full h-full"
              src="https://www.youtube.com/embed/BFj8z-ShIIQ"
              title="Kovy - v kůži youtubera - přednáška"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="my-3 bg-nabifli-black-card rounded-lg drop-shadow-md text-slate-400 p-4 mb-3">
              <h1 className="text-white font-bold">Kovy - v kůži youtubera</h1>
              <b>💪 V čem spočívá síla influencerů?</b>
              <p>
                - každodenní kontakt vytváří &quot;iluzi&quot; přátelství
                <br /> - parasociální interakce = vysvětluje vztah, jakým
                čloenové publika vnímají jejich jednostranný vztah s postavami
                vystupujících v masových mediích
              </p>
              <br />
              <b>🤩 Influencer vs celebrita</b>
              <p>
                - nyní v podstatě stejné
                <br />- celebritám pomáhají sociální sítě k přímému kontaktu a
                být fanouškům blíž
              </p>
              <br />
              <b>💰 Jak si influencer může vydělat?</b>
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
              <br />
              <b>📈 Dnešní trendy</b>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
