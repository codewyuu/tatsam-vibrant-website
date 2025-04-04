
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryItem from "@/components/ui/GalleryItem";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { Image, Filter, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import gallery from "@/data/gallery";
import events from "@/data/events";

interface GalleryModalProps {
  image: string;
  title: string;
  eventName?: string;
  date?: string;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  image,
  title,
  eventName,
  date,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-4xl w-full bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full max-h-[70vh] object-contain"
            />
          ) : (
            <div className="w-full h-[70vh] placeholder-box">
              Image Placeholder
            </div>
          )}
          <button 
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white border border-black/20 hover:bg-black/5 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {eventName && <p className="mb-1">{eventName}</p>}
          {date && <p className="text-gray-600">{date}</p>}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const t = useTranslation();
  const [eventFilter, setEventFilter] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<null | {
    image: string;
    title: string;
    eventName?: string;
    date?: string;
  }>(null);
  
  // Get all events
  const allEvents = events;
  
  // Filter gallery by event
  const filteredGallery = eventFilter 
    ? gallery.filter(item => item.eventId === eventFilter)
    : gallery;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-diagonal-stripes py-16 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{t('gallery.title')}</h1>
            <p className="text-lg max-w-3xl">तत्सम द्वारा आयोजित विभिन्न कार्यक्रमों की तस्वीरें देखें।</p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-6 px-6 border-b border-black/20">
          <div className="container mx-auto">
            <div className="flex items-center space-x-2">
              <Filter size={20} />
              <span className="font-medium">Filter by Event:</span>
              
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-3 py-1 text-sm border border-black/20 ${!eventFilter ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                  onClick={() => setEventFilter(null)}
                >
                  All Events
                </button>
                
                {allEvents.map(event => (
                  <button 
                    key={event.id}
                    className={`px-3 py-1 text-sm border border-black/20 ${eventFilter === event.id ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                    onClick={() => setEventFilter(event.id)}
                  >
                    {event.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <SectionHeading 
              title={t('gallery.events')} 
              icon={<Image size={20} />} 
            />
            
            {filteredGallery.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGallery.map(item => {
                  const eventDetails = events.find(event => event.id === item.eventId);
                  
                  return (
                    <GalleryItem
                      key={item.id}
                      image={item.image}
                      alt={item.title}
                      productId={item.eventId}
                      productName={eventDetails?.title}
                      onClick={() => setSelectedImage({
                        image: item.image,
                        title: item.title,
                        eventName: eventDetails?.title,
                        date: item.date
                      })}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p>No gallery images found for the selected event.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Submit Photos CTA */}
        <section className="py-12 px-6 bg-diagonal-stripes">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">अपनी तस्वीरें साझा करें</h2>
            <p className="max-w-2xl mx-auto mb-8">क्या आपने हमारे किसी कार्यक्रम में भाग लिया और तस्वीरें लीं? हमारे साथ अपनी तस्वीरें साझा करें और उन्हें हमारी गैलरी में देखें।</p>
            <button className="bg-black text-white px-8 py-3 hover:bg-black/80 transition-colors">
              तस्वीरें अपलोड करें
            </button>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-3xl">
            <NewsletterForm />
          </div>
        </section>
      </main>
      
      {selectedImage && (
        <GalleryModal 
          image={selectedImage.image}
          title={selectedImage.title}
          eventName={selectedImage.eventName}
          date={selectedImage.date}
          onClose={() => setSelectedImage(null)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
