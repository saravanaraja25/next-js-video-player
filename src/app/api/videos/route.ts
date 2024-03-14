import { NextResponse } from "next/server";
import { VideoList } from "./data";

type ResponseData = {
  message: string;
};

export async function GET() {
  return NextResponse.json({ data: VideoList }, { status: 200 });
}
