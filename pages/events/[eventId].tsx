import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getEventById } from "dummy-data";

const EventPage: NextPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <>
      <h1>Event Detail</h1>
    </>
  );
};

export default EventPage;
