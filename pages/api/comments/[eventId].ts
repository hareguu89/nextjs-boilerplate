import type { NextApiRequest, NextApiResponse } from "next";

const handlers = (req: NextApiRequest, res: NextApiResponse) => {
  const { eventId } = req.query;
  console.log(eventId);
  if (req.method === "POST") {
    // add serverside validation
    const { email, name, text } = req.body;
    // if (
    //   !email.includes("@") ||
    //   !name ||
    //   name.trim() === "" ||
    //   !text ||
    //   text.trim() === ""
    // ) {
    //   res.status(422).json({ message: "Invalid Input." });

    //   return;
    // }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    res.status(201).json({ message: "Added Comment", comment: newComment });
  }
  if (req.method === "GET") {
    //
    const dummyList = [
      { id: "c1", name: "Max", comment: "Arabian Night" },
      { id: "c2", name: "Manuel", comment: "a second text" },
    ];

    res.status(200).json({ comments: dummyList });
  }
};

export default handlers;
