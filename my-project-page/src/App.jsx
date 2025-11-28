import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ResearchProjectShow from './pages/ResearchProjectShow.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rp/synthetic_data_engine/:id" element={<ResearchProjectShow />} />
      </Routes>
    </>
  )
}

export default App
