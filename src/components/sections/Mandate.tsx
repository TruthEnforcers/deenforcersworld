import { CheckCircle2, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Mandate() {
  const pillars = [
    "Call", "Faith", "Truth", "Love", 
    "Sacrifice", "Obedience", "Grace", "Holiness", 
    "Prayers", "Power", "Prosperity", "Peace"
  ]

  const coreValues = [
    "We believe, teach and practice Jesus Christ.",
    "We live and overcome by the truth.",
    "With the God of truth, There is no impossibility before us."
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Section - First on mobile, Left on Desktop */}
          <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/10">
            <img 
              src="/img1.jpg" 
              alt="Church Community" 
              className="object-cover w-full h-full"
              data-ai-hint="church gathering"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-8 tracking-tight">Our Mandate & Vision</h2>
              
              <div className="space-y-8">
                {/* Mission */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                    <span className="h-px w-8 bg-accent"></span> Our Mission Statement
                  </h3>
                  <p className="text-2xl font-headline italic text-foreground leading-snug">
                    "Called out to meet the needs of our world within our time."
                  </p>
                </div>

                {/* Vision */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                    <span className="h-px w-8 bg-accent"></span> Our Vision Statement
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Save the lost at all cost, Helping believers reach their best potentials in life irrespective of who and where you are.
                  </p>
                </div>

                {/* Core Values */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-primary">Our Core Value</h3>
                  <ul className="space-y-3">
                    {coreValues.map((value, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 transition-transform group-hover:scale-110" />
                        <span className="text-muted-foreground font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillars of Faith */}
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="h-24 w-24 text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">Pillars of Faith</h3>
              <p className="text-sm text-muted-foreground mb-6 font-medium">This Commission is shaped by 12 Pillars of Faith</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pillars.map((pillar) => (
                  <Badge 
                    key={pillar} 
                    variant="outline" 
                    className="flex justify-center py-2.5 rounded-xl border-accent/30 bg-accent text-foreground font-bold shadow-sm hover:bg-accent hover:text-white transition-all cursor-default"
                  >
                    {pillar}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
