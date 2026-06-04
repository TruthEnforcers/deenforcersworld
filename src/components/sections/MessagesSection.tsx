
import Link from "next/link"
import { PlayCircle, Headphones, Video } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MessagesSection() {
  const messages = [
    {
      title: "The Power of Truth",
      series: "Foundations of Faith",
      type: "Audio & Video",
      date: "May 24, 2025"
    },
    {
      title: "Enforcing Your Victory",
      series: "Battlefield of the Mind",
      type: "Audio",
      date: "May 17, 2025"
    },
    {
      title: "Kingdom Authority",
      series: "Dominion Mandate",
      type: "Video",
      date: "May 10, 2025"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Listen to Messages</h2>
          <p className="text-muted-foreground">Catch up on our latest sermons or dive into our archive of life-transforming teachings.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {messages.map((msg, i) => (
            <Card key={i} className="group hover:bg-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <PlayCircle className="h-10 w-10 text-accent group-hover:text-white" />
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-primary-foreground/70 uppercase tracking-widest">{msg.date}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-white transition-colors">{msg.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-6">{msg.series}</p>
                <div className="flex items-center gap-4 text-sm font-medium text-accent group-hover:text-white">
                  <div className="flex items-center gap-1"><Headphones className="h-4 w-4" /> Audio</div>
                  <div className="flex items-center gap-1"><Video className="h-4 w-4" /> Video</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/sermons" 
            className="inline-flex items-center justify-center h-12 px-8 font-bold text-white bg-accent rounded-full hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Browse Full Archive
          </Link>
        </div>
      </div>
    </section>
  )
}
