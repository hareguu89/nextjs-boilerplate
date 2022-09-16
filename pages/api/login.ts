// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// server-side code
// Do Not Fetch an API Route from getStaticProps or getStaticPaths

import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;
    const { password } = req.body;

    const userInfo = {
      id: new Date().toISOString(),
      email,
      password,
    };
    // store that in a database or in a file

    const filePath = path.join(process.cwd(), "data", "user.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData.toString());
    data.push(userInfo);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", info: userInfo });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
