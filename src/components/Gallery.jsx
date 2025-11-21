import TimeLapseCard from './TimeLapseCard'

function Gallery() {
  // Demo sources use public domain/stock sample clips. Replace with your own.
  // If offline, these will still load since they are remote URLs.
  const items = [
    {
      title: 'City Sunset',
      description: 'Day to night transition over a bustling city skyline.',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Blooming Flowers',
      description: 'A garden wakes up as blossoms unfurl in fast motion.',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      poster: 'https://images.unsplash.com/photo-1523419409543-6f6f6a6a7e41?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Storm Building',
      description: 'Clouds gather and race to form a dramatic storm front.',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      poster: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf23?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="gallery" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Interactive Gallery</h2>
          <p className="mt-2 text-blue-200/80">Scrub the slider to control time. Click play to sit back and watch.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <TimeLapseCard key={i} {...it} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
