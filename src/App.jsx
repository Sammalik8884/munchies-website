import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import Distribution from './pages/Distribution'
import Products from './pages/Products'
import Brands from './pages/Brands'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import AdminPanel from './pages/AdminPanel'

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'

  return (
    <AuthProvider>
      <LanguageProvider>
        <div className="app">
          <CustomCursor />
          <ScrollProgress />
          <ScrollToTop />
          {!isAdmin && <Navbar />}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/distribution" element={<Distribution />} />
              <Route path="/products" element={<Products />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </AnimatePresence>
          {!isAdmin && <Footer />}
        </div>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App
