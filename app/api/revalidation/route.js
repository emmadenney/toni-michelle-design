import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  console.log("secret", secret);

  console.log("ENV SECRET", CONTENTFUL_REVALIDATE_SECRET);

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("projects");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
