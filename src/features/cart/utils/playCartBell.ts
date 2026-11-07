export function playCartBell() {
  const AudioContextConstructor = window.AudioContext
  if (!AudioContextConstructor) return

  const context = new AudioContextConstructor()
  const frequencies = [880, 1320]
  let oscillatorsRemaining = frequencies.length

  for (const frequency of frequencies) {
    const oscillator = context.createOscillator()
    const volume = context.createGain()
    const now = context.currentTime

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, now)
    volume.gain.setValueAtTime(0.001, now)
    volume.gain.exponentialRampToValueAtTime(0.18, now + 0.015)
    volume.gain.exponentialRampToValueAtTime(0.001, now + 0.55)

    oscillator.connect(volume)
    volume.connect(context.destination)
    oscillator.onended = () => {
      oscillatorsRemaining -= 1
      if (oscillatorsRemaining === 0) void context.close()
    }
    oscillator.start(now)
    oscillator.stop(now + 0.56)
  }
}
