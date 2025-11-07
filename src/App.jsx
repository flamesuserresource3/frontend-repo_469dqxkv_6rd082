import Hero from './components/Hero';
import TriageExplainer from './components/TriageExplainer';
import TrustSection from './components/TrustSection';
import CTA from './components/CTA';
import KeySlide from './components/KeySlide';

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-gray-900">Bengaluru Triage</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#triage" className="hover:text-gray-900">How it works</a>
          <a href="#trust" className="hover:text-gray-900">Trust & Privacy</a>
          <a href="#slide" className="hover:text-gray-900">Key slide</a>
        </nav>
        <a href="#triage" className="text-sm font-medium bg-gray-900 text-white px-3 py-1.5 rounded-md">Try Demo</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Bengaluru Triage. Built for Oct–Dec season.</p>
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <a href="#trust" className="hover:text-gray-700">Privacy</a>
          <a href="#triage" className="hover:text-gray-700">Method</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <TriageExplainer />
        <TrustSection />
        <CTA />
        <KeySlide />
      </main>
      <Footer />
    </div>
  );
}
