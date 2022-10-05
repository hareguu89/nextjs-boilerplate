// import type { ReactElement } from "react";
// import { Layout } from "@components/Layout/Layout";
import Hero from "@components/Molecules/Hero";
import Seo from "@components/Seo";

const Home = () => {
  return (
    <>
      <Seo title="Blog" name="Frontend Blog" content="Home page" />
      <Hero />
    </>
  );
};
export default Home;

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
