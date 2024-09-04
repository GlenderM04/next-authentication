// components/Login.js
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importar useRouter

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Inicializar useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamada a la función signIn de NextAuth
    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    if (result.error) {
      // Maneja el error de inicio de sesión
      console.error("Error signing in", result.error);
    } else {
      // Redirige a la página principal después del inicio de sesión exitoso
      router.push("/");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
