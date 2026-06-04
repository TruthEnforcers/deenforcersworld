import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Mandate } from "@/components/sections/Mandate"
import { MaintenanceCard } from "@/components/ui/MaintenanceCard"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <MaintenanceCard />
      {/* 
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">About Our Ministry</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover the heart, the history, and the heavenly mandate of Truth Enforcers Bible Church Intl.
          </p>
        </div>
      </section>
      <Mandate /> 
      */}
      <Footer />
    </main>
  )
}
