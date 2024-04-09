import { wrapper } from '@/lib/redux';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Loading from '@/components/common/Loading';
import { ReactElement } from 'react';
config.autoAddCss = false;

export default function App({ Component, ...rest }: AppProps): ReactElement {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
      <Loading />
      <Analytics />
    </Provider>
  );
}
