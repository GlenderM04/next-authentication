"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
  const { data: session, status } = useSession();

  console.log({session, status});

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="block w-full text-left pt-2 text-gray-700 hover:bg-gray-100"
        >
          Cerrar Sesión
        </button>
      </>
    );
  }
  return (
    <>
      <br />
      <button
        onClick={() => signIn()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Iniciar Sesión
      </button>
    </>
  );
}
