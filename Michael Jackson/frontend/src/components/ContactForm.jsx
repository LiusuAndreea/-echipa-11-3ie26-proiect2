import React, { useState } from 'react'

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = 'Numele trebuie să aibă cel puțin 2 caractere.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Adresă de email invalidă.'
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Mesajul trebuie să aibă cel puțin 10 caractere.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setStatus('loading')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
    } catch (_) {}
    setStatus('success')
    setForm(initialForm)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-14 gap-5 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/40 flex items-center justify-center text-4xl">
          ✓
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold dark:text-white text-zinc-900 mb-2">
            Mesaj trimis!
          </h3>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            Mulțumim! Echipa MJ Tribute te va contacta în cel mai scurt timp.
          </p>
        </div>
        <button
          onClick={() => setStatus(null)}
          className="mt-2 px-6 py-2.5 rounded-full text-sm border border-zinc-400 dark:border-zinc-600 text-zinc-600 dark:text-zinc-300 hover:border-purple-500 hover:text-purple-500 transition-all duration-200"
        >
          Trimite alt mesaj
        </button>
      </div>
    )
  }

  const inputBase = [
    'w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none border',
    'bg-white dark:bg-zinc-900/60',
    'border-zinc-300 dark:border-zinc-700/60',
    'text-zinc-900 dark:text-white',
    'placeholder-zinc-400 dark:placeholder-zinc-500',
    'focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20',
    'hover:border-zinc-400 dark:hover:border-zinc-600',
  ].join(' ')

  const inputError = 'border-red-400 dark:border-red-500/70 focus:border-red-500 focus:ring-red-500/20'
  const labelBase = 'block text-xs font-semibold mb-1.5 uppercase tracking-wider text-zinc-500 dark:text-zinc-400'

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      className="space-y-5"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelBase}>Nume *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Numele tău"
            className={`${inputBase} ${errors.name ? inputError : ''}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
              ⚠ {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className={labelBase}>Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@exemplu.com"
            className={`${inputBase} ${errors.email ? inputError : ''}`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
              ⚠ {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className={labelBase}>Subiect</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`${inputBase} cursor-pointer`}
        >
          <option value="">Alege un subiect (opțional)</option>
          <option value="Colaborare">Colaborare muzicală</option>
          <option value="Booking">Booking concert</option>
          <option value="Presa">Presă și Media</option>
          <option value="Fan">Mesaj fan</option>
          <option value="Altele">Altele</option>
        </select>
      </div>

      <div>
        <label className={labelBase}>Mesaj *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Scrie mesajul tău aici..."
          rows={5}
          className={`${inputBase} resize-none ${errors.message ? inputError : ''}`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            ⚠ {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 px-6 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed bg-purple-600 hover:bg-purple-500 active:scale-[0.98] text-white shadow-lg shadow-purple-900/30"
      >
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Se trimite...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Trimite Mesajul
          </>
        )}
      </button>
    </form>
  )
}
