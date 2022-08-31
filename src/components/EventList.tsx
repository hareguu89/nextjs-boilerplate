import styled from "styled-components";
import type { IDummy } from "type";
import EventItem from "./EventItem";

interface Iunknown {
  items: IDummy[];
}

const EventList = (props: Iunknown) => {
  const { items } = props;

  return (
    <>
      <Item>
        {items.map(event => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
            description={event.description}
          />
        ))}
      </Item>
    </>
  );
};

export default EventList;

const Item = styled.ul`
  width: 50%;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #1a202c;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
    object-fit: cover;
    height: 10rem;
  }
`;
