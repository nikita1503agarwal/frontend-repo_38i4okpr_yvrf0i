function HowItWorks() {
  const steps = [
    {
      title: 'Choose a scene',
      text: 'Pick from the gallery of time‑lapse journeys — cityscapes, nature, weather, and more.',
    },
    {
      title: 'Scrub through time',
      text: 'Use the slider to control the exact moment. Pause on details or zip to the action.',
    },
    {
      title: 'Play or present',
      text: 'Tap play for an effortless experience, perfect for showcasing and presentations.',
    },
  ]

  return (
    <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">How it works</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
              {i + 1}
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-1 text-blue-200/80">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
