import { AlertTriangle, CheckCircle2, Stethoscope } from 'lucide-react';

export default function TriageExplainer() {
  return (
    <section id="triage" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900">First-level triage, not generic advice</h2>
            <p className="mt-3 text-gray-600">We don’t list 10 possibilities. We put you in the right lane: rest at home or seek care today.</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl ring-1 ring-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">Low risk → Rest & monitor</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">“Pattern is 90% consistent with seasonal flu. Rest, hydrate, and check temperature twice daily.”</p>
            </div>
            <div className="p-6 rounded-xl ring-1 ring-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <h3 className="font-semibold text-gray-900">High risk → Test or visit today</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">“Symptoms match the current Dengue profile. Book a test or see a clinician today.”</p>
            </div>
            <div className="p-6 rounded-xl ring-1 ring-gray-200 bg-white sm:col-span-2">
              <div className="flex items-center gap-3">
                <Stethoscope className="h-6 w-6 text-sky-600" />
                <h3 className="font-semibold text-gray-900">Built with local clinicians</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">Our model is tuned weekly to what clinics in Bengaluru report during monsoon. That’s why our confidence is higher than generic chatbots.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
