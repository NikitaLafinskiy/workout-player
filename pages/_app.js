import '../styles/globals.css';
import { PlaylistContextProvider } from '../Contexts/PlaylistContext';
import Circle from '../Components/Circle';

//TODO:
// animated countdown circle
// restart the list when running out of songs

function MyApp({ Component, pageProps }) {
  return (
    <PlaylistContextProvider>
      <Component {...pageProps} />
    </PlaylistContextProvider>
  );
}

export default MyApp;
