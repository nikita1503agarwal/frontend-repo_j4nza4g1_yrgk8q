import React from 'react'

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.value,
      email: form.email.value,
      business_type: form.business_type.value,
      message: form.message.value
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (json.ok) {
        alert('Mulțumim! Revenim în curând cu detalii.')
        form.reset()
      } else {
        alert('A apărut o eroare. Încearcă din nou.')
      }
    } catch (e) {
      alert('A apărut o eroare. Încearcă din nou.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Gata să începem?</h2>
            <p className="mt-3 text-slate-600">Programează un demo gratuit de 20 de minute. Discutăm obiectivele și îți arătăm cum asistentul tău AI poate genera ROI încă din săptămâna aceasta.</p>

            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Setup făcut pentru tine</li>
              <li>• Fără contract, poți anula oricând</li>
              <li>• Automatizare 24/7 inclusă</li>
            </ul>

            <a href="#contact" className="mt-8 inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Începe acum</a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white shadow" aria-label="Formular de contact">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nume</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Numele tău" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="tu@companie.com" />
              </div>
              <div>
                <label htmlFor="business_type" className="block text-sm font-medium text-slate-700">Tip de afacere</label>
                <select id="business_type" name="business_type" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option>Restaurant</option>
                  <option>Clinică</option>
                  <option>Frizerie</option>
                  <option>Service auto</option>
                  <option>Salon</option>
                  <option>Cabinet stomatologic</option>
                  <option>Altul</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mesaj</label>
                <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Spune-ne despre obiectivele tale"></textarea>
              </div>
              <button className="mt-2 inline-flex justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Programează un demo</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
