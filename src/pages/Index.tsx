
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedSection from "@/components/ui/FeaturedSection";
import EventCard from "@/components/ui/EventCard";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { CalendarDays, Users, BookOpen, Image, Grid } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import events from "@/data/events";
import blogs from "@/data/blogs";

const Index = () => {
  const t = useTranslation();
  
  // Get featured or first event
  const featuredEvent = events.find(event => event.isFeatured) || events[0];
  
  // Get upcoming events
  const upcomingEvents = events.filter(event => event.isUpcoming).slice(0, 3);
  
  // Get latest blogs
  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <FeaturedSection 
          title={t('home.hero.title')}
          description={t('home.hero.subtitle')}
          linkTo="/about"
          linkText={t('nav.about')}
        />
        
        {/* Featured Event */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <SectionHeading 
              title={t('home.featured.title')} 
              icon={<CalendarDays size={20} />} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="placeholder-box aspect-[4/3] flex items-center justify-center">
              <img src="/1.png" alt="Event" className="object-contain w-full h-full" />
              </div>
              
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">{featuredEvent.title}</h2>
                <p className="text-gray-600 mb-2">{featuredEvent.date}</p>
                <p className="mb-6">{featuredEvent.description}</p>
                <Link 
                  to={`/events/${featuredEvent.id}`}
                  className="self-start border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                >
                  {t('events.readMore')}
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="py-12 px-6 bg-secondary">
          <div className="container mx-auto">
            <SectionHeading 
              title={t('events.upcoming')} 
              icon={<CalendarDays size={20} />} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
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
            
            <div className="text-center mt-8">
              <Link 
                to="/events"
                className="border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors inline-block"
              >
                {t('nav.events')}
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <SectionHeading 
                  title={t('about.title')} 
                  icon={<Users size={20} />} 
                />
                <p className="mb-6">{t('about.description')}</p>
                <h3 className="text-xl font-bold mb-2">{t('about.mission')}</h3>
                <p className="mb-4">{t('about.missionDesc')}</p>
                <h3 className="text-xl font-bold mb-2">{t('about.vision')}</h3>
                <p className="mb-6">{t('about.visionDesc')}</p>
                <Link 
                  to="/about"
                  className="border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors inline-block"
                >
                  {t('nav.about')}
                </Link>
              </div>
              
              <div className="grid-pattern h-full min-h-[300px] flex items-center justify-center">
                <div className="bg-white border border-black/20 p-8 max-w-sm">
                  <h3 className="text-2xl font-bold mb-4">तत्सम</h3>
                  <p className="italic">"तत्सम हिंदी भाषा, साहित्य और संस्कृति के प्रति समर्पित है। हम युवाओं को हिंदी से जोड़ने और इसकी समृद्ध विरासत को बढ़ावा देने के लिए काम करते हैं।"</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Blogs */}
        <section className="py-12 px-6 bg-secondary">
          <div className="container mx-auto">
            <SectionHeading 
              title={t('blog.latest')} 
              icon={<BookOpen size={20} />} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestBlogs.map(blog => (
                <ArticleCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.date}
                  image={blog.image}
                  category={blog.category}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/blog"
                className="border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors inline-block"
              >
                {t('nav.blog')}
              </Link>
            </div>
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <SectionHeading 
              title={t('gallery.title')} 
              icon={<Image size={20} />} 
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="placeholder-box aspect-square">
                  Image {index + 1}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/gallery"
                className="border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors inline-block"
              >
                {t('nav.gallery')}
              </Link>
            </div>
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

export default Index;
