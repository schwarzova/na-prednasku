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
            Malý princ - přednáška 3.1.2023
          </h1>
          <div className="mt-12 rounded-xl drop-shadow relative w-[350px] h-[415px] sm:w-[540px] md:w-[740px]">
            <iframe
              className="rounded-xl w-full h-full"
              src="https://www.youtube.com/embed/Nt1m60TZJ34"
              title="Malý princ - přednáška"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {showText && (
              <div className="absolute top-3/4 bg-nabifli-black-card rounded-b-lg drop-shadow-md text-slate-400 p-4 overflow-y-auto max-h-72">
                <div className="flex justify-between">
                  <h1 className="text-white font-bold">Malý princ</h1>
                  <button
                    onClick={() => setShowText(!showText)}
                    className="px-2 py-1 bg-gradient-to-r from-indigo-700 to-red-500 rounded-full text-white hover:from-indigo-700 hover:to-indigo-700 focus:outline outline-offset-2 outline-1 outline-purple-600"
                  >
                    ╳
                  </button>
                </div>
                <b>Kniha Malý princ</b>
                <p>
                  Autor jí psal v průběhu 2. světové války, bolestné období.
                  Kreslil podobiznu malého chlapce se světlými vlasy o kterém
                  napsal tuto knihu.
                </p>
                <p>
                  Letec ztroskotá se svým letadlem na Sahaře, tam se seznamuje s
                  Malým princem. Ten mu vypráví o životě na své planetě, je
                  zvídavý, odhaluje tajemství na které dospělí zapomínají. Vede
                  nás k poznání sebe sama a světa, který nás obklopuje.
                </p>
                <b>Baobab</b>
                <p>
                  Letec se dovídáme o princově planetě, o kterou bylo každý den
                  třeba pečovat. Na planetě byly semena baobabu (plevelu) byla
                  jím zamořena. Je třeba hned baobaby vytrhávat, aby nezamořily
                  celou planetu. Na jedné planetě bydlel lenoch zanedbal 3 keře…
                </p>
                <p className="mt-1">
                  Baobab = plevel, zlozvyk, špatná myšlenka, emoce, dokud nejsou
                  ještě úplně zakořeněné pak není tak snadné se jich zbavit !
                  Každý den je třeba dávat pozor o naší planetu (vnitřní svět,
                  duše). Je zapotřebí kázeň, řád, pravidla, disciplína.
                </p>
                <b>Růže</b>
                <p>
                  Když Malý princ opouštěl jeho planetu rozloučil se se svojí
                  milovanou růží. Navzdory všem jejím rozmarům ji velmi miloval.
                  Věnoval ji svoji pozornost a péči. Tím se vytvořilo pouto.
                </p>
                <p className="mt-1">
                  Malý princ vyjadřuje myšlenku, že je důležité dávat a nečekat,
                  že mi něco dostaneme. To dává našemu životu smysl a zároveň to
                  dodává štěstí.
                </p>
                <b>Cesta</b>
                <p>
                  Na své cestě poznává princ mnoho jiných planet a obyvatelů. A
                  tuto cestu pokaždé zakončí slovy “Dospělý jsou hrozně
                  zvláštní”
                </p>
                <p className="mt-1">
                  Seznamuje se s králem, který chce všem nařizovat a udávat
                  příkazy. Chce s prince udělat soudce, ministra spravedlnosti.
                  Malý princ nechce, říká, že není koho soudit. Nejtěžší je
                  soudit sám sebe. Ve chvíli kdy toho bude člověk schopen stane
                  se pravým mudrcem.
                </p>
                <p className="mt-1">
                  Setkává se s businessmenam, který počítá hvězdy. S Pijanem,
                  který pije proto aby zapomněl, že pije. Z každé této planety
                  si princ odnáší nějaký poznatek.
                </p>
                <p className="mt-1">
                  Malý princ je malým filosofem v nás, který se na nás dívá z
                  vnitra a někdy kroutí nad tím jak se chováme. Někdy chceme aby
                  nás ostatní podporovali, aby nám pleskali. Necítíme se bez
                  toho spokojení. Někdy se chceme schovat před problémem.
                </p>
                <b>Na Zemi</b>
                <p>
                  Na planetě Zemi se setkává s hadem v Africe. Na poušti nikdo
                  není. Prochází se dál a setkává se s liškou, která před ním
                  odhaluje velká tajemství. Baví se o tom jak vzniká pouto a
                  malý princ si ochočí lišku. Při rozloučení bude liška plakat.
                  Uvědomuje si pouto, které chová ke své růži. Liška mu řekne
                  tajemství “Co je důležité nevidíme očima, ale srdcem”.
                </p>
                <b>Poselství</b>
                <p>
                  Nikdy nezůstávat na povrchu věcí. Nemáme se bát jít do jejich
                  nitra a odhalovat jejich tajemství.
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
