import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

interface TourCardProps {
  title: string;
  description: string;
  duration: string;
  stops: number;
  image: string;
  onStartTour: () => void;
}

const TourCard = ({ title, description, duration, stops, image, onStartTour }: TourCardProps) => {
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
        <p className="text-muted-foreground mb-6 line-clamp-2">{description}</p>
        
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