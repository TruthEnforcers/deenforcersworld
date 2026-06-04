import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MaintenanceCard } from "@/components/ui/MaintenanceCard"
// import { MapPin, Phone, Globe, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function SatelliteCentersPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 overflow-hidden">
      <Navbar />
      <MaintenanceCard />
      {/* 
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Satellite Centers</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Find a Truth Enforcers assembly near you and join the family of victors.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centers.map((center, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-xl transition-all group border-primary/10">
                <div className="h-14 w-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">{center.name}</h3>
                <div className="space-y-4 mb-8 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{center.location}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-accent shrink-0" />
                    <span>Pastor: {center.pastor}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <span>{center.contact}</span>
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">Main Service: {center.schedule}</p>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white rounded-xl h-12">
                    Get Directions <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Want to start a center?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              If you feel led to bring the mandate of truth to your city, we'd love to hear from you.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white px-10 h-14 rounded-2xl text-lg font-bold shadow-xl shadow-accent/20">
              Contact Missions Department
            </Button>
          </div>
        </div>
      </section>
      */}
      <Footer />
    </main>
  )
}
