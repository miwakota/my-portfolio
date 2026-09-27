import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorksIndex from './pages/works/WorksIndex'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<WorksIndex />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
