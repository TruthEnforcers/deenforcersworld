"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, Clock, MapPin, ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"

// Major Programs Data
export const majorPrograms = [
  {
    id: "prog-1",
    title: "Marriage & Family Seminar",
    date: new Date("2025-02-14"),
    dateStr: "Feb 14, 2025",
    image: "/img1.jpg",
  },
  {
    id: "prog-2",
    title: "Youth Empowerment Summit",
    date: new Date("2025-04-10"),
    dateStr: "April 10, 2025",
    image: PlaceHolderImages.find(i => i.id === "ministry-youth")?.imageUrl || "https://picsum.photos/seed/youthsummit/800/600",
  },
  {
    id: "prog-3",
    title: "Enforcers Conference 2025",
    date: new Date("2026-05-15"),
    dateStr: "May 15 - 18, 2026",
    image: PlaceHolderImages.find(i => i.id === "event-conference")?.imageUrl || "https://picsum.photos/seed/conf/800/600",
  },
  {
    id: "prog-4",
    title: "Kingdom Advancement Rally",
    date: new Date("2026-08-22"),
    dateStr: "August 22, 2026",
    image: PlaceHolderImages.find(i => i.id === "ministry-outreach")?.imageUrl || "https://picsum.photos/seed/rally/800/600",
  },
  {
    id: "prog-5",
    title: "Annual Truth Convention",
    date: new Date("2026-12-10"),
    dateStr: "Dec 10 - 15, 2026",
    image: PlaceHolderImages.find(i => i.id === "hero-church")?.imageUrl || "https://picsum.photos/seed/convention/800/600",
  }
]

// Weekly Service Data
const weeklyEvents = [
  {
    day: "Sundays",
    title: "Sunday Celebration",
    time: "9:00 AM",
    image: PlaceHolderImages.find(i => i.id === "service-bg")?.imageUrl || "https://picsum.photos/seed/sunday/800/600",
  },
  {
    day: "Wednesdays",
    title: "Mid-week Power",
    time: "6:00 PM",
    image: PlaceHolderImages.find(i => i.id === "ministry-worship")?.imageUrl || "https://picsum.photos/seed/wednesday/800/600",
  },
  {
    day: "Fridays",
    title: "Youth Truth Night",
    time: "5:00 PM",
    image: PlaceHolderImages.find(i => i.id === "ministry-youth")?.imageUrl || "https://picsum.photos/seed/friday/800/600",
  }
]

