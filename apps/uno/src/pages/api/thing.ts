import { pusher } from "@/lib/pusher";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await pusher.trigger("test", "test-event", {
    message: "hello world",
    sender: "testing-sender",
  });
  return res.status(200).json({ message: "hello world" });
}
