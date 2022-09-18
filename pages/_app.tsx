import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import { AuthProvider } from '../context/auth/AuthContext';

interface AppWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default MyApp;
