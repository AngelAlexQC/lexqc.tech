import 'styles/globals.css';
import 'styles/normalize.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ángel Quiroz 👨‍💻 | Full Stack Developer</title>
        <meta
          name='description'
          content='Personal Website of Ángel Quiroz (Software Developer)'
        />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
