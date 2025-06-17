import React from "react";

export default function IconClose({ className = "" }) {
  return (
    <div className={`relative w-10 h-10 ${className}`}>
      <span className="block absolute w-full top-1/2 left-0 border-t-[3px] border-white transform -translate-y-1/2 rotate-45"></span>
      <span className="block absolute w-full top-1/2 left-0 border-t-[3px] border-white transform -translate-y-1/2 -rotate-45"></span>
    </div>
  );
}
