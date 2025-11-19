import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const items = [
    {
      name: 'Maria G.', role: 'Salon Owner',
      quote: 'We booked 27 extra appointments in the first week. The assistant replies instantly and customers love it.'
    },
    {
      name: 'Dr. Patel', role: 'Dental Clinic',
      quote: 'No more missed calls. Patients schedule cleanings via Instagram DMs at night. Huge time saver.'
    },
    {
      name: 'Ramon C.', role: 'Restaurant Manager',
      quote: 'It handles reservations and recommends specials. Friday nights are smoother and our upsells went up.'
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Loved by Local Businesses</h2>
          <p className="mt-3 text-slate-600">Real results, happier customers, and smoother operations.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-slate-900">{t.name} • <span className="text-slate-500 font-normal">{t.role}</span></footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
