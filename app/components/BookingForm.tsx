"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Staff, TimeSlot } from "../types";
import StaffCard from "./StaffCard";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  date: z.date(),
  time: z.string(),
  staffId: z.string(),
});

interface BookingFormProps {
  staff: Staff[];
  serviceId: string;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

export default function BookingForm({ staff, serviceId, onSubmit }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [timeSlots] = useState<TimeSlot[]>([
    { time: "09:00", available: true },
    { time: "10:00", available: true },
    { time: "11:00", available: false },
    { time: "12:00", available: true },
    { time: "13:00", available: true },
    { time: "14:00", available: true },
    { time: "15:00", available: true },
    { time: "16:00", available: true },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+1 234 567 8900" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Select Staff</FormLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {staff.map((member) => (
              <StaffCard
                key={member._id}
                staff={member}
                selected={form.watch("staffId") === member._id}
                onSelect={(staffId) => form.setValue("staffId", staffId)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <FormLabel>Select Date & Time</FormLabel>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              form.setValue("date", date as Date);
            }}
            className="rounded-md border"
            disabled={(date) => date < new Date() || date.getDay() === 0}
          />
        </div>

        {selectedDate && (
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot.time}
                type="button"
                variant={form.watch("time") === slot.time ? "default" : "outline"}
                disabled={!slot.available}
                onClick={() => form.setValue("time", slot.time)}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        )}

        <Button type="submit" className="w-full">
          Book Appointment
        </Button>
      </form>
    </Form>
  );
}