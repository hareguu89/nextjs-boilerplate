import { useEffect, useState } from "react";
import type { AxiosError } from "axios";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import CommentList from "./CommentList";
import NewComment from "./NewComment";

export interface IComments {
  id: string;
  name: string;
  comment: string;
}

interface IProps {
  eventId: string | undefined;
}

interface ICommentData {
  [key: string]: string;
}

function Comments(props: IProps) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<IComments[] | []>([]);

  useEffect(() => {
    if (showComments) {
      getComment();
    }
  }, [showComments]);

  const getComment = async () => {
    const { data } = await axios.get(`/api/comments/${eventId}`);
    setComments(data.comments);
  };

  const toggleCommentsHandler = () => {
    setShowComments(prevStatus => !prevStatus);
  };

  const addCommentHandler = async (commentData: ICommentData) => {
    // send data to API'
    try {
      const { data } = await axios.post(
        `/api/comments/${eventId}`,
        commentData,
      );
      if (data) {
        toast.success(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Section>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </Section>
  );
}

const Section = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
  text-align: center;

  button {
    font: inherit;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #03be9f;
    border: 1px solid #03be9f;
    cursor: pointer;
  }

  button:hover,
  button:active {
    background-color: #dcfff9;
  }
`;
export default Comments;
