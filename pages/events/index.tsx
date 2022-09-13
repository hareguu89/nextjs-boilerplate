import { useRouter } from "next/router";
import EventList from "@components/Events/EventList";
import EventsSearch from "@components/Events/EventSearch";
import Seo from "@components/Seo";
import type { IDummy } from "type";
import { getAllEvents } from "../../helpers/api-utils";

type TAllList = {
  events: IDummy[];
};

function AllEventsPage(props: TAllList) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(
    year: string | undefined,
    month: string | undefined,
  ) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <Seo
        title="Events"
        name="Events"
        content="lots of events you are looking for"
      />
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
