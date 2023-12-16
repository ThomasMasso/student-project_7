import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPages from './pages/Error'
import Housing from './pages/Housing'

import '../src/sass/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<ErrorPages />} />
            </Routes>
        </Router>
    </React.StrictMode>,
)
