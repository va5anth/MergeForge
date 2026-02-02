import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
 if (!email || !email.includes("@")) { return NextResponse.json( { error: "Invalid email" }, { status: 400 } ); }
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase.from("waitlist").insert({ email });
  
  if (error && error.code === "23505") {
  return NextResponse.json(
    { error: "Email already registered" },
    { status: 409 }
  );
}

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
