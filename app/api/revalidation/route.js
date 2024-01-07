import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");
  const envSecret = process.env.CONTENTFUL_REVALIDATE_SECRET;

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret", secret, envSecret },
      { status: 401 }
    );
  }

  revalidateTag("projects");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
