
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function PastorSection() {
  const pastorImg = PlaceHolderImages.find(img => img.id === "lead-pastor")

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content - Order 1 (Top on mobile, Left on Desktop) */}
          <div className="w-full lg:w-1/2 order-1">
            <h4 className="text-accent font-bold tracking-widest uppercase mb-4">Our Founder</h4>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">Meet Our Presiding Bishop</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With a divine mandate to "Enforce the Truth," Our Founder has dedicated over two decades to ministering the word of God with power, clarity, and authority.
              </p>
              <p>
                His heart beats for the liberation of souls through the knowledge of scriptural truths. He is known for his prophetic insight and deep theological understanding, delivered in a way that is accessible to all.
              </p>
            </div>

            <div className="mt-10 mb-8">
              <div className="h-px w-20 bg-accent mb-4" />
              <p className="text-muted-foreground font-medium">His Grace: <span className="font-headline text-2xl font-bold text-primary"> RT. Rev Zerubabbel G.W.</span></p>
              <p className="text-muted-foreground font-medium">Founder, General Overseer and Presiding Bishop, TEBCI</p>
            </div>
            
            <Button asChild variant="outline" className="border-accent text-background bg-accent hover:bg-accent hover:text-white rounded-full px-8 h-12 font-bold group">
              <Link href="/about">
                Learn More <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Image Content - Order 2 (Bottom on mobile, Right on Desktop) */}
          <div className="w-full lg:w-1/2 order-2">
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-accent rounded-2xl z-0" />
              <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={pastorImg?.imageUrl || "https://picsum.photos/seed/pastor/600/800"}
                  alt="Lead Pastor"
                  fill
                  className="object-cover"
                  data-ai-hint="pastor portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
