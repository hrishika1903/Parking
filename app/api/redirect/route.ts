import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const authData = auth();
  const userId = (await authData).userId;

  if (!userId) {
    return NextResponse.redirect(
      new URL("/sign-in", "http://localhost:3000")
    );
  }

  return NextResponse.redirect(
    new URL("/dashboard/user", "http://localhost:3000")
  );
}
