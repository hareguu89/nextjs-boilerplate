import type { NextApiRequest, NextApiResponse } from "next";
import type { ObjectId } from "mongodb";
import {
  connectDatabase,
  insertDocument,
  getAllDocument,
} from "../../../helpers/api-utils";

export interface IComments {
  _id?: ObjectId;
  email: string;
  name: string;
  text: string;
  eventId: string | string[];
}

const handlers = async (req: NextApiRequest, res: NextApiResponse) => {
  const { eventId } = req.query;
  let client;
  try {
    client = await connectDatabase("events");
  } catch (e) {
    res.status(500).json({ message: "Connectng to the database failed" });

    return;
  }

  const db = client.db();
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    const newComment: IComments = {
      email,
      name,
      text,
      eventId,
    };

    try {
      const response = await insertDocument({
        client,
        collection: "comments",
        data: newComment,
      });

      newComment._id = response?.insertedId;

      res.status(201).json({ message: "Added Comment", comment: newComment });
    } catch {
      res.status(500).json({ message: "Inserting Comment Failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocument({
        db,
        collection: "comments",
        sort: { _id: -1 },
      });

      res.status(200).json({ comments: documents });
    } catch {
      res.status(500).json({ message: "Getting Comment Failed!" });
    }
  }
};

export default handlers;
