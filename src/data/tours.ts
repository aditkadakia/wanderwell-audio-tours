export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  stops: number;
  rating: number;
  reviewCount: number;
  city: string;
  image: string;
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    id: "colonial-bombay",
    title: "Colonial Bombay Heritage Walk",
    description: "Journey through Victorian-era architecture and British colonial history. Explore Gothic Revival buildings, heritage precincts, and stories of old Bombay.",
    duration: "2.5 hours",
    stops: 8,
    rating: 4.8,
    reviewCount: 324,
    city: "Mumbai",
    image: "/src/assets/colonial-bombay.jpg",
    featured: true,
  },
  {
    id: "modern-mumbai",
    title: "Modern Mumbai: Bollywood to Business",
    description: "Discover contemporary Mumbai from film studios to financial districts. Experience the pulse of India's commercial capital and entertainment hub.",
    duration: "3 hours",
    stops: 10,
    rating: 4.6,
    reviewCount: 256,
    city: "Mumbai", 
    image: "/src/assets/modern-mumbai.jpg",
    featured: true,
  },
  {
    id: "old-delhi",
    title: "Old Delhi: Mughal Majesty",
    description: "Walk through narrow lanes of Chandni Chowk, visit historic Red Fort, and immerse in the grandeur of Mughal-era Delhi.",
    duration: "4 hours",
    stops: 12,
    rating: 4.9,
    reviewCount: 189,
    city: "Delhi",
    image: "/src/assets/delhi-tour.jpg",
    featured: true,
  },
  {
    id: "south-mumbai-art-deco",
    title: "Art Deco Mumbai",
    description: "Explore the world's second-largest collection of Art Deco buildings along Marine Drive and Oval Maidan.",
    duration: "2 hours",
    stops: 6,
    rating: 4.5,
    reviewCount: 142,
    city: "Mumbai",
    image: "/src/assets/mumbai-hero.jpg",
  },
];