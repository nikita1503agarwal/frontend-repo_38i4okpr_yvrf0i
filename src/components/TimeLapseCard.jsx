import { useEffect, useRef, useState } from 'react'

// An interactive timelapse player that lets users scrub through frames with a slider.
// It supports either: (a) a single video element controlled by playbackRate and currentTime,
// or (b) a sequence of image frames. Here we use a standard MP4 video and control currentTime.

function TimeLapseCard({ title, description, src, poster, durationHint = 10 }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 0..1 scrub position
  const [videoDuration, setVideoDuration] = useState(0)

  // When metadata is loaded, capture duration
  const onLoaded = () => {
    const v = videoRef.current
    if (!v) return
    setVideoDuration(v.duration || durationHint)
  }

  // Keep slider in sync when playing
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    let raf
    const tick = () => {
      if (!v.duration) return
      setProgress(v.currentTime / v.duration)
      raf = requestAnimationFrame(tick)
    }

    if (isPlaying) {
      raf = requestAnimationFrame(tick)
    }

    return () => raf && cancelAnimationFrame(raf)
  }, [isPlaying])

  // When the slider moves, update video time
  const handleScrub = (e) => {
    const value = Number(e.target.value)
    setProgress(value)
    const v = videoRef.current
    if (v && v.duration) {
      v.currentTime = value * v.duration
    }
  }

  const togglePlay = async () => {
    const v = videoRef.current
    if (!v) return
    if (isPlaying) {
      v.pause()
      setIsPlaying(false)
    } else {
      try {
        await v.play()
        setIsPlaying(true)
      } catch (err) {
        // Autoplay restrictions: ensure user interaction (button press) triggers play
        console.warn('Playback error', err)
      }
    }
  }

  const prettyTime = (sec) => {
    if (!sec || Number.isNaN(sec)) return '0:00'
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const current = videoDuration * progress

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-4 shadow-lg transition hover:bg-slate-900/60">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="metadata"
          onLoadedMetadata={onLoaded}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-blue-200/80">{description}</p>
        </div>
        <button
          onClick={togglePlay}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isPlaying ? 'bg-rose-500 hover:bg-rose-400' : 'bg-blue-500 hover:bg-blue-400'} text-white`}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Slider Controls */}
      <div className="mt-3">
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={progress}
          onChange={handleScrub}
          className="w-full accent-blue-500"
        />
        <div className="mt-1 flex items-center justify-between text-xs text-blue-200/70">
          <span>{prettyTime(0)}</span>
          <span>{prettyTime(current)} / {prettyTime(videoDuration)}</span>
        </div>
      </div>
    </div>
  )
}

export default TimeLapseCard
