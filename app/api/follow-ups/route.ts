import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET follow-ups" });
}

export async function POST(req: Request) {
  return NextResponse.json({ message: "POST follow-ups" });
}
