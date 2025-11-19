import React from 'react'
import { motion } from 'framer-motion'

const messages = [
  { role: 'user', text: 'Hi, do you have availability for a haircut tomorrow at 4pm?' },
  { role: 'ai', text: 'Absolutely! We have an opening at 4:15pm or 4:45pm. Would you like me to book 4:15pm under your name?' },
  { role: 'user', text: 'Yes, 4:15pm works. Also, how much is a fade with beard trim?' },
  { role: 'ai', text: 'A fade with beard trim is $35. I can add a hot towel upgrade for $8. Should I include it?' },
  { role: 'user', text: 'Yes please.' },
  { role: 'ai', text: 'Done. You’re all set for tomorrow at 4:15pm with the hot towel upgrade. You’ll get a text reminder 2 hours before.' },
]

export default function Demo() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">See It In Action</h2>
          <p className="mt-3 text-slate-600">A sample conversation between a customer and your AI assistant.</p>
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
