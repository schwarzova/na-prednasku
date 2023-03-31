import Footer from './Footer';
import Head from './Head';
import Menu from './Menu';

type BgPage = 'hory' | 'mesto' | 'knihovna' | 'kancl';

type Props = {
  h1Title: string;
  ytUrl: string;
  bg: BgPage;
  children: React.ReactNode;
};

function RecordPage(props: Props) {
  return (
    <>
      <Head />
      <Menu />
      <main
        className={`${props.bg} min-h-[calc(100%_-_64px_-_64px)] flex flex-col items-center`}
      >
        <div className="bg-black/60 flex-1 px-2 flex flex-col items-center sm:px-6 md:px-8 overflow-y-auto">
          <h1 className="mt-8 text-white uppercase text-2xl font-bold sm:text-3xl">
            {props.h1Title}
          </h1>
          <div className="mt-6 rounded-xl drop-shadow relative w-[350px] h-[415px] sm:w-[540px] md:w-[740px]">
            <iframe
              className="rounded-xl w-full h-full"
              src={props.ytUrl}
              title={props.h1Title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="my-3 bg-nabifli-black-card rounded-lg drop-shadow-md text-slate-400 p-4">
              {props.children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RecordPage;
