// import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Welcome } from './ui/pages/welcome/Welcome'
import { Home } from './ui/pages/home/Home'

// const Characters = lazy(() => import("remoteCharacters/mf-characters"));

function App() {
  return (
      <Router>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Welcome />} />
            </Routes>
      </Router>
  )
}

export default App
