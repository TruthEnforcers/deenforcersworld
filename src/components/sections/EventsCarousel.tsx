
"use client"

import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Calendar, PlayCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const events = [
  {
    title: "Enforcers Conference 2025",
    date: "May 15 - 18, 2026",
    time: "6:00 PM Daily",
    image: PlaceHolderImages.find(i => i.id === "event-conference")?.imageUrl
  },
  {
    title: "Youth Truth Night",
    date: "Every Friday",
    time: "5:00 PM",
    image: PlaceHolderImages.find(i => i.id === "ministry-youth")?.imageUrl
  },
  {
    title: "Community Outreach",
    date: "Last Saturday",
    time: "9:00 AM",
    image: PlaceHolderImages.find(i => i.id === "ministry-outreach")?.imageUrl
  },
  {
    title: "Midweek Power Service",
    date: "Wednesdays",
    time: "6:00 PM",
    image: PlaceHolderImages.find(i => i.id === "hero-church")?.imageUrl
  }
]

export function EventsCarousel() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Carousel Column - First on Desktop (Left), Second on Mobile (Bottom) */}
          <div className="order-2 lg:order-1 relative group">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full relative"
            >
              <CarouselContent>
                {events.map((event, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden border-none shadow-2xl rounded-[2.5rem] bg-white group/item">
                      <div className="relative aspect-[5/3] overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover/item:scale-110"
                          data-ai-hint="church event flier"
                        />
                        {/* Date Badge - Prominent at the top */}
                        <div className="absolute top-6 left-6 bg-accent text-white px-5 py-2.5 rounded-2xl text-sm font-black shadow-2xl flex items-center gap-2 z-20 backdrop-blur-sm border border-white/20">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        {/* Simple Overlay for Depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Buttons inside the carousel */}
              <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12 rounded-full border-none bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary shadow-xl" />
              <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12 rounded-full border-none bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary shadow-xl" />
            </Carousel>
          </div>

          {/* Text Content Column - First on Mobile (Top), Second on Desktop (Right) */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h4 className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Upcoming Events</h4>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">
                Join our Services <br /> and Programs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Truth Enforcers Bible Church Intl is a truly spiritual and Christian church. We invite you to experience the undiluted truth and the power of God in our upcoming gatherings.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-destructive text-white hover:bg-destructive/90 h-14 px-8 text-lg font-bold rounded-2xl shadow-xl shadow-destructive/20 border-none transition-transform hover:scale-105 active:scale-95">
                <Link href="/live" className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" /> Live Stream
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white h-14 px-8 text-lg font-bold rounded-2xl shadow-xl transition-transform hover:scale-105 active:scale-95">
                <Link href="/programs" className="flex items-center gap-2">
                  View Events <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
