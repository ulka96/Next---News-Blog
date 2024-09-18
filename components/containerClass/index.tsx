import React from "react";

interface AuxProps {
  children: JSX.Element;
}

const Container: React.FC<AuxProps> = ({ children }) => {
  return (
    <div className="max-w-[1300px] mx-auto px-10">
      {children}
    </div>
  );
};

export default Container;