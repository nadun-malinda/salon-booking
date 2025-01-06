"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Staff } from "../types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StaffCardProps {
  staff: Staff;
  selected?: boolean;
  onSelect?: (staffId: string) => void;
}

export default function StaffCard({ staff, selected, onSelect }: StaffCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all ${
        selected ? "border-primary" : ""
      }`}
      onClick={() => onSelect?.(staff._id)}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={staff.image} alt={staff.name} />
          <AvatarFallback>{staff.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{staff.name}</CardTitle>
          <CardDescription>{staff.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{staff.bio}</p>
      </CardContent>
    </Card>
  );
}