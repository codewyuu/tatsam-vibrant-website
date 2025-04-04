
import React from "react";

interface MemberCardProps {
  name: string;
  position: string;
  image?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  position,
  image,
}) => {
  return (
    <div className="border border-black/20 h-full">
      <div>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full aspect-square object-cover"
          />
        ) : (
          <div className="w-full aspect-square placeholder-box flex items-center justify-center text-sm">
            Image Placeholder
          </div>
        )}
      </div>
      
      <div className="p-3 md:p-4 text-center">
        <h3 className="font-bold text-sm md:text-base truncate">{name}</h3>
        <p className="text-xs md:text-sm text-gray-600 truncate">{position}</p>
      </div>
    </div>
  );
};

export default MemberCard;
