import React, { useState } from 'react'
import { contactService } from '../services/api'

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
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    try {
      await contactService.send({
        name: form.name.trim(),
        email: form.email.trim(),
        message: `${form.subject ? `[${form.subject}] ` : ''}${form.message.trim()}`,
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-green-900/40 border border-green-700/40 flex items-center justify-center text-3xl">
          ✓
        </div>
        <h3 className="font-heading text-2xl font-bold text-white">Mesaj trimis!</h3>
        <p className="text-zinc-400 max-w-xs">
          Mulțumim pentru mesaj! Echipa MJ Tribute te va contacta în cel mai scurt timp posibil.
        </p>
        <button
          onClick={() => setStatus(null)}
          className="mt-2 px-6 py-2.5 rounded-full text-sm border border-zinc-600 text-zinc-300 hover:border-purple-500 hover:text-white transition-all"
        >
          Trimite alt mesaj
        </button>
      </div>
    )
  }

  const field =
    'w-full bg-zinc-900/60 border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all'
  const errorField = 'border-red-500/60 focus:border-red-500'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Numele tău *"
            className={`${field} ${errors.name ? errorField : ''}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email *"
            className={`${field} ${errors.email ? errorField : ''}`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`${field} ${form.subject === '' ? 'text-zinc-500' : 'text-white'}`}
        >
          <option value="" disabled>Subiect (opțional)</option>
          <option value="Colaborare">Colaborare muzicală</option>
          <option value="Booking">Booking concert</option>
          <option value="Presă">Presă & Media</option>
          <option value="Fan">Mesaj fan</option>
          <option value="Altele">Altele</option>
        </select>
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Mesajul tău *"
          rows={5}
          className={`${field} resize-none ${errors.message ? errorField : ''}`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400 bg-red-900/20 border border-red-700/30 rounded-xl px-4 py-3">
          A apărut o eroare. Verifică conexiunea și încearcă din nou.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
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
