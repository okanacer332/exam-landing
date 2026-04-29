import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, shouldUseSecureAdminCookie } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secure: shouldUseSecureAdminCookie(),
  });

  return response;
}
