import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("revalidate");

  return NextResponse.json({
    page: "/render/revalidate",
  });
}