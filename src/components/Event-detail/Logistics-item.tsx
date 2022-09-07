import styled from "styled-components";

function LogisticsItem(props: any) {
  const { icon: Icon } = props;

  return (
    <Item>
      <IconSpan>
        <Icon />
      </IconSpan>
      <IconSpan>{props.children}</IconSpan>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #aefff8;

  span {
    display: block;
  }
`;

const IconSpan = styled.span`
  margin-right: 1rem;
  color: #18e0d0;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export default LogisticsItem;
