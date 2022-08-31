import type { NextPage } from "next";
import { useRouter } from "next/router";

const FilteredEventPage: NextPage = () => {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <h2>Filtered Events</h2>
    </>
  );
};

export default FilteredEventPage;
