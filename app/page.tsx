export default function Home() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-6">
          Ship Better Code. Automatically.
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          AI‑powered pull request reviews, documentation, and ADR generation for small dev teams.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/apps/mergeforge/installations/new"
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Install on GitHub
          </a>

          <a
            href="#pricing"
            className="border border-gray-400 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Why Teams Love This */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Why teams love MergeForge</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">🔍 Actionable PR Reviews</h3>
            <p className="text-gray-600">
              Real, line‑by‑line comments that catch code smells, missing tests, anti‑patterns,
              security issues, and performance problems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📝 Documentation That Writes Itself</h3>
            <p className="text-gray-600">
              Every merged PR updates your architecture docs, module docs, and ADRs automatically.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">⚙️ Customizable to Your Team</h3>
            <p className="text-gray-600">
              Use a simple YAML config to define strictness, naming conventions, required tests,
              and architectural rules.
            </p>
          </div>
        </div>
      </section>

      {/* Built for small teams */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Built for small teams</h2>
        <p className="text-gray-600 text-lg max-w-3xl">
          You don’t need SonarQube. You don’t need GitHub Enterprise. You need something fast,
          simple, and actually helpful. MergeForge is designed for startups, agencies, freelancers,
          and small engineering teams.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-20">
        <h2 className="text-3xl font-bold mb-10">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Starter */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-600 mb-4">For solo developers</p>
            <p className="text-4xl font-bold mb-6">$19<span className="text-lg">/mo</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>100 PR reviews</li>
              <li>Basic documentation</li>
              <li>1 repository</li>
            </ul>
            <a
              href="#"
              className="block text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Start Free Trial
            </a>
          </div>

          {/* Team */}
          <div className="border rounded-xl p-6 shadow-lg bg-gray-50">
            <h3 className="text-2xl font-semibold mb-2">Team</h3>
            <p className="text-gray-600 mb-4">For small teams</p>
            <p className="text-4xl font-bold mb-6">$39<span className="text-lg">/mo</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Unlimited PR reviews</li>
              <li>Docs + ADR generation</li>
              <li>Up to 5 repositories</li>
              <li>Custom rules</li>
            </ul>
            <a
              href="#"
              className="block text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Start Free Trial
            </a>
          </div>

          {/* Pro */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">For agencies</p>
            <p className="text-4xl font-bold mb-6">$79<span className="text-lg">/mo</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Unlimited everything</li>
              <li>Slack/Teams integration</li>
              <li>Advanced rules</li>
              <li>Priority support</li>
            </ul>
            <a
              href="#"
              className="block text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">What customers say</h2>

        <div className="space-y-6 text-gray-700">
          <p>“Cut our PR review time by 60%.”</p>
          <p>“Finally, documentation that doesn’t suck.”</p>
          <p>“We replaced three tools with this.”</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to ship better code?</h2>
        <p className="text-gray-600 mb-8">
          Install the GitHub App and get your first AI‑powered review in minutes.
        </p>

        <a
          href="https://github.com/apps/mergeforge/installations/new"
          className="bg-black text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Install on GitHub
        </a>
      </section>
    </main>
  );
}
