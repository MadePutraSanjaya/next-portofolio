import React from "react";
import { Button } from "../../types/button.type";

const CTA: React.FC<Button> = ({ children, onClick, className }) => {
  return (
    <>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
};

export default CTA;
