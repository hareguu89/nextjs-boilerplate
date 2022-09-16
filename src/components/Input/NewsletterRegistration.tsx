import { useRef } from "react";
import type { NextPage } from "next";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";

interface IPostData {
  message: string;
  data?: any;
}

const NewsletterRegistration: NextPage = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const registrationHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(emailRef.current?.value);

    try {
      const { data }: IPostData = await axios.post("/api/newsletter", {
        email: emailRef.current?.value,
      });
      console.log(data);

      toast.success(data.message);
    } catch (e) {
      console.log(e);
    }

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  };

  return (
    <>
      <Newsletter>
        <h2>Sign up to stay updated!</h2>
        <form onSubmit={registrationHandler}>
          <Control>
            <input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="Your email"
              aria-label="Your email"
            />
            <button>Register</button>
          </Control>
        </form>
      </Newsletter>
    </>
  );
};

const Newsletter = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 20rem;
  h2 {
    text-align: center;
  }
  button {
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font: inherit;
    cursor: pointer;
  }
  .newsletter button:hover,
  .newsletter button:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }
`;

const Control = styled.div`
  display: flex;
  input {
    font: inherit;
    padding: 0.25rem;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #ccc;
  }
`;

export default NewsletterRegistration;
