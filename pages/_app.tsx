import Head from "next/head";
import "../styles/globals.css"
import ThemeProviderContext from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UserProvider } from "@/context/user-context";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <Head>
        <title>Finer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProviderContext>
        <div id="#root">
          <Header />
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
          <Footer />
        </div>
      </ThemeProviderContext>
    </>
  );
}
