"use client";

import { useParams } from "next/navigation";
import BookingForm from "@/app/components/BookingForm";

const staff = [
  {
    _id: "1",
    name: "Sarah Johnson",
    role: "Senior Stylist",
    bio: "10+ years of experience in cutting-edge hair styling",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
    services: ["1", "2"],
  },
  {
    _id: "2",
    name: "Michael Chen",
    role: "Color Specialist",
    bio: "Expert in modern coloring techniques and trends",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    services: ["2", "3"],
  },
];

export default function BookingPage() {
  const params = useParams();
  const serviceId = params.serviceId as string;

  const handleSubmit = async (data: any) => {
    console.log("Booking data:", data);
    // This would normally send the data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book Your Appointment</h1>
      <div className="max-w-2xl mx-auto">
        <BookingForm
          staff={staff.filter((s) => s.services.includes(serviceId))}
          serviceId={serviceId}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
