import '../styles/globals.css';
import { PlaylistContextProvider } from '../Contexts/PlaylistContext';
import Circle from '../Components/Circle';
import Head from 'next/head';

//TODO:
// animated countdown circle
// restart the list when running out of songs

function MyApp({ Component, pageProps }) {
  return (
    <PlaylistContextProvider>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </PlaylistContextProvider>
  );
}

export default MyApp;
