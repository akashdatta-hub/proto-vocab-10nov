import { useParams, useNavigate } from 'react-router-dom'
export default function Dictionary(){
  const { wordId } = useParams()
  const nav = useNavigate()
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="rounded-2xl bg-white shadow p-6 text-center">
        <div className="text-2xl font-semibold">Dictionary — {wordId}</div>
        <div className="text-ink/70">Translate + Build (placeholder)</div>
      </div>
      <button className="w-full min-h-[48px] rounded-full bg-accent text-white" onClick={()=>nav(`/word/${wordId}/simulator`)}>
        Next
      </button>
    </div>
  )
}
