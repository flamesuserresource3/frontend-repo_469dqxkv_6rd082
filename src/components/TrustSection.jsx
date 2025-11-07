import { Lock, Eye, Cpu } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Why people trust this app</h2>
          <p className="mt-3 text-gray-600">Transparent reasoning, specialist focus, and privacy-first by design.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white ring-1 ring-gray-200">
            <div className="flex items-center gap-3">
              <Cpu className="h-6 w-6 text-indigo-600" />
              <h3 className="font-semibold text-gray-900">Specialist model</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">Trained only on medical data relevant to Bengaluru’s Oct–Dec season. No poems, no code — just health.</p>
          </div>
          <div className="p-6 rounded-xl bg-white ring-1 ring-gray-200">
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-emerald-600" />
              <h3 className="font-semibold text-gray-900">Explainable calls</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">“We flagged high risk because eye pain + high fever are key indicators in current local cases.” You see the why.</p>
          </div>
          <div className="p-6 rounded-xl bg-white ring-1 ring-gray-200">
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-gray-900" />
              <h3 className="font-semibold text-gray-900">Hybrid privacy</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">On-device analysis keeps your inputs off the cloud. Aggregated trends only — not identities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
