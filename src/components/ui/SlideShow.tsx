
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GalleryImage } from "@/data/gallery";

interface SlideShowProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

const SlideShow: React.FC<SlideShowProps> = ({ 
  images, 
  initialIndex = 0,
  onClose 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [api, setApi] = useState<CarouselApi>();
  const currentImage = images[currentIndex];

  // This effect handles updating the current index when the carousel API changes
  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Set initial slide
    api.scrollTo(initialIndex);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api, initialIndex]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center" onClick={onClose}>
      <div 
        className="w-full max-w-6xl p-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with title and close button */}
        <div className="flex justify-between items-center mb-2 text-white">
          <h3 className="text-xl font-bold">{currentImage.title}</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
            onClick={onClose}
          >
            <X size={24} />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        {/* Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
            startIndex: initialIndex,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={image.id} className="flex items-center justify-center">
                <div className="relative flex flex-col items-center h-full">
                  {image.image ? (
                    <img 
                      src={image.image} 
                      alt={image.title} 
                      className="max-h-[70vh] w-auto object-contain mx-auto"
                    />
                  ) : (
                    <div className="w-full h-[70vh] flex items-center justify-center bg-gray-800 text-white">
                      Image Placeholder
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            variant="ghost"
            className="left-2 bg-black/50 text-white hover:bg-black/70 hover:text-white h-12 w-12 border-none"
          >
            <ChevronLeft size={24} />
          </CarouselPrevious>
          
          <CarouselNext 
            variant="ghost"
            className="right-2 bg-black/50 text-white hover:bg-black/70 hover:text-white h-12 w-12 border-none"
          >
            <ChevronRight size={24} />
          </CarouselNext>
        </Carousel>
        
        {/* Image details */}
        <div className="mt-4 text-white">
          <div className="flex justify-between items-center">
            <div>
              {currentImage.eventName && <p className="mb-1">{currentImage.eventName}</p>}
              {currentImage.date && <p className="text-gray-400">{currentImage.date}</p>}
            </div>
            <div className="text-gray-400">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
        
        {/* Thumbnail navigation */}
        <div className="mt-4 flex overflow-x-auto gap-2 pb-2">
          {images.map((img, idx) => (
            <button
              key={img.id}
              className={cn(
                "flex-shrink-0 w-16 h-16 overflow-hidden border-2",
                currentIndex === idx ? "border-white" : "border-transparent opacity-70 hover:opacity-100"
              )}
              onClick={() => {
                if (api) api.scrollTo(idx);
              }}
            >
              {img.image ? (
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs text-white">
                  {idx + 1}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
