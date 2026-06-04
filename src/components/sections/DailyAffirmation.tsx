"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"

export function DailyAffirmation() {
  const [dateStr, setDateStr] = useState("")

  useEffect(() => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }
    setDateStr(now.toLocaleDateString('en-US', options))
  }, [])

  return (
    <section className="py-16  border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 bg-accent/5 p-8 rounded-3xl border border-accent/10 flex flex-col justify-center">
          <h3 className="text-sm font-bold tracking-[0.3em] text- uppercase mb-4">Daily Affirmation</h3>
          <div className="flex items-center justify-center gap-2 text- font-bold">
            <Calendar className="h-5 w-5 text-accent" />
            <span className="text-lg">{dateStr || "Loading today's date..."}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex flex-col justify-center text-center md:text-left relative overflow-hidden group hover:bg-primary/10 transition-colors">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform">
              {/* <Calendar className="h-24 w-24" /> */}
            </div>
            <h4 className="text-accent font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Our DOXOLOGY</h4>
            <p className="text-2xl font-headline font-bold text-primary leading-tight relative z-10">
              "We People of Truth Ministries, we believe, teach and practice Jesus Christ, we shall live and overcome by the truth. With God of truth, there is no impossibility in our future, now and for ever, Amen."
            </p>
          </div>
          
          <div className="bg-accent/5 p-8 rounded-3xl border border-accent/10 flex flex-col justify-center text-center md:text-left relative overflow-hidden group hover:bg-accent/10 transition-colors">
            <h4 className="text-primary font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Scriptural Foundation</h4>
            <p className="text-xl font-headline italic text-foreground leading-relaxed relative z-10">
              "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith."
            </p>
            <span className="mt-4 block font-bold text-accent">— 1 John 5:4 (KJV)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
