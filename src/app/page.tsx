// pages/_app.tsx

import { AppProps } from 'next/app';
import Navbar from '../../components/Navbar';
import './globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <Component {...pageProps} /> */}
    </>
  );
}

export default MyApp;
