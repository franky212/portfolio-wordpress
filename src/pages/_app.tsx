import { wrapper } from "@/lib/redux";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Loading from "@/components/common/Loading";
config.autoAddCss = false;

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
      <Loading />
    </Provider>
  );
}
