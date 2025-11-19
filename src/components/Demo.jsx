import React from 'react'
import { motion } from 'framer-motion'

const messages = [
  { role: 'user', text: 'Bună! Aveți disponibil mâine la 16:00 pentru un tuns?' },
  { role: 'ai', text: 'Desigur! Avem o fereastră la 16:15 sau 16:45. Doriți să rezerv pentru 16:15 pe numele dvs.?' },
  { role: 'user', text: 'Da, 16:15 e perfect. Și cât costă un fade cu aranjat barbă?' },
  { role: 'ai', text: 'Un fade cu aranjat barbă este 35$. Pot adăuga un upgrade cu prosop fierbinte pentru 8$. Îl includ?' },
  { role: 'user', text: 'Da, te rog.' },
  { role: 'ai', text: 'Gata. Sunteți programat mâine la 16:15 cu upgrade-ul cu prosop fierbinte. Veți primi un reminder prin SMS cu 2 ore înainte.' },
]

export default function Demo() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Vezi cum funcționează</h2>
          <p className="mt-3 text-slate-600">O conversație exemplu între un client și asistentul tău AI.</p>
        </div>

        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <div className="space-y-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${m.role === 'ai' ? 'bg-blue-600 text-white rounded-tl-sm' : 'bg-slate-100 text-slate-800 rounded-tr-sm'}`}>
                  {m.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
