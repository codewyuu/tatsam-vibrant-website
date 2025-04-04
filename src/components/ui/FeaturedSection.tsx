
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

interface FeaturedSectionProps {
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
  backgroundClass?: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  description,
  linkTo,
  linkText,
  backgroundClass = "bg-diagonal-stripes",
}) => {
  return (
    <section className={`w-full py-12 md:py-24 ${backgroundClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{title}</h1>
          <p className="text-base md:text-lg mb-6 md:mb-8">{description}</p>
          <Link to={linkTo}>
            <Button variant="outline" className="border-black hover:bg-black hover:text-white transition-colors">
              {linkText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
