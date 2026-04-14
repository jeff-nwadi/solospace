import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ suggestion: "Here is an AI suggestion for your follow-up." });
}
