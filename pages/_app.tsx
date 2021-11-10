import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/global.css";

function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement<AppProps> {
  return <Component {...pageProps} />;
}

export default MyApp;
