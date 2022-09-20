import Hero from "@components/Molecules/Hero";
import Seo from "@components/Seo";
import Sidebar from "@components/Sidebar";

const Home = () => {
  return (
    <>
      <Seo title="Blog" name="Frontend Blog" content="Home page" />
      <Sidebar />
      <Hero />
    </>
  );
};
export default Home;
