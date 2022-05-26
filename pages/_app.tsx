import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GCScript } from 'next-goatcounter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GCScript
        siteUrl={'https://naprednasku.goatcounter.com/count'}
        scriptSrc=""
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
