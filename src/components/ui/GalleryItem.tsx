
import React from "react";
import { Heart } from "lucide-react";

interface GalleryItemProps {
  image: string;
  alt: string;
  productId?: string;
  productName?: string;
  onClick?: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  alt,
  productId,
  productName,
  onClick,
}) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      {image ? (
        <img 
          src={image} 
          alt={alt} 
          className="w-full aspect-square object-cover"
        />
      ) : (
        <div className="w-full aspect-square placeholder-box">
          Image Placeholder
        </div>
      )}
      
      {productId && productName && (
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-xs">
          <div>#{productId}</div>
          <div>{productName}</div>
        </div>
      )}
      
      <button 
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white border border-black/20 opacity-0 group-hover:opacity-100 hover:bg-black/5 transition-all"
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
        aria-label={liked ? "Unlike" : "Like"}
      >
        <Heart 
          size={18} 
          className={liked ? "fill-black" : ""}
        />
      </button>
    </div>
  );
};

export default GalleryItem;
