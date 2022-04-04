import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { GlobalStyles } from '@styles/globalStyles';

function MyApp({ Component, pageProps, }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