export default function ProgramsPage() {
  const [startIndex, setStartIndex] = React.useState(0)
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    const now = new Date()
    const idx = majorPrograms.findIndex(p => p.date >= now)
    setStartIndex(idx !== -1 ? idx : 0)
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return null

  return (
    <main className="min-h-screen flex flex-col pt-20 bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/20 py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Heart className="h-64 w-64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-headline font-bold mb-4 md:mb-6">Programs</h1>
          <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed italic">
            "Stay aligned with the timing of the spirit. Follow our upcoming programs and weekly rhythms in De Enforcers World."
          </p>
        </div>
      </section>

      {/* Section 1: Major Programs - Carousel Left, Text Right on Desktop */}
      <section className="py-8 lg:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Carousel Column - Top on Mobile, Left on Desktop */}
            <div className="relative group/carousel order-1">
              <Carousel
                opts={{
                  align: "center",
                  startIndex: startIndex,
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {majorPrograms.map((prog) => {
                    const isPast = prog.date < new Date()
                    return (
                      <CarouselItem key={prog.id} className="basis-full p-2">
                        <Card className="relative overflow-hidden border-none rounded-[1.5rem] md:rounded-[2rem] bg-card shadow-2xl group h-full transition-all duration-500 hover:scale-[1.02]">
                          <div className="relative aspect-video md:aspect-[4/3] w-full max-h-[180px] md:max-h-none">
                            <Image
                              src={prog.image}
                              alt={prog.title}
                              fill
                              className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                            <div className="absolute top-3 left-3 md:top-8 md:left-8 flex flex-wrap gap-2 md:gap-3 z-20">
                              <Badge className={isPast ? "bg-white/80 backdrop-blur-md text-accent border-white/20" : "bg-accent text-white shadow-xl border-none"}>
                                {isPast ? "Archive" : "Upcoming"}
                              </Badge>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 z-20">
                              <h3 className="text-sm md:text-4xl font-headline font-bold text-white mb-1 group-hover:text-accent transition-colors drop-shadow-2xl line-clamp-2">
                                {prog.title}
                              </h3>
                              <div className="h-0.5 md:h-1.5 w-8 md:w-24 bg-accent rounded-full mt-1 md:mt-2" />
                            </div>
                          </div>
                        </Card>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-4 md:left-8 z-30 h-8 w-8 md:h-12 md:w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary shadow-2xl transition-all" />
                <CarouselNext className="right-4 md:right-8 z-30 h-8 w-8 md:h-12 md:w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary shadow-2xl transition-all" />
              </Carousel>
            </div>

            {/* Text Content Column - Bottom on Mobile, Right on Desktop */}
            <div className="space-y-4 md:space-y-8 text-center lg:text-left order-2">
              <div className="max-w-xl mx-auto lg:mx-0">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-2 md:mb-6">Major Programs</h2>
                <p className="text-xs md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-10">
                  Join us for our landmark conferences, seminars, and summits designed to sharpen your faith and empower your divine journey. Scroll through our upcoming kingdom milestones.
                </p>
                <div className="inline-block p-1 bg-primary/5 rounded-2xl border border-primary/10">
                  <Button asChild variant="ghost" className="text-primary font-bold hover:bg-background hover:text-primary rounded-xl px-6 md:px-10 h-10 md:h-14 group">
                    <Link href="/programs/archive" className="flex items-center gap-3 text-xs md:text-lg">
                      Browse Full Archive <ArrowRight className="h-4 w-4 md:h-5 md:w-5 animate-bounce-x" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Events - Text Left, Carousel Right on Desktop */}
      <section className="py-8 lg:py-24 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Carousel Column - Top on Mobile, Right on Desktop */}
            <div className="relative group/weekly order-1 lg:order-2">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {weeklyEvents.map((event, i) => (
                    <CarouselItem key={i} className="basis-full p-2">
                      <div className="relative aspect-video md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/5 group hover:-translate-y-2 transition-all duration-500 bg-black">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                        <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-accent text-white px-3 py-1 md:px-5 md:py-1.5 rounded-full text-[8px] md:text-xs font-black shadow-xl uppercase tracking-[0.2em] z-20">
                          {event.day}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-8 md:right-8 z-20">
                          <div className="flex items-center gap-2 text-accent mb-1 md:mb-3">
                            <Clock className="h-3 w-3 md:h-5 md:w-5" />
                            <span className="font-black text-[8px] md:text-sm tracking-widest">{event.time}</span>
                          </div>
                          <h4 className="text-sm md:text-3xl font-headline font-bold text-white mb-1 md:mb-2 leading-tight group-hover:text-accent transition-colors">
                            {event.title}
                          </h4>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 md:left-8 h-8 w-8 md:h-12 md:w-12 bg-white/10 backdrop-blur-md text-white border-none shadow-xl hover:bg-white hover:text-primary transition-all z-30" />
                <CarouselNext className="right-4 md:right-8 h-8 w-8 md:h-12 md:w-12 bg-white/10 backdrop-blur-md text-white border-none shadow-xl hover:bg-white hover:text-primary transition-all z-30" />
              </Carousel>
            </div>

            {/* Text Content Column - Bottom on Mobile, Left on Desktop */}
            <div className="space-y-4 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="max-w-xl mx-auto lg:mx-0">
                <h2 className="text-2xl md:text-5xl font-headline font-bold text-primary mb-2 md:mb-6">Our Events</h2>
                <p className="text-xs md:text-xl text-muted-foreground leading-relaxed mb-2">
                  Join our continuous cycle of growth, prayer, and celebration in De Enforcers World. We invite you to experience the undiluted truth and the power of God in our weekly gatherings.
                </p>
                <div className="inline-block p-1 bg-primary/5 rounded-2xl border border-primary/10">
                  <Button asChild variant="ghost" className="text-primary font-bold hover:text-primary hover:bg-background rounded-xl px-6 md:px-10 h-10 md:h-14 group">
                    <Link href="/programs/events" className="flex items-center gap-3 text-xs md:text-lg">
                      Browse Calendar <ArrowRight className="h-4 w-4 md:h-5 md:w-5 animate-bounce-x" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      {/* <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-destructive/5 p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-destructive/10 relative z-10">
            <h3 className="text-2xl md:text-5xl font-headline font-bold text-primary mb-6 md:mb-8">
              "Save the lost at all cost, helping believers reach their best potentials."
            </h3>
            <p className="text-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-sm mb-8 md:mb-12">
              — The Mandate of Truth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Button asChild size="lg" className="bg-destructive text-white hover:bg-destructive/90 rounded-2xl h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-bold shadow-2xl shadow-destructive/20 border-none w-full sm:w-auto">
                <Link href="/live" className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 md:h-6 md:w-6" /> Watch Live Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 rounded-2xl h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-bold w-full sm:w-auto transition-all">
                <Link href="/satellite-centers">Find a Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
