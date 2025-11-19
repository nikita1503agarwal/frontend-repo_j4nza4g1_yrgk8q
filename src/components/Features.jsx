import React from 'react'
import { motion } from 'framer-motion'
import { Clock, CalendarCheck2, Zap, Layers, TrendingUp, Smile } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: Clock, title: 'Suport 24/7', desc: 'Nu mai ratezi niciun mesaj sau rezervare.' },
    { icon: CalendarCheck2, title: 'Rezervări automate', desc: 'Programare în timp real și confirmări.' },
    { icon: Zap, title: 'Răspunsuri rapide', desc: 'Răspuns instant la întrebări și solicitări.' },
    { icon: Layers, title: 'Integrare multi-platformă', desc: 'WhatsApp, Instagram, Facebook, chat pe site.' },
    { icon: TrendingUp, title: 'Upsell integrat', desc: 'Promovează add-on-uri, pachete și upgrade-uri.' },
    { icon: Smile, title: 'Experiențe mai bune', desc: 'Încântă clienții cu un serviciu impecabil.' },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tot ce ai nevoie — făcut pentru tine</h2>
          <p className="mt-3 text-slate-600">Creat pentru restaurante, clinici, saloane, service auto, stomatologie și multe altele.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
