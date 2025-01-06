"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "../types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const router = useRouter();

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">${service.price}</p>
          <p className="text-muted-foreground">{service.duration} min</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => router.push(`/book/${service._id}`)}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}