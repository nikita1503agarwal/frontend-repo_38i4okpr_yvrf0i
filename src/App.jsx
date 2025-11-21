import Hero from './components/Hero'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Starry dots background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_30%),_radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.08),transparent_30%),_radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.08),transparent_30%)]" />

      <Hero />
      <Gallery />
      <HowItWorks />

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-10 text-blue-200/80">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Lapse Through Time</p>
          <a href="#top" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
