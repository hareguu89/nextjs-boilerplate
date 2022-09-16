import Image from "next/image";
import styled from "styled-components";
import AddressIcon from "../Icons/address-icon";
import DateIcon from "../Icons/date-icon";
import LogisticsItem from "./Logistics-item";

function EventLogistics(props: any) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <Logistics>
      <NImage>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={160}
          height={160}
          layout="responsive"
          priority
        />
      </NImage>
      <List>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </List>
    </Logistics>
  );
}

const NImage = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }
`;

const Logistics = styled.section`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #2b2b2b;
  padding: 2rem;
  max-width: 50rem;
  width: 80%;
  margin: -3rem auto;
  color: #d5eeeb;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  flex: 3;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  address {
    white-space: pre;
  }
`;

export default EventLogistics;
