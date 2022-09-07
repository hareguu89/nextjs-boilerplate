import type { NextPage } from "next";
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";
// interface PortfolioProjectPageProps {}

const PortfolioProjectPage: NextPage = () => {
  // To access dynamic segment value
  const router: NextRouter = useRouter();

  console.log("router.pathname :", router.pathname);
  console.log("router.query:", router.query);
  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.id

  return (
    <>
      <div>project page</div>
      <div>{router.query?.id}</div>
      <div>{router.pathname}</div>
    </>
  );
};

export default PortfolioProjectPage;
