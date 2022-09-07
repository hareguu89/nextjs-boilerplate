import styled from "styled-components";
import Button from "../ui/Button";

function ResultsTitle(props: any) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <Title>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </Title>
  );
}

const Title = styled.section`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  text-align: center;
`;

export default ResultsTitle;
