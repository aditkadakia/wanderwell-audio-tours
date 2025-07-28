import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star } from "lucide-react";

interface TourCardProps {
  title: string;
  description: string;
  duration: string;
  stops: number;
  rating: number;
  reviewCount: number;
  image: string;
  onStartTour: () => void;
}

const TourCard = ({ title, description, duration, stops, rating, reviewCount, image, onStartTour }: TourCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-[var(--shadow-tour-card)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center gap-4 text-sm opacity-90">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {stops} stops
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.floor(rating)
                      ? "fill-heritage text-heritage"
                      : star === Math.ceil(rating) && rating % 1 !== 0
                      ? "fill-heritage/50 text-heritage"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground ml-1">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
        
        <Button 
          onClick={onStartTour}
          variant="tour" 
          className="w-full"
        >
          Start Tour
        </Button>
      </div>
    </Card>
  );
};

export default TourCard;