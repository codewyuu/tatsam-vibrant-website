
import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  date,
  image,
  category,
}) => {
  const t = useTranslation();
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="border border-black/20 h-full flex flex-col">
      <div className="relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[4/3] object-cover"
          />
        ) : (
          <div className="w-full aspect-[4/3] placeholder-box flex items-center justify-center text-sm">
            Image Placeholder
          </div>
        )}
        <button 
          className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center bg-white border border-black/20 hover:bg-black/5 transition-colors"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Unlike" : "Like"}
        >
          <Heart 
            size={18} 
            className={liked ? "fill-black" : ""}
          />
        </button>
      </div>
      
      <div className="p-3 md:p-4 flex-1 flex flex-col">
        <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">{date}</div>
        <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 line-clamp-2">{title}</h3>
        <p className="text-xs md:text-sm mb-3 md:mb-4 flex-1 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center mt-auto">
          {category && (
            <span className="text-xs border border-black/20 px-2 py-1 truncate max-w-[60%]">
              {category}
            </span>
          )}
          <Link to={`/blog/${id}`} className="text-xs md:text-sm font-medium hover:underline">
            {t('events.readMore')} →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
