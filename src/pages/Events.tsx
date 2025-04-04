
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { CalendarDays, Filter } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import events from "@/data/events";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const t = useTranslation();
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Filter events
  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);
  
  // Get all categories
  const allCategories = Array.from(new Set(events.map(event => event.category)));
  
  // Filter events by category if a filter is applied
  const filteredUpcomingEvents = categoryFilter 
    ? upcomingEvents.filter(event => event.category === categoryFilter)
    : upcomingEvents;
    
  const filteredPastEvents = categoryFilter 
    ? pastEvents.filter(event => event.category === categoryFilter)
    : pastEvents;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-diagonal-stripes py-16 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{t('events.title')}</h1>
            <p className="text-lg max-w-3xl">तत्सम द्वारा आयोजित विभिन्न कार्यक्रमों और गतिविधियों के बारे में जानें। हम हिंदी भाषा, साहित्य और संस्कृति से संबंधित कई प्रकार के कार्यक्रम आयोजित करते हैं।</p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-6 px-6 border-b border-black/20">
          <div className="container mx-auto">
            <div className="flex items-center space-x-2">
              <Filter size={20} />
              <span className="font-medium">Filter:</span>
              
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-3 py-1 text-sm border border-black/20 ${!categoryFilter ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                  onClick={() => setCategoryFilter(null)}
                >
                  All
                </button>
                
                {allCategories.map(category => (
                  <button 
                    key={category}
                    className={`px-3 py-1 text-sm border border-black/20 ${categoryFilter === category ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                    onClick={() => setCategoryFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Tabs */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="w-full flex mb-8 border border-black/20">
                <TabsTrigger 
                  value="upcoming"
                  className="flex-1 py-3 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
                >
                  {t('events.upcoming')}
                </TabsTrigger>
                <TabsTrigger 
                  value="past"
                  className="flex-1 py-3 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
                >
                  {t('events.past')}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                <SectionHeading 
                  title={t('events.upcoming')} 
                  icon={<CalendarDays size={20} />} 
                />
                
                {filteredUpcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredUpcomingEvents.map(event => (
                      <EventCard
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        image={event.image}
                        category={event.category}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p>No upcoming events found with the selected filter.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="past">
                <SectionHeading 
                  title={t('events.past')} 
                  icon={<CalendarDays size={20} />} 
                />
                
                {filteredPastEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredPastEvents.map(event => (
                      <EventCard
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        image={event.image}
                        category={event.category}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p>No past events found with the selected filter.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Calendar */}
        <section className="py-12 px-6 bg-secondary">
          <div className="container mx-auto">
            <SectionHeading title="Event Calendar" icon={<CalendarDays size={20} />} />
            
            <div className="border border-black/20 bg-white p-6">
              <p className="text-center mb-4">This is where an events calendar would be displayed, showing all upcoming events organized by date.</p>
              <div className="placeholder-box h-[400px]">
                Calendar Placeholder
              </div>
            </div>
          </div>
        </section>
        
        {/* Registration CTA */}
        <section className="py-12 px-6 bg-diagonal-stripes">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Register for our next event</h2>
            <p className="max-w-2xl mx-auto mb-8">Don't miss our upcoming events! Register now to secure your spot and stay updated with all event details.</p>
            <button className="bg-black text-white px-8 py-3 hover:bg-black/80 transition-colors">
              Register Now
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
      
      <Footer />
    </div>
  );
};

export default Events;
