import WaitListForm from "@/components/WaitListForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 lg:py-28 max-w-5xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <p className="text-sm font-medium text-emerald-400 uppercase tracking-[0.2em]">
            MergeForge
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            AI‑powered PR reviews and documentation
            <span className="block text-emerald-400">for small dev teams</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl">
            Ship faster with automated pull‑request reviews, instant code summaries, and clean documentation — all delivered directly inside GitHub.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#waitlist" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-sm hover:bg-emerald-400 transition">
              Join the waitlist
            </a>
            <Link href="#how-it-works" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 transition">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="px-6 py-12 md:py-16 max-w-3xl mx-auto">
        <WaitListForm />
      </section>

      {/* Problem Section */}
      <section className="px-6 py-12 md:py-16 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Code reviews slow teams down
          </h2>
          <p className="text-slate-300">
            Small teams move fast — but PR reviews often don’t. Engineers wait hours (or days) for feedback. Senior devs become bottlenecks. Documentation falls behind. Context switching kills momentum.
          </p>
          <p className="text-slate-300">
            MergeForge removes the friction so your team can focus on building, not waiting.
          </p>
        </div>
      </section>

      {/* What MergeForge Does */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Your AI teammate for code quality and clarity
            </h2>
            <p className="text-slate-300 max-w-3xl">
              MergeForge plugs into your existing GitHub workflow to review code, summarize changes, and keep documentation in sync — without adding more tools or meetings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Feature Cards */}
            {/* ... same as before ... */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-16 md:py-20 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* ... same as before ... */}
        </div>
      </section>

      {/* Why Teams Love MergeForge */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        {/* ... same as before ... */}
      </section>

      {/* Who It's For */}
      <section className="px-6 py-16 md:py-20 bg-slate-900/40 border-y border-slate-800">
        {/* ... same as before ... */}
      </section>

      {/* Social Proof */}
      <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto">
        {/* ... same as before ... */}
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 md:py-20 border-t border-slate-800 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Ship faster. Review smarter. Document effortlessly.
          </h2>
          <p className="text-slate-300">
            Join the waitlist to get early access to MergeForge and be among the first to try the GitHub App.
          </p>
          <a href="#waitlist" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-sm hover:bg-emerald-400 transition">
            Join the waitlist
          </a>
        </div>
      </section>
    </main>
  );
}