import { NextResponse } from "next/server";

// Spam query URLs on the home page (e.g. /?q=..., /?s=..., /?casino=...) get
// crawled and show up in Search Console. 301-redirect any home URL carrying
// query parameters back to the clean "/" so they consolidate into the
// canonical home page. Ad/analytics tracking params are left untouched.
const ALLOWED_PARAMS = /^(utm_[a-z_]+|gclid|gbraid|wbraid|fbclid|msclkid|gad_source|srsltid)$/i;

export function proxy(request) {
  const url = request.nextUrl;
  if (url.pathname !== "/" || url.search === "") return NextResponse.next();

  const keys = [...url.searchParams.keys()];
  const hasSpamParam = keys.length === 0 || keys.some((k) => !ALLOWED_PARAMS.test(k));
  if (!hasSpamParam) return NextResponse.next();

  const clean = url.clone();
  clean.search = "";
  return NextResponse.redirect(clean, 301);
}

export const config = {
  matcher: "/",
};
