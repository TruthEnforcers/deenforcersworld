
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight } from "lucide-react"

export function MinistriesSection() {
  const ministries = [
    {
      id: "CED",
      name: "Christain Education Ministry",
      image: PlaceHolderImages.find(i => i.id === "ministry-worship")?.imageUrl || "https://picsum.photos/seed/worship/800/600",
      imageHint: "Christain Education Ministry"
    },
    {
      id: "youth",
      name: "Youth Ministry",
      image: PlaceHolderImages.find(i => i.id === "ministry-youth")?.imageUrl || "https://picsum.photos/seed/youth/800/600",
      imageHint: "youth group"
    }, 
    {
      id: "children",
      name: "Children Church Ministry",
      image: PlaceHolderImages.find(i => i.id === "ministry-outreach")?.imageUrl || "https://picsum.photos/seed/outreach/800/600",
      imageHint: "community service"
    }
  ]

  return (
    <section id="ministries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">Our Ministries</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find your place in our family. We have various ministries designed to help you grow and serve in the mandate of truth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ministries.map((min) => (
            <Link key={min.id} href={`/ministries#${min.id}`} className="group block">
              <Card className="relative h-[500px] overflow-hidden rounded-[2.5rem] border-none shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-accent/20">
                {/* Background Image */}
                <Image
                  src={min.image}
                  alt={min.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.5]"
                  data-ai-hint={min.imageHint}
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-headline font-bold text-white drop-shadow-lg leading-tight">
                      {min.name}
                    </h3>
                    <div className="h-1 w-12 bg-accent mt-4 rounded-full transition-all duration-300 group-hover:w-24" />
                  </div>

                  <div className="flex justify-start">
                    <Badge className="bg-accent text-accent-foreground px-6 py-2.5 rounded-xl text-sm font-black shadow-xl animate-bounce-soft border-none">
                      LEARN MORE
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg font-bold rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95">
            <Link href="/ministries" className="flex items-center gap-2">
              Browse More Ministries <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
