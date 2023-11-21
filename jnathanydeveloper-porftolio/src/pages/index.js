// pages/index.js

import Hero from '../components/hero';
//import About from '@/components/About';
//import Apis from '@/components/Apis';
//import Contact from '@/components/Contact';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Jéssica Nathany</title>
        <meta name="description" content="Jéssica Nathany Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Podcast />
        <Apis />
      </div>
    </>
  );
};

export default Home;