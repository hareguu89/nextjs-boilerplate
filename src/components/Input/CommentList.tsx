import styled from "styled-components";

type Comment = { _id: string; name: string; text: string };
interface IComments {
  comments: Comment[];
}

function CommentList({ comments }: IComments) {
  return (
    <Comments>
      {/* Render list of comments - fetched from API */}
      {comments.map(el => (
        <li key={el._id}>
          <p>{el.text}</p>
          <div>
            By <address>{el.name}</address>
          </div>
        </li>
      ))}
    </Comments>
  );
}

const Comments = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    text-align: left;
    padding: 0.5rem 0;
    border-bottom: 2px solid #ccc;
  }
  p {
    margin: 0;
  }

  li div {
    text-align: right;
    font-style: italic;
  }

  address {
    display: inline;
  }
`;

export default CommentList;
