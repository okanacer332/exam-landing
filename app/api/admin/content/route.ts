import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { getSiteContent, normalizeSiteContent, saveSiteContent } from "@/lib/content";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ message: "Yetkisiz işlem." }, { status: 401 });
  }

  return NextResponse.json(await getSiteContent());
}

export async function PUT(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ message: "Yetkisiz işlem." }, { status: 401 });
  }

  try {
    const content = normalizeSiteContent(await request.json());
    const savedContent = await saveSiteContent(content);

    return NextResponse.json(savedContent);
  } catch (error) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "İçerik kaydedilemedi.",
      },
      { status: 400 },
    );
  }
}
