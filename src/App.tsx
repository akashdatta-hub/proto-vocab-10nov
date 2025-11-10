import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Dictionary from './pages/Dictionary'
import Simulator from './pages/Simulator'
import Studio from './pages/Studio'
import Admin from './pages/Admin'

export default function App(){
  return (
    <div className="min-h-screen bg-bg text-ink px-4 py-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word/:wordId/dictionary" element={<Dictionary />} />
        <Route path="/word/:wordId/simulator" element={<Simulator />} />
        <Route path="/word/:wordId/studio" element={<Studio />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
