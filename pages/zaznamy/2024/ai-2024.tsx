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
            Novinky v AI a co nás čeká v roce 2024
            <br /> Informatické večery 26.2.2024
          </h1>
          <div className="mt-6 rounded-xl drop-shadow relative w-[350px] h-[415px] sm:w-[540px] md:w-[740px]">
            <iframe
              className="rounded-xl w-full h-full"
              src="https://www.youtube.com/embed/KwCHoh1x8qE"
              title="Novinky v AI a co nás čeká v roce 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;
