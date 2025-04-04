
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
    <section className={`w-full py-24 ${backgroundClass}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
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
