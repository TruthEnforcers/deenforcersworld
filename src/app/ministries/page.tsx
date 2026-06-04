import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const allMinistries = [
  {
    id: "CED",
    name: "Christian Education Ministry",
    description: [ "The ministry which internally works as Spiritual Development Studies (SDS) where member's Potentails, Life purposed and Gifts are identified, developed and equiped for the purpose of excellence in ministry."],
    image: PlaceHolderImages.find(i => i.id === "ministry-worship")?.imageUrl,
  },
  {
    id: "PEM",
    name: "Prayer And Evangelical Ministry",
    description: [ "The ministry which prepares every member to be on the go and to be champion intercessors that are ready to manage whatever life would present through the word of God and Prayers."],
    image: PlaceHolderImages.find(i => i.id === "ministry-worship")?.imageUrl,
  },
  {
    id: "marriage",
    name: "Marriage And Family Building Ministry",
    description: [ "The ministry is devoted to building godly homes where children are raised in the fear of God as future ambassadors of Christ as long as Christ tarries, Annually blesses the world around us, every February."],
    image: PlaceHolderImages.find(i => i.id === "ministry-worship")?.imageUrl,
  },
  {
    id: "men",
    name: "Men Ministry",
    description: [
      "This is a group of all the married men and matured men in the church. Also opened to all matured single brothers who are willing to serve God among the men."
    ],
    image: PlaceHolderImages.find(i => i.id === "ministry-youth")?.imageUrl,
  },
  {
    id: "women",
    name: "Women Ministry",
    description: [
      "This is a group of married female sisters or those who are matured singles, who may have been divorced, separated, widowed or are still unmarried due to one challenge or the other."
    ],
    image: PlaceHolderImages.find(i => i.id === "ministry-youth")?.imageUrl,
  },
  {
    id: "youth",
    name: "Youth Ministry",
    description: [
      "A ministry for all matured singles in the church irrespective of their gender variations, This ministry provides a room for brethren to mingle and freely serve the Lord as youths, This is actually the period of their life when their strength is maximized for the service of the Lord.."
    ],
    image: PlaceHolderImages.find(i => i.id === "ministry-youth")?.imageUrl,
  },
  {
    id: "children",
    name: "Children Church Ministry",
    description: [
      "This ministry is grouped into three sections:",
      "Jesus Stars: From the ages of ten to sixteen.",
      "Candle Roll: From the ages of four to ten.",
      "Nursery Dept: Those below the ages of four"
    ],
    image: PlaceHolderImages.find(i => i.id === "ministry-kids")?.imageUrl || "https://picsum.photos/seed/kids/800/600",
  }
  // {
  //   id: "outreach",
  //   name: "Missions & Outreach",
  //   description: [
  //     "The hands and feet of Jesus reaching out to the broken and the lost.",
  //     "Regular community service, hospital visitations, and prison ministries.",
  //     "Organizes large-scale evangelism crusades and rural missions.",
  //     "Enforcing the truth by demonstrating God's love through practical giving and care."
  //   ],
  //   image: PlaceHolderImages.find(i => i.id === "ministry-outreach")?.imageUrl,
  // }
]

export default function MinistriesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/20 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Heart className="h-64 w-64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">Our Ministries</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed italic">
            "Our ministries that effectively achieve our visions and mission."
          </p>
        </div>
      </section>

      {/* Ministries List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {allMinistries.map((min, i) => (
              <div
                key={min.id}
                id={min.id}
                className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} scroll-mt-32`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-accent/10 group">
                    <Image
                      src={min.image || "https://picsum.photos/seed/default/800/600"}
                      alt={min.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                  {/* <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
                    Ministry Department
                  </div> */}
                  <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">{min.name}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <ul className="space-y-4">
                      {min.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="h-2 w-2 rounded-full bg-accent mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <div className="h-1.5 w-20 bg-accent rounded-full mb-6" />
                    <p className="font-bold text-primary italic uppercase tracking-widest text-sm">
                      Enforcing the Truth together
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Call to Action */}
      <section className="py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">Ready to Serve?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            There is a place for your gifts and talents in De Enforcers World. Join a ministry today and start fulfilling your divine potential.
          </p>
          <a
            href="/about#contact"
            className="inline-flex items-center justify-center h-14 px-10 bg-accent text-white font-bold rounded-2xl shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
          >
            Get Involved Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
