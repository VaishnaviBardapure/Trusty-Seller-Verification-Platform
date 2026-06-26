import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SellerRegistration from './pages/SellerRegistration'
import VerifySeller from './pages/VerifySeller'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-trusty-blue text-white shadow-card">
              <span className="text-lg font-bold">✓</span>
            </div>
            <div>
              <p className="text-base font-semibold text-trusty-blue">Trusty</p>
              <p className="text-xs text-slate-500">COD Seller Verify</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex text-slate-600">
            <Link to="/" className="transition hover:text-trusty-blue">Home</Link>
            <Link to="/register" className="transition hover:text-trusty-blue">Seller Register</Link>
            <Link to="/verify" className="transition hover:text-trusty-blue">Verify</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/register" className="rounded-full bg-trusty-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600">
              Register
            </Link>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<SellerRegistration />} />
          <Route path="/verify" element={<VerifySeller />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;
