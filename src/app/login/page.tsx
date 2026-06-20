"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase/client";

export default function LoginPage() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if(error){
      alert(error.message);
      return;
    }

    window.location.href="/dashboard";
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white p-2 w-full"
      >
        Login
      </button>
    </div>
  );
}