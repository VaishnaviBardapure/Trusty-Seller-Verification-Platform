import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Verified Badge',
    description: 'Seller gets a trusted seal before COD orders leave the warehouse.',
  },
  {
    title: 'QR Code on Package',
    description: 'Customers scan and confirm seller identity with one tap.',
  },
  {
    title: 'Real-time GST Verification',
    description: 'Live GST/PAN validation with Indian government data.',
  },
  {
    title: 'Scam Alert System',
    description: 'Instant warning for suspicious seller or package activity.',
  },
]

const steps = [
  {
    title: 'Seller register karein',
    subtitle: 'GST/PAN documents upload karke trust badge paa lein.',
    step: 'Step 1',
  },
  {
    title: 'Shipping verify kare',
    subtitle: 'Pickup se pehle seller authenticity check hoti hai.',
    step: 'Step 2',
  },
  {
    title: 'Customer scan kare',
    subtitle: 'Package par QR scan se seller verify ho jaata hai.',
    step: 'Step 3',
  },
]

const stats = [
  { label: '3 in 5 Indians face online scams', value: '' },
  { label: '₹4000 Billion lost annually', value: '' },
  { label: 'COD = 65% of orders', value: '' },
]

export default function LandingPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-trusty-green/10 px-4 py-1.5 text-sm font-semibold text-trusty-green">
              Indian COD fraud se bachao
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-trusty-blue sm:text-6xl">
              Trust Every Delivery.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Fake sellers aur COD scams ka solution for India. Trusty verifies seller identity before pickup, protects customers on doorstep delivery, and keeps your brand safe.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/register" className="inline-flex items-center justify-center rounded-full bg-trusty-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-trusty-blue/20 transition hover:bg-indigo-900">
                Register as Seller
              </Link>
              <Link to="/register" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-trusty-blue hover:text-trusty-blue">
                Partner with Us (Shipping Company)
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 shadow-card">
            <div className="absolute -right-24 top-8 h-24 w-24 rounded-full bg-trusty-blue/10 blur-3xl" />
            <div className="relative rounded-[32px] bg-white p-8 shadow-xl sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-trusty-blue text-white">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Trusty Shield</p>
                  <p className="text-xl font-semibold text-trusty-blue">COD verification</p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Verified Seller</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">Seller name</p>
                  <p className="mt-2 text-slate-600">GST / PAN verified, trusted for COD delivery.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-trusty-blue/5 p-5">
                    <p className="text-sm text-slate-500">Trust score</p>
                    <p className="mt-2 text-3xl font-semibold text-trusty-blue">8.9</p>
                  </div>
                  <div className="rounded-3xl bg-trusty-green/5 p-5">
                    <p className="text-sm text-slate-500">QR scan ready</p>
                    <p className="mt-2 text-3xl font-semibold text-trusty-green">✔️</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-card">
              <p className="text-sm font-semibold text-trusty-green">{item.step}</p>
              <h2 className="mt-4 text-xl font-semibold text-trusty-blue">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <section className="mt-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-trusty-green">Features</p>
              <h2 className="mt-4 text-3xl font-semibold text-trusty-blue">Built for India’s COD marketplace</h2>
              <p className="mt-4 max-w-xl text-slate-600">Trusty blends modern compliance, easy scan UX, and shipping partner workflows to make every COD order safe and smooth.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-trusty-blue">{feature.title}</p>
                  <p className="mt-3 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[32px] bg-trusty-blue px-8 py-12 text-white shadow-card sm:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-200">Stat</p>
                <p className="mt-4 text-2xl font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
