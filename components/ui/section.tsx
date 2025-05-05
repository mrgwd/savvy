import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section
      id={id}
      className={`py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
