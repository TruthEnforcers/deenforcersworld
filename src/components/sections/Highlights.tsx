import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Highlights() {
  const cards = [
    {
      title: "About Us",
      description: "Learn about our history, beliefs, and our mission to enforce the truth.",
      link: "/about",
      action: "Learn More",
      image: PlaceHolderImages.find(img => img.id === "hero-church")?.imageUrl || "https://picsum.photos/seed/1/800/600",
      imageHint: "church interior"
    },
    {
      title: "Upcoming Programs",
      description: "Join us for our upcoming conferences, services, and special events.",
      link: "/programs",
      action: "View Calendar",
      image: PlaceHolderImages.find(img => img.id === "event-conference")?.imageUrl || "https://picsum.photos/seed/2/800/600",
      imageHint: "church conference"
    },
    {
      title: "Give Offerings",
      description: "Support the kingdom work and the ministry through your faithful giving.",
      link: "/give",
      action: "Give Now",
      image: PlaceHolderImages.find(img => img.id === "service-bg")?.imageUrl || "https://picsum.photos/seed/3/800/600",
      imageHint: "generous giving"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">DE Enforcers World</h2>
            <p className="text-muted-foreground mt-2">Truth Enforcers Bible Church Intl is a truly spiritual and christain church.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link key={card.title} href={card.link} className="block group h-full">
              <Card className="relative h-[400px] overflow-hidden border-none rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={card.imageHint}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent z-10" />

                {/* Content */}
                <CardContent className="relative z-20 h-full flex flex-col justify-end p-8 text-primary/90">
                  <h3 className="font-headline text-3xl font-bold mb-3 drop-shadow-md">{card.title}</h3>
                  <p className="text-white/80 text-lg mb-8 leading-relaxed line-clamp-3 font-medium">
                    {card.description}
                  </p>
                  <div className="">
                    <Badge className="bg-accent text-accent-foreground hover:bg-accent px-6 py-2 rounded-xl text-base font-bold shadow-xl animate-bounce-soft">
                      {card.action}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
