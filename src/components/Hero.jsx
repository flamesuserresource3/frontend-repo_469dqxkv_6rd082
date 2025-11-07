import { Shield, Activity, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-emerald-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" /> Bengaluru • Oct–Dec
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Triage you can trust. Not generic precautions.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A hyper-local health assistant trained on Bengaluru’s monsoon data. Get a clear first-level decision: rest at home or seek care today.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#triage" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg shadow hover:bg-gray-800 transition">
                <Activity className="h-5 w-5" /> Try Triage Demo
              </a>
              <a href="#trust" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg ring-1 ring-gray-200 hover:ring-gray-300 transition">
                <Shield className="h-5 w-5" /> Why trust us
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Private by design • No cloud sharing of your symptoms • Built for this season
            </p>
          </div>
          <div className="md:pl-6">
            <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 p-6">
              <div className="absolute -top-16 -right-16 h-40 w-40 bg-emerald-200/40 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-sky-200/40 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">Triage Preview</span>
                  <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">Local model</span>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                      <label className="text-sm text-gray-600">Fever (°C)</label>
                      <input type="number" defaultValue={39.2} className="mt-1 w-full rounded-md border-gray-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Headache</label>
                      <select className="mt-1 w-full rounded-md border-gray-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400">
                        <option>None</option>
                        <option>Mild</option>
                        <option>Severe</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Eye Pain</label>
                      <select className="mt-1 w-full rounded-md border-gray-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400">
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-md transition">
                    Analyze Symptoms
                  </button>
                  <div className="rounded-lg bg-gray-50 p-4 ring-1 ring-gray-100">
                    <p className="text-sm text-gray-700">
                      "We don’t upload your inputs to the cloud. Analysis happens on-device."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
