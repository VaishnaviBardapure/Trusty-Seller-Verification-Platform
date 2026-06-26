import { useState } from 'react'

const fields = [
  { label: 'Business Name', name: 'businessName', type: 'text', placeholder: 'Trusty Traders' },
  { label: 'GST Number', name: 'gstNumber', type: 'text', placeholder: '27ABCDE1234F1Z5' },
  { label: 'PAN Number', name: 'panNumber', type: 'text', placeholder: 'ABCDE1234F' },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'seller@trusty.in' },
  { label: 'Business Address', name: 'address', type: 'text', placeholder: 'Shop 12, MG Road, Bengaluru' },
  { label: 'Website / Instagram URL', name: 'website', type: 'url', placeholder: 'https://instagram.com/trusty.store' },
]

export default function SellerRegistration() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('Verification Pending')
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-card sm:p-12">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-trusty-green">Seller Registration</p>
          <h1 className="mt-4 text-4xl font-semibold text-trusty-blue">Register your business for COD verification</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Submit your GST/PAN details and stay ready for shipment verification before every delivery.
          </p>
        </div>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label key={field.name} className="block">
              <span className="text-sm font-semibold text-slate-700">{field.label}</span>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-trusty-blue focus:bg-white"
              />
            </label>
          ))}

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Document Upload</span>
            <input
              name="documents"
              type="file"
              accept=".pdf,image/*"
              required
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition file:rounded-full file:border-0 file:bg-trusty-blue file:px-4 file:py-2 file:text-sm file:text-white focus:border-trusty-blue"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button className="inline-flex items-center justify-center rounded-full bg-trusty-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-900">
              Submit
            </button>
            {status && (
              <p className="rounded-full bg-trusty-green/10 px-5 py-3 text-sm font-semibold text-trusty-green">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
