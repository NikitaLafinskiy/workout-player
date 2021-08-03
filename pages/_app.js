import '../styles/globals.css';
import { PlaylistContextProvider } from '../Contexts/PlaylistContext';

function MyApp({ Component, pageProps }) {
  return (
    <PlaylistContextProvider>
      <Component {...pageProps} />
    </PlaylistContextProvider>
  );
}

export default MyApp;
