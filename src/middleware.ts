import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** FormSubmit.co activates forms per site origin — keep traffic on www. */
const CANONICAL_HOST = "www.storyofshiprocked.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host === "storyofshiprocked.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
