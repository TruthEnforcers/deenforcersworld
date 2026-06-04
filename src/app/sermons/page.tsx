import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MaintenanceCard } from "@/components/ui/MaintenanceCard"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { PlayCircle, Headphones, Video, Search, Filter } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

export default function SermonsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <MaintenanceCard />
      {/* 
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Sermon Archive</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Deepen your understanding of God's Word through our comprehensive collection of teachings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Search by topic, speaker, or scripture..." className="pl-10 h-12 bg-white" />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="h-12 flex items-center gap-2 bg-white">
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <Button className="h-12 bg-accent hover:bg-accent/90">Recent First</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button key={cat} className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {sermons.map((sermon, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">{sermon.category}</span>
                        <span className="text-xs text-muted-foreground">{sermon.date}</span>
                      </div>
                      <CardTitle className="font-headline text-xl">{sermon.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">Speaker: {sermon.speaker}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mt-4">
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <Headphones className="h-4 w-4" /> Audio
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <Video className="h-4 w-4" /> Video
                        </Button>
                        <Button size="icon" variant="ghost" className="ml-auto text-accent">
                          <PlayCircle className="h-6 w-6" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
