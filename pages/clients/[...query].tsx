// interface ClientProjectProps {

import type { ParsedUrlQuery } from "querystring";
import type { NextPage } from "next";
import { useRouter } from "next/router";

// }

const ClientProject: NextPage = () => {
  const router = useRouter();
  const { query }: ParsedUrlQuery = router.query;
  console.log(query);

  return (
    <>
      <h1>catch all routing</h1>
      <div>
        {/* {query &&
          query.map((el, index) => <div key={index}>{el}</div>)} */}
      </div>
    </>
  );
};

export default ClientProject;
