
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
    <div className="border border-black/20">
      <div>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full aspect-square object-cover"
          />
        ) : (
          <div className="w-full aspect-square placeholder-box">
            Image Placeholder
          </div>
        )}
      </div>
      
      <div className="p-4 text-center">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default MemberCard;
