import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../assets/sass/index.scss';
import { ClipPaths } from 'components/common/ClipPaths';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <ClipPaths />
    </>
  );
};

export default MyApp;
