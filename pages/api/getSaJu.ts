// pages/api/getSaJu.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { dummySaJu } from "@/data/dummySaJuData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // 요청받은 user 데이터 사용 가능
    const user = req.body.user;
    console.log(user);

    // 더미 데이터 반환
    return res.status(200).json(dummySaJu);
  }

  res.status(405).json({ message: "Method not allowed" });
}
