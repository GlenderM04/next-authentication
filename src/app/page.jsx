// app/page.js
"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log({ session, status });
  }, [session]);

  if (session) {
    return (
      <>
        <p>Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Not Signed In</p>
      <Link href="/login">
        <button>Sign in</button>
      </Link>
    </>
  );
}
