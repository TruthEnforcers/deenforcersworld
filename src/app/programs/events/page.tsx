import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MaintenanceCard } from "@/components/ui/MaintenanceCard";
// import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight } from "lucide-react"
// import { Calendar } from "@/components/ui/calendar"
// import { Button } from "@/components/ui/button"

export default function EventsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <MaintenanceCard />
      {/* 
      <section className="bg-accent py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Events Calendar</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay updated with our upcoming programs, meetings, and community gatherings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-md border sticky top-24">
                <h3 className="font-headline text-2xl font-bold mb-6 text-primary">Select Date</h3>
                <Calendar className="w-full border-none" />
                <div className="mt-8 p-4 bg-secondary/30 rounded-xl">
                  <h4 className="font-bold mb-2">Service Times</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex justify-between"><span>Sundays</span> <span className="font-medium">9:00 AM</span></li>
                    <li className="flex justify-between"><span>Wednesdays</span> <span className="font-medium">6:00 PM</span></li>
                    <li className="flex justify-between"><span>Fridays</span> <span className="font-medium">5:00 PM</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-headline font-bold text-primary mb-8">Featured Events</h2>
              
              {featuredEvents.map((event, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow">
                  <div className="md:w-1/4 flex flex-col items-center justify-center p-6 bg-accent/5 rounded-2xl border border-accent/10">
                    <CalendarIcon className="h-10 w-10 text-accent mb-2" />
                    <span className="text-xl font-bold text-accent text-center">{event.date.split(',')[0]}</span>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-2xl font-headline font-bold">{event.title}</h3>
                    <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {event.time}</div>
                      <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    <Button variant="outline" className="group">
                      Event Details <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="pt-12">
                <h2 className="text-2xl font-headline font-bold text-primary mb-6">Upcoming This Month</h2>
                <div className="space-y-4">
                  {[1,2,3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl border hover:border-accent transition-colors">
                      <div>
                        <p className="text-xs font-bold text-accent uppercase tracking-widest">Community</p>
                        <h4 className="text-lg font-bold">Monthly Outreach Gathering</h4>
                      </div>
                      <span className="text-muted-foreground text-sm font-medium">Sat, June 28</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      <Footer />
    </main>
  )
}
