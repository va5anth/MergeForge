"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "invalid" | "duplicate" | "success" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setStatus("invalid");
        return;
    }
    setStatus("loading");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="rounded-md px-4 py-2 bg-slate-900 border border-slate-700 text-slate-100 w-full"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-emerald-500 px-6 py-2 text-slate-950 font-medium hover:bg-emerald-400 transition disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join the waitlist"}
      </button>
        {status === "invalid" && (
        <p className="text-red-400 text-sm pt-1">Please enter a valid email.</p>
        )}
     {status === "duplicate" && (
        <p className="text-yellow-400 text-sm pt-1">You're already on the list.</p>
      )}
      {status === "success" && (
        <p className="text-emerald-400 text-sm pt-1">You're in!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm pt-1">Something went wrong.</p>
      )}
    </form>
  );
}
