// src/constants.ts

// Type Definitions
export type Location = 'Earth' | 'Mars' | 'Moon' | 'ISS' | 'Space Hotel';

export interface VehicleType {
  name: string;
  features: string[];
  capacity: number;
  pricePerPerson: number;
  image: string;
  description: string;
  estimatedTime: string;
}

export interface DistanceMap {
  [key: string]: number;
}

export interface WeatherCondition {
  location: Location;
  condition: string;
  temperature: number;
  radiation: string;
  safety: 'Good' | 'Moderate' | 'Caution' | 'Warning';
}

export interface BookingDetails {
  id?: string;  // Make id optional
  from: Location;
  to: Location;
  journeyDate: string;
  vehicle: string;
  passengers: number;
  totalPrice: number;
  status?: 'upcoming' | 'completed' | 'cancelled';  // Make status optional
  bookingDate?: string;  // Make bookingDate optional
  aiRecommendations?: string[];
}

export interface VehicleEfficiency {
  eco_rating: number;
  capacity_score: number;
  comfort_score: number;
}

// Constants
export const DISTANCES: DistanceMap = {
  'Earth-Mars': 225000000,
  'Earth-Moon': 384400,
  'Earth-ISS': 408,
  'Earth-Space Hotel': 1000,
  'Mars-Moon': 224615600,
  'Mars-ISS': 224999592,
  'Mars-Space Hotel': 224999000,
  'Moon-ISS': 383992,
  'Moon-Space Hotel': 383400,
  'ISS-Space Hotel': 592,
  // Reverse routes
  'Mars-Earth': 225000000,
  'Moon-Earth': 384400,
  'ISS-Earth': 408,
  'Space Hotel-Earth': 1000,
  'Moon-Mars': 224615600,
  'ISS-Mars': 224999592,
  'Space Hotel-Mars': 224999000,
  'ISS-Moon': 383992,
  'Space Hotel-Moon': 383400,
  'Space Hotel-ISS': 592,
};

export const VEHICLES: VehicleType[] = [
  {
    name: 'Space Shuttle',
    features: [
      'Large cargo capacity',
      'Advanced life support systems',
      'Emergency escape pods',
      'Artificial gravity modules',
      'Medical bay',
      'Research facilities'
    ],
    capacity: 7,
    pricePerPerson: 2000000,
    image: '/vehicles/spaceshuttle.jpg',
    description: 'A reliable and spacious vessel for longer journeys, equipped with all necessary amenities for a comfortable space travel experience.',
    estimatedTime: 'Standard transit time'
  },
  {
    name: 'Space Taxi',
    features: [
      'Compact design',
      'Quick deployment',
      'Efficient fuel consumption',
      'Advanced navigation system',
      'Comfortable seating',
      'Panoramic windows'
    ],
    capacity: 4,
    pricePerPerson: 1000000,
    image: '/vehicles/spacetaxi.jpeg',
    description: 'Perfect for shorter trips and small groups, offering a balance of comfort and efficiency.',
    estimatedTime: 'Fast transit time'
  },
  {
    name: 'Space Pod',
    features: [
      'Ultra-efficient propulsion',
      'Personal space suit dock',
      'Emergency beacon',
      'Basic life support',
      'Automated flight systems',
      'Compact storage'
    ],
    capacity: 2,
    pricePerPerson: 500000,
    image: '/vehicles/spacepod.jpeg',
    description: 'An economical choice for solo travelers or pairs, focusing on essential features and quick transit.',
    estimatedTime: 'Fastest transit time'
  }
];

export const MODEL_SCALES: Record<Location, number> = {
  'Earth': 0.5,
  'Mars': 0.4,
  'Moon': 0.3,
  'ISS': 0.2,
  'Space Hotel': 0.25
};

export const VEHICLE_SPEEDS: Record<string, number> = {
  'Space Shuttle': 27000,  // km/h
  'Space Taxi': 32000,     // km/h
  'Space Pod': 35000       // km/h
};

export const DESTINATION_RISK: Record<Location, number> = {
  'Earth': 1.0,
  'Mars': 1.5,
  'Moon': 1.2,
  'ISS': 1.1,
  'Space Hotel': 1.0
};

export const VEHICLE_EFFICIENCY: Record<string, VehicleEfficiency> = {
  'Space Shuttle': {
    eco_rating: 85,
    capacity_score: 90,
    comfort_score: 95
  },
  'Space Taxi': {
    eco_rating: 90,
    capacity_score: 80,
    comfort_score: 85
  },
  'Space Pod': {
    eco_rating: 95,
    capacity_score: 70,
    comfort_score: 75
  }
};

export const VEHICLE_MAP: Record<string, number> = {
  'Space Shuttle': 0,
  'Space Taxi': 1,
  'Space Pod': 2
};
