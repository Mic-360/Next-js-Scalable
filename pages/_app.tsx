import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';

interface AppWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
