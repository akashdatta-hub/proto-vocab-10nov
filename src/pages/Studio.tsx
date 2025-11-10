import { useParams } from 'react-router-dom'
export default function Studio(){
  const { wordId } = useParams()
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="rounded-2xl bg-white shadow p-6 text-center">
        <div className="text-2xl font-semibold">Language Studio — {wordId}</div>
        <div className="text-ink/70">Sentence or Draw (placeholder)</div>
      </div>
    </div>
  )
}
