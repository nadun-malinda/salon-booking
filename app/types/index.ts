export interface Service {
  _id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  image: string;
}

export interface Staff {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  services: string[];
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Appointment {
  _id: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}