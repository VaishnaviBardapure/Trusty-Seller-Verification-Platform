import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-trusty-blue text-white">
            <span className="text-lg font-bold">✓</span>
          </div>
          <div>
            <p className="text-base font-semibold text-trusty-blue">Trusty</p>
            <p className="text-sm text-slate-500">COD Seller Verification</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Company</p>
            <div className="mt-3 flex flex-col gap-2 text-slate-600">
              <a href="#" className="transition hover:text-trusty-blue">About</a>
              <a href="#" className="transition hover:text-trusty-blue">Careers</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Support</p>
            <div className="mt-3 flex flex-col gap-2 text-slate-600">
              <Link to="/register" className="transition hover:text-trusty-blue">Seller Register</Link>
              <Link to="/verify" className="transition hover:text-trusty-blue">Verify Seller</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
