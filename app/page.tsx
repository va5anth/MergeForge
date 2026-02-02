// app/page.tsx (Next.js 13+ with App Router)
// If you're using pages router, export default function Home() in pages/index.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
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
            Ship faster with automated pull‑request reviews, instant code summaries, and clean
            documentation — all delivered directly inside GitHub.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-sm hover:bg-emerald-400 transition">
              Join the waitlist
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 transition">
              See how it works
            </button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-12 md:py-16 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Code reviews slow teams down
          </h2>
          <p className="text-slate-300">
            Small teams move fast — but PR reviews often don’t. Engineers wait hours (or days) for
            feedback. Senior devs become bottlenecks. Documentation falls behind. Context switching
            kills momentum.
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
              MergeForge plugs into your existing GitHub workflow to review code, summarize changes,
              and keep documentation in sync — without adding more tools or meetings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <h3 className="text-lg font-semibold">⚡ Instant PR reviews</h3>
              <p className="text-sm text-slate-300">
                Every pull request gets an immediate, consistent, high‑quality review — no more
                waiting for someone to be available.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <h3 className="text-lg font-semibold">🧠 Deep code understanding</h3>
              <p className="text-sm text-slate-300">
                MergeForge analyzes diffs, context, and patterns to provide actionable suggestions,
                catch issues, and highlight edge cases.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <h3 className="text-lg font-semibold">📝 Automatic documentation</h3>
              <p className="text-sm text-slate-300">
                Every PR comes with a clean summary, changelog entry, and optional documentation
                updates.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <h3 className="text-lg font-semibold">🔗 Works where you work</h3>
              <p className="text-sm text-slate-300">
                MergeForge integrates directly with GitHub. No new tools, dashboards, or workflows
                to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 md:py-20 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              A simple, developer‑friendly workflow
            </h2>
            <p className="text-slate-300 max-w-3xl">
              MergeForge is designed to feel like a natural extension of your existing GitHub
              workflow — not another tool to manage.
            </p>
          </div>

          <ol className="grid gap-6 md:grid-cols-3">
            <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Step 1
              </p>
              <h3 className="text-lg font-semibold">Install the GitHub App</h3>
              <p className="text-sm text-slate-300">
                Connect MergeForge to your repo in seconds with a secure GitHub App installation.
              </p>
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Step 2
              </p>
              <h3 className="text-lg font-semibold">Open a pull request</h3>
              <p className="text-sm text-slate-300">
                MergeForge reviews the code instantly and posts comments, suggestions, and summaries
                directly in GitHub.
              </p>
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Step 3
              </p>
              <h3 className="text-lg font-semibold">Merge with confidence</h3>
              <p className="text-sm text-slate-300">
                Your team gets consistent reviews, clear summaries, and up‑to‑date documentation —
                automatically.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Why Teams Love MergeForge */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Built for speed, clarity, and quality
            </h2>
            <p className="text-slate-300 max-w-3xl">
              MergeForge is for teams that care about clean code, fast iteration, and a great
              developer experience — without adding more process.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-emerald-400">•</span>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Faster shipping</span> — PRs get
                reviewed immediately, so work doesn’t sit idle.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-emerald-400">•</span>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Higher code quality</span> — no more
                rushed or skipped reviews when things get busy.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-emerald-400">•</span>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Better onboarding</span> — new
                engineers understand changes quickly with clear summaries.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-emerald-400">•</span>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Less cognitive load</span> —
                MergeForge handles the tedious parts so your team can focus on building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-6 py-16 md:py-20 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who it’s for</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <p className="text-sm text-slate-300">
              • Small dev teams moving fast  
              • Solo founders building in public  
              • Agencies juggling multiple clients
            </p>
            <p className="text-sm text-slate-300">
              • Teams without dedicated reviewers  
              • Open‑source maintainers  
              • Anyone who wants consistent, high‑quality PR feedback
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Placeholder */}
      <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto">
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 md:p-8 text-center space-y-3">
          <p className="text-sm font-medium text-emerald-400 uppercase tracking-[0.2em]">
            Built by engineers, for engineers
          </p>
          <p className="text-sm text-slate-300">
            Trusted by developers who care about clean code, fast iteration, and a great developer
            experience.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 md:py-20 border-t border-slate-800 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Ship faster. Review smarter. Document effortlessly.
          </h2>
          <p className="text-slate-300">
            Join the waitlist to get early access to MergeForge and be among the first to try the
            GitHub App.
          </p>
          <button className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-sm hover:bg-emerald-400 transition">
            Join the waitlist
          </button>
        </div>
      </section>
    </main>
  );
}
