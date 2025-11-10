import { useNavigate } from 'react-router-dom'

const WORDS = ['run','moon','cunning','friend']

export default function Home(){
  const nav = useNavigate()
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="rounded-2xl bg-white shadow p-6 text-center">
        <div className="text-2xl font-semibold mb-1">Proto‑Vocab</div>
        <div className="text-ink/70">Choose a word to start</div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {WORDS.map(w => (
          <button key={w} className="w-full min-h-[48px] rounded-full bg-accent text-white"
            onClick={()=>nav(`/word/${w}/dictionary`)}>
            {w.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
