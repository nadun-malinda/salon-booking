import { Scissors } from "lucide-react";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    _id: "1",
    name: "Haircut & Styling",
    description: "Professional haircut and styling service tailored to your preferences",
    duration: 60,
    price: 50,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
  },
  {
    _id: "2",
    name: "Color Treatment",
    description: "Full color service including consultation and styling",
    duration: 120,
    price: 100,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000",
  },
  {
    _id: "3",
    name: "Spa Treatment",
    description: "Relaxing spa treatment including facial and massage",
    duration: 90,
    price: 80,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Scissors className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Elegance Salon</h1>
        <p className="text-xl text-muted-foreground">
          Book your next appointment with our expert stylists
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}