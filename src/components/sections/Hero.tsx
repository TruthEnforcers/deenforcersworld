"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-church")

  return (
    <section className="relative h-[92vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Zerubabel"
          fill
          className="object-cover brightness-[0.35]"
          priority
          data-ai-hint="Zerubabel"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
      </div>

      <div className="container relative z-10 px-4 text-center text-white">
        <div className="inline-block px-5 py-1.5 mb-8 rounded-full bg-destructive/20 border border-destructive/30 backdrop-blur-md">
          <span className="text-destructive font-bold text-sm tracking-[0.25em] uppercase">THe Enforcers World</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
          Welcome to 
          <span className="text-accent italic font-medium">  Truth Enforcers Bible Church Intl.</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed">
          <br className="hidden md:block" />
          AKA: <span className="text-white font-bold">Messengers Of Truth.</span>  <br/> Here! We live and overcome by the truth.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-5xl mx-auto px-4">
          {/* Watch Live Stream - Full width on mobile, auto on desktop */}
          <Button asChild size="lg" className="bg-destructive text-white hover:bg-destructive/90 w-full lg:w-auto h-16 px-10 text-xl font-bold rounded-2xl shadow-2xl shadow-accent/40 border-none transition-transform hover:scale-105 active:scale-95">
            <Link href="/live">Watch Live Stream</Link>
          </Button>
          
          {/* Row 2 on mobile: About and Give in a strict 50/50 grid */}
          <div className="grid grid-cols-2 gap-4 w-full lg:flex lg:flex-row lg:w-auto">
            <Button asChild size="lg" variant="outline" className="w-full lg:w-auto bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary h-16 px-4 md:px-8 text-base md:text-lg font-bold rounded-2xl shadow-2xl transition-transform hover:scale-105 active:scale-95">
              <Link href="/about">Our Mission</Link>
            </Button>
            <Button asChild size="lg" className="w-full lg:w-auto bg-accent text-accent-foreground hover:bg-accent/90 h-16 px-4 md:px-8 text-base md:text-lg font-bold rounded-2xl shadow-2xl shadow-accent/40 border-none transition-transform hover:scale-105 active:scale-95">
              <Link href="/give">Give Online</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce-arrow text-accent hover:text-white transition-colors cursor-pointer">
          <ChevronDown className="h-12 w-12" />
        </div>
      </div>
    </section>
  )
}
