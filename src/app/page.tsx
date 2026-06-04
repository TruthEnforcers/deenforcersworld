
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { DailyAffirmation } from "@/components/sections/DailyAffirmation"
import { Mandate } from "@/components/sections/Mandate"
import { Highlights } from "@/components/sections/Highlights"
import { EventsCarousel } from "@/components/sections/EventsCarousel"
import { PastorSection } from "@/components/sections/PastorSection"
import { MinistriesSection } from "@/components/sections/MinistriesSection"
import { TestimoniesSection } from "@/components/sections/TestimoniesSection"
import { GiveHomeSection } from "@/components/sections/GiveHomeSection"
import { ServiceTimesSection } from "@/components/sections/ServiceTimesSection"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <DailyAffirmation />
      <GiveHomeSection />
      <Mandate />
      <Highlights />
      <EventsCarousel />
      <PastorSection />
      <MinistriesSection />
      <TestimoniesSection />
      <ServiceTimesSection />
      <Footer />
      <Toaster />
    </main>
  )
}
