import type { NextPage } from "next";
import Link from "next/link";
import EventList from "@components/EventList";
import Seo from "@components/Seo";
import Sidebar from "@components/Sidebar";
import { getFeaturedEvents } from "dummy-data";

const Home: NextPage = () => {
  const featuredEvent = getFeaturedEvents();

  return (
    <>
      <Seo title={"Home"} />
      <Sidebar />
      <Link href="/login">path</Link>
      <EventList items={featuredEvent} />
    </>
  );
};

export default Home;

/**
 * Link
 * - href: The path or URL to navigate to. This is the only required prop. It can also be an object.
 * - replace: Replace the current history state instead of adding a new url into the stack. Defaults to false.
 *
 */
