
import React from "react";

interface SectionHeadingProps {
  title: string;
  icon?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, icon }) => {
  return (
    <div className="flex justify-between items-center py-3 px-4 border border-black/20 mb-6 bg-white">
      <h2 className="text-lg font-medium uppercase">{title}</h2>
      {icon && <div>{icon}</div>}
    </div>
  );
};

export default SectionHeading;
