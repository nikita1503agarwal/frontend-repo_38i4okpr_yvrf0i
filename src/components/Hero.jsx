import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Hourglass */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4TrRyLcIHhcItjnk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to improve text contrast (won't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center lg:py-32">
        <span className="mb-4 inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 backdrop-blur">
          Interactive • Futuristic • Immersive
        </span>
        <h1 className="text-balance bg-gradient-to-br from-white via-blue-100 to-blue-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Lapse Through Time
        </h1>
        <p className="mt-5 max-w-2xl text-blue-200/90">
          Explore mesmerizing time‑lapse journeys. Scrub, pause, and play the passage of time at your command.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#gallery" className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
            Explore Timelapses
          </a>
          <a href="#how" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            How it works
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
