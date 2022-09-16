import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components/Layout";
import Seo from "@components/Seo";
import GlobalStyles from "styles/GlobalStyles";
import defaultTheme from "styles/Theme";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <>
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
    </>
  );
};

export default MyApp;
