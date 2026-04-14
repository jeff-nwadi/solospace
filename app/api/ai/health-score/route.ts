import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ healthScore: 85, summary: "Customer health is good." });
}
