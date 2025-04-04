
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const t = useTranslation();

  return (
    <footer className="w-full bg-diagonal-stripes border-t border-black/20 pt-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-8">
          <div>
            <p className="mb-4">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold mb-4">{t('footer.navigation')}</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">{t('nav.about')}</Link></li>
                <li><Link to="/events" className="hover:underline">{t('nav.events')}</Link></li>
                <li><Link to="/members" className="hover:underline">{t('nav.members')}</Link></li>
                <li><Link to="/blog" className="hover:underline">{t('nav.blog')}</Link></li>
                <li><Link to="/gallery" className="hover:underline">{t('nav.gallery')}</Link></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold mb-4">{t('footer.resources')}</h4>
              <ul className="space-y-2">
                <li><Link to="/news" className="hover:underline">{t('nav.news')}</Link></li>
                <li><Link to="/terms" className="hover:underline">{t('footer.terms')}</Link></li>
                <li><Link to="/privacy" className="hover:underline">{t('footer.privacy')}</Link></li>
                <li><Link to="/contact" className="hover:underline">{t('footer.contact')}</Link></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t('newsletter.title')}</h4>
            <p className="mb-4">{t('newsletter.description')}</p>
            <form className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder={t('newsletter.placeholder')}
                className="flex-1 border border-black/20 px-3 py-2"
              />
              <button 
                type="submit" 
                className="border border-black/80 px-4 py-2 bg-black text-white hover:bg-black/80 transition-colors"
              >
                {t('newsletter.subscribe')}
              </button>
            </form>
            
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/20 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} Tatsam - The Hindi Society of NSUT. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
