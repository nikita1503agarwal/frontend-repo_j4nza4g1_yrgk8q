import React from 'react'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Prețuri simple și transparente</h2>
          <p className="mt-3 text-slate-600">Fără contracte. Poți anula oricând. ROI din prima zi.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 p-8 bg-white shadow-lg"
          >
            <h3 className="text-xl font-semibold text-slate-900">Setup unic</h3>
            <p className="mt-2 text-5xl font-extrabold tracking-tight text-slate-900">$200</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• Descoperire și strategie</li>
              <li>• Configurare agent personalizat</li>
              <li>• Integrare cu instrumentele tale</li>
              <li>• Antrenare pe politici & meniuri</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border-2 border-blue-600 p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl"
          >
            <h3 className="text-xl font-semibold">Mentenanță & Hosting</h3>
            <p className="mt-2 text-5xl font-extrabold tracking-tight">$4<span className="text-base align-super font-semibold">/zi</span></p>
            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• Uptime & monitorizare 24/7</li>
              <li>• Automatizare mesaje & rutare</li>
              <li>• Actualizări și îmbunătățiri</li>
              <li>• Suport prioritar</li>
            </ul>
            <a href="#contact" className="mt-8 inline-block px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 transition-colors">Pornește în 24h</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
