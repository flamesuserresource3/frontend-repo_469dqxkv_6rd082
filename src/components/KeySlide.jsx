import { AlertTriangle, CheckCircle2, MapPin } from 'lucide-react';

export default function KeySlide() {
  return (
    <section id="slide" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl ring-1 ring-gray-200 bg-white overflow-hidden">
          <div className="px-6 py-5 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-sky-50">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="h-4 w-4" /> Bengaluru Oct–Dec
            </div>
            <p className="text-sm font-medium text-gray-800">The Slide That Wins</p>
          </div>
          <div className="p-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900">Triage over Precautions</h3>
              <p className="mt-2 text-gray-600">Your first-level decision in seconds: which lane are you in?</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 ring-1 ring-gray-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <p className="font-medium text-gray-900">Rest & Monitor</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">“90% match to seasonal flu.” Clear, calm, and specific.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 ring-1 ring-gray-100">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <p className="font-medium text-gray-900">Test or Visit Today</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">“High-risk profile for current Dengue strain.” Actionable now.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-600">
            Built on specialist, hyper-local data with on-device privacy — explainable guidance you can show on stage.
          </div>
        </div>
      </div>
    </section>
  );
}
