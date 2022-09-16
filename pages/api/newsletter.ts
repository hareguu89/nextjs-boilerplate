import type { NextApiRequest, NextApiResponse } from "next";
import type { MongoClient } from "mongodb";
import { connectDatabase, insertDocument } from "../../helpers/api-utils";

export default async function handlers(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const userEmail: string = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalide Email address." });
    } else {
      let client;
      try {
        client = await connectDatabase("newsletter");
      } catch (e) {
        res.status(500).json({ message: "Connectng to the database failed" });

        return;
      }

      try {
        const response = await insertDocument({
          client,
          collection: "newsletter",
          data: { email: userEmail },
        });

        if (response?.acknowledged) {
          client?.close();
          res.status(201).json({ message: "Signed Up" });
        }
      } catch (e) {
        res.status(500).json({ message: "Connectng to the database failed" });
      }
    }
  }
}
