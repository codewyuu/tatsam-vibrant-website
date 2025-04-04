
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "@/hooks/useTranslation";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const t = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would submit to a backend here
    console.log("Subscribing email:", email);
    
    toast({
      title: "Success!",
      description: "You have been subscribed to our newsletter",
    });
    
    setEmail("");
  };

  return (
    <div className="bg-secondary p-4 md:p-6 border border-black/20">
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">{t('newsletter.title')}</h3>
      <p className="mb-4 text-sm md:text-base">{t('newsletter.description')}</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.placeholder')}
          className="flex-1 border border-black/20 px-3 py-2 text-sm md:text-base"
          required
        />
        <Button 
          type="submit" 
          className="bg-black text-white hover:bg-black/80"
        >
          {t('newsletter.subscribe')}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
