import { useEffect } from "react";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components/Layout";
import Seo from "@components/Seo";
import GlobalStyles from "styles/GlobalStyles";
import defaultTheme from "styles/Theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      import("@mocks/index");
    }
  }, []);

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
    </>
  );
};

export default MyApp;
