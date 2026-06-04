
"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function TestimoniesSection() {
  const testimonies = [
    {
      name: "Sarah Johnson",
      role: "Member since 2022",
      text: "TEBCI changed my life. I used to struggle with fear, but the teachings on enforcing the truth gave me a new boldness. I am now a living witness of God's power.",
    },
    {
      name: "Emmanuel Ade",
      role: "Youth Leader",
      text: "The fellowship here is unmatched. It's truly a family where truth is prioritized over everything else. My spiritual growth has been phenomenal since I joined.",
    },
    {
      name: "Linda Peters",
      role: "Worship Team",
      text: "I found my purpose here. The mandate is real, and you can feel the presence of God in every service. Enforcing the truth is now my daily lifestyle.",
    }
  ]

  const serviceBg = PlaceHolderImages.find(img => img.id === "service-bg")

  return (
    <>
      <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden mb-12">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={serviceBg?.imageUrl || "https://picsum.photos/seed/test/1200/800"}
            alt="Testimonies Background"
            fill
            className="object-cover brightness-[0.25]"
            data-ai-hint="church worship background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container relative z-10 px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-4xl mx-auto group"
          >
            <CarouselContent>
              {testimonies.map((test, i) => (
                <CarouselItem key={i}>
                  <div className="flex flex-col items-center text-center space-y-8 py-10">
                    <Quote className="h-12 w-12 text-accent opacity-50" />
                    
                    <p className="text-2xl md:text-4xl lg:text-5xl font-headline font-medium text-white leading-tight italic max-w-3xl">
                      "{test.text}"
                    </p>
                    
                    <div className="space-y-2 pt-4">
                      <h3 className="text-xl md:text-2xl font-bold text-accent uppercase tracking-[0.3em]">
                        {test.name}
                      </h3>
                      <p className="text-sm font-bold text-white/60 uppercase tracking-widest">
                        {test.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons Inside the Carousel */}
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 -translate-x-12 lg:-translate-x-24 opacity-0 group-hover:opacity-100 transition-opacity h-14 w-14 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-primary border-none shadow-2xl" />
              <CarouselNext className="right-0 translate-x-12 lg:translate-x-24 opacity-0 group-hover:opacity-100 transition-opacity h-14 w-14 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-primary border-none shadow-2xl" />
            </div>
          </Carousel>
        </div>

        {/* Brand line at the bottom of the section */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive to-transparent opacity-50" />
      </section>

      {/* Decorative Horizontal Separator below the section - Updated Width */}
      <div className="w-full mb-24 px-4 md:px-0">
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-primary/90 to-transparent" />
      </div>
    </>
  )
}
