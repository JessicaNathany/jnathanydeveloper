// pages/_app.tsx

import '../styles/globals.css';
import Layout from '../components/layout';
import { AppProps } from 'next/app'; 

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
