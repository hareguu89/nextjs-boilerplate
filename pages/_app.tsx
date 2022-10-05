import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Layout from "@components/Layout/Layout";
import Seo from "@components/Seo";
import GlobalStyles from "styles/GlobalStyles";
import defaultTheme from "styles/Theme";
import "react-toastify/dist/ReactToastify.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const queryClient = new QueryClient();

  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Seo
          title="Nextjs boiler plate"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <GlobalStyles />
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeProvider theme={defaultTheme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RecoilRoot>
        </QueryClientProvider>
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </SessionProvider>
    </>
  );
};

export default MyApp;
