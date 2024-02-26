import React from "react";
import { Button } from "../../types/button.type";

const CTA: React.FC<Button> = ({ children, onClick, className, style }) => {
  return (
    <>
      <button onClick={onClick} className={className} style={style}>
        {children}
      </button>
    </>
  );
};

export default CTA;
