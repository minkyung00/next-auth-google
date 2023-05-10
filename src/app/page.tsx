"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return <button onClick={() => signIn("google")}>Google로 로그인</button>;
}
