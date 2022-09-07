import type { GetStaticPaths, GetStaticProps } from "next";
import EventContent from "@components/Event-detail/Event-content";
import EventLogistics from "@components/Event-detail/Event-logistics";
import EventSummary from "@components/Event-detail/Event-summary";
import { getEventById, getAllEvents } from "helpers/api-utils";
import type { IDummy } from "type";

interface IProps {
  selectedEvent: IDummy;
}

const EventPage = ({ selectedEvent }: IProps) => {
  if (!selectedEvent) {
    return <p>No event found</p>;
  }

  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const eventId = context.params?.eventId;

  const selectedEvent: IDummy | undefined = await getEventById(eventId);

  if (!selectedEvent) {
    return {
      notFound: true,
    };
  }

  return {
    props: { selectedEvent },
    revalidate: 30, // Optimization idea
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map(event => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: false,
  };
};

export default EventPage;

/**
 * 상세페이지에서 SEO 가 가능하게 만드는것이 중요한 이유는,
 * pre-fetch를 통해 pre-rendering 되어야 crawlable 하기 때문이다.
 *
 * 사전렌더링 진행
 */
