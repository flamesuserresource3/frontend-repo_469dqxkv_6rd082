import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Show this to your judges</h3>
            <p className="text-white/80 mt-1">One slide that sells the difference: triage decisions, not generic precautions.</p>
          </div>
          <a href="#slide" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg font-medium hover:bg-white/90 transition">
            <Rocket className="h-5 w-5" /> Get the key slide
          </a>
        </div>
      </div>
    </section>
  );
}
