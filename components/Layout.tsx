import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Header />
    {children}
    <footer>
      <hr />
      <span>I am here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
