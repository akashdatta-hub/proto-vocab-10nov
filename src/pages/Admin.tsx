import { useState } from 'react'

export default function Admin(){
  const [p, setP] = useState('')
  const ok = p === (import.meta.env.VITE_ADMIN_PASS || 'proto-vocab')
  return (
    <div className="max-w-xl mx-auto space-y-4">
      {!ok ? (
        <div className="rounded-2xl bg-white shadow p-6">
          <div className="text-lg font-semibold mb-2">Admin</div>
          <input className="border rounded px-3 py-2 w-full" type="password" value={p} onChange={e=>setP(e.target.value)} placeholder="Password" />
          <div className="text-xs text-ink/60 mt-2">Default: proto-vocab (set VITE_ADMIN_PASS later)</div>
        </div>
      ) : (
        <div className="rounded-2xl bg-white shadow p-6 text-center">
          <div className="text-2xl font-semibold">Dashboard placeholder</div>
          <div className="text-ink/70">Hook up charts & views next</div>
        </div>
      )}
    </div>
  )
}
