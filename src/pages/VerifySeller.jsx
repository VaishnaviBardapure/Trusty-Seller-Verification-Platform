export default function VerifySeller() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-card sm:p-12">
        <div className="mb-10 flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-trusty-green">Verify Seller</p>
          <h1 className="text-4xl font-semibold text-trusty-blue">Public QR Scan Result</h1>
          <p className="max-w-2xl text-slate-600">
            Scan the package QR and instantly check whether the seller is verified for COD delivery.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="text-trusty-green">Verified ✅</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Seller Name</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Trusty Traders Pvt Ltd</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Verified Since</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">12 March 2025</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Trust Score</p>
                <p className="mt-2 text-3xl font-semibold text-trusty-blue">9.2 / 10</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">GST Status</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Active and verified</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <div className="mx-auto inline-flex h-56 w-56 items-center justify-center rounded-3xl bg-white text-trusty-blue shadow-md">
                <p className="text-5xl font-bold">QR</p>
              </div>
              <p className="mt-5 text-sm text-slate-500">Scan this QR code on the package to verify seller details.</p>
            </div>
            <button className="w-full rounded-full bg-trusty-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
              Report Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
