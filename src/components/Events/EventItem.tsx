import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import type { IDummy } from "type";

const EventItem = (props: IDummy) => {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formateedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <>
      <Li>
        <Image src={`/${image}`} alt={id} width={200} height={100} priority />
        <Attribute>
          <div>
            <h2>{title}</h2>
          </div>
          <DateAddress>
            <time>{readableDate}</time>
          </DateAddress>
          <DateAddress>
            <address>{formateedAddress}</address>
          </DateAddress>

          <Button href={exploreLink}>Explore More</Button>
        </Attribute>
      </Li>
    </>
  );
};

export default EventItem;

const Attribute = styled.div`
  padding: 10px;
  font-size: 20px;
`;
const DateAddress = styled.div`
  width: 100%;
  padding: 0 1rem;
  text-align: center;

  h2 {
    margin: 0.5rem 0;
  }
  address {
    margin: 0.5rem 0;
    color: #666666;
    white-space: pre;
  }
  time {
    color: #666666;
    font-weight: bold;
  }
`;
const Button = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font: inherit;
  background-color: #03be9f;
  border: 1px solid #03be9f;
  border-radius: 6px;
  color: #dafff7;
  padding: 0.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  .btn:hover,
  .btn:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }
`;

const Li = styled.li`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  img {
    border-radius: 6px;
    width: 100%;
    height: auto;
  }
`;
