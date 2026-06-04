
import { Clock, MapPin, Phone } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function ServiceTimesSection() {
  const serviceBg = PlaceHolderImages.find(img => img.id === "service-bg")

  return (
    <section className="relative py-24 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={serviceBg?.imageUrl} 
          alt="Service Background" 
          className="w-full h-full object-cover brightness-[0.3]"
          data-ai-hint="worship background"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-12">See You In Church</h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="h-16 w-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-headline font-bold">Service Times</h3>
              <div className="space-y-2 opacity-90">
                <p><span className="font-bold">Sunday Celebration:</span> 9:00 AM</p>
                <p><span className="font-bold">Wednesday Power:</span> 6:00 PM</p>
                {/* <p><span className="font-bold">Friday Youth:</span> 5:00 PM</p> */}
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-16 w-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-headline font-bold">Our Location</h3>
              <p className="opacity-90 leading-relaxed">
                IPOINT,<br />
               Choba<br />
                First Mechanic
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-16 w-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-headline font-bold">Contact Us</h3>
              <div className="space-y-2 opacity-90">
                <p>+2348058339408 </p>
                <p>bishop@deenforcersworld.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
