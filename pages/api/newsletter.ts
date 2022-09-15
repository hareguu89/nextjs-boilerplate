import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default function handlers(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const userEmail: string = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalide Email address." });
    } else {
      MongoClient.connect(
        "mongodb+srv://hareguu89:<nextjs>@cluster0.jpi0lwq.mongodb.net/?retryWrites=true&w=majority",
      );
      res.status(201).json({ message: "Signed Up" });
    }
  }
}
