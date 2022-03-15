import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {CacheProvider} from '@emotion/react';
import {Provider} from 'react-redux';

import createEmotionCache from 'utils/createEmotionCache';
import {store} from 'redux/store';

import Providers from 'Providers';

import 'styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
