"use server";

import { NextResponse } from "next/server";

const RIOT_API_URL =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

export async function GET() {
  const res = await fetch(RIOT_API_URL, {
    headers: {
      "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY as string,
    },
  });
  const data = await res.json();
  return NextResponse.json({ data });
}
