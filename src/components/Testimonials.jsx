import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const items = [
    {
      name: 'Maria G.', role: 'Proprietar salon',
      quote: 'Am programat 27 de ședințe în plus în prima săptămână. Asistentul răspunde instant și clienții sunt încântați.'
    },
    {
      name: 'Dr. Patel', role: 'Clinic3 stomatologic3',
      quote: 'Nu mai avem apeluri pierdute. Pacienții își programează detartrajul prin Instagram noaptea. Economie uriașă de timp.'
    },
    {
      name: 'Ramon C.', role: 'Manager restaurant',
      quote: 'Gestionează rezervările și recomandă specialități. Vinerile sunt mai line și upsell-urile au crescut.'
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Iubit de afacerile locale</h2>
          <p className="mt-3 text-slate-600">Rezultate reale, clienți mai fericiți și operațiuni mai fluide.</p>
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
