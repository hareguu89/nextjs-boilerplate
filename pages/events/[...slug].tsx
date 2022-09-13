import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import EventList from "@components/Events/EventList";
import ResultsTitle from "@components/Events/ResulutTitle";
import Seo from "@components/Seo";
import Button from "@components/ui/Button";
import ErrorAlert from "@components/ui/ErrorAlert";
import type { IDummy } from "type";
import { getFilteredEvents } from "../../helpers/api-utils";

type TFilteredProps = {
  events?: IDummy[];
  hasError?: boolean;
  date: {
    year: number;
    month: number;
  };
};

function FilteredEventsPage({ events, date, hasError }: TFilteredProps) {
  // const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  const pageContent = (
    <Seo
      title="Filtered Events"
      name="description"
      content={`All Events ${date.month}/${date.year}`}
    />
  );

  if (hasError) {
    return (
      <>
        {pageContent}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageContent}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const resultOfDate = new Date(date.year, date.month - 1);

  return (
    <>
      {pageContent}
      <ResultsTitle date={resultOfDate} />
      <EventList items={filteredEvents} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { params } = context;

  const [filteredYear, filteredMonth] = params?.slug;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destinaton: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEventsPage;
