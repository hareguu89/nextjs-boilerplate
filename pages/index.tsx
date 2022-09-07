import { useState, useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import EventList from "@components/Events/EventList";
import Seo from "@components/Seo";
import Sidebar from "@components/Sidebar";
import { getFeaturedEvents } from "helpers/api-utils";
import type { IDummy } from "type";

interface IProps {
  featuredEvents: IDummy[];
}

const Home = (props: IProps) => {
  const [featuredEvent, setFeatureEvent] = useState<IDummy[]>(
    props.featuredEvents,
  );

  return (
    <>
      <Seo title={"Home"} />
      <Sidebar />
      <Link href="/login">path</Link>
      <EventList items={featuredEvent} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  if (!featuredEvents.length) {
    return { notFound: true };
  }

  return {
    props: { featuredEvents },
  };
};

export default Home;

/**
 * Link
 * - href: The path or URL to navigate to. This is the only required prop. It can also be an object.
 * - replace: Replace the current history state instead of adding a new url into the stack. Defaults to false.
 *
 */
