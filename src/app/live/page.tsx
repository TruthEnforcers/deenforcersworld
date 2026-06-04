import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MaintenanceCard } from "@/components/ui/MaintenanceCard"
import { PlayCircle, Users, Share2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LiveStreamPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 overflow-hidden">
      <Navbar />
      {/* <MaintenanceCard /> */}
      
      <section className="bg-background py-12 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                  </span>
                  <span className="text-destructive font-bold uppercase tracking-widest text-sm">Live Now</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Sunday Celebration Service</h1>
                <p className="text-muted-foreground mt-1">Join us as we enforce the truth through worship and the word.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="rounded-full gap-2">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
                <Button variant="outline" size="sm" className="rounded-full gap-2">
                  <Users className="h-4 w-4" /> 1.2k Watching
                </Button>
              </div>
            </div>

            <div className="grid ">
              <div className="lg:col-span-3">
                <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10 group">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors cursor-pointer">
                    <div className="bg-destructive/90 text-white p-6 rounded-full shadow-2xl shadow-destructive/40 transform transition-transform group-hover:scale-110">
                      <PlayCircle className="h-16 w-16" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold border border-white/10">
                      720p HD • TEBCI Media
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-8 bg-accent/40 rounded-3xl border shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-primary">Sermon Notes</h3>
                  <p className="text-white leading-relaxed">
                    {/* Today's message focuses on the power of persistence in faith. We are exploring the mandate of the truth and how it sets us free from every limitation.  */} No Live Ongoing
                    <br /><br />
                    {/* Scripture references: John 8:32, Hebrews 11:1, 1 John 5:4. */} Watch On YouTube Previous Streams
                  </p>
                </div>
              </div>

              {/* <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-3xl border shadow-sm p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <h3 className="font-bold">Live Chat</h3>
                  </div>
                  <div className="flex-grow space-y-4 overflow-y-auto max-h-[400px] mb-6 pr-2 scrollbar-hide">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="text-sm">
                        <span className="font-bold text-primary">Member {i}:</span>
                        <span className="ml-2 text-muted-foreground">Amen! What a powerful word!</span>
                      </div>
                    ))}
                    <p className="text-xs italic text-muted-foreground text-center py-4">Sign in to join the conversation</p>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">Say Something</Button>
                </div>

                <div className="bg-primary/5 rounded-3xl border border-primary/10 p-6 text-center">
                  <h4 className="font-bold text-primary mb-2">Giving Online</h4>
                  <p className="text-xs text-muted-foreground mb-4">Support the ministry during the service.</p>
                  <Button size="sm" className="w-full bg-primary text-white" asChild>
                    <a href="/give">Give Now</a>
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
