import React from "react";

interface Props {
  children: React.ReactNode;
}

const MasonryLayout = ({ children } : Props) => {
  return (
    <div className="masonry sm:masonry-sm lg:masonry-md">
      {children}
    </div>
  );
};

export default MasonryLayout;
