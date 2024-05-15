"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const Vidpopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300); // Match the duration of the CSS transition
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10); // Short delay to trigger the transition
    }
  }, [isOpen]);
  return (
    <div className="relative z-40">
      <div className="max-w-[267.45px]" onClick={handleOpen}>
        <Button className="max-w-[267.45px] mt-5">Watch the Video</Button>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative w-full max-w-[800px] bg-white rounded-lg overflow-hidden transform transition-transform duration-300 ${
              isVisible ? "scale-100" : "scale-95"
            }`}
          >
            <button
              className="absolute -top-4 right-0 text-black text-[30px] font-bold p-1"
              onClick={handleClose}
            >
              &times;
            </button>
            <div className="p-6 ">
              <iframe
                width="660"
                height="405"
                className="w-full max-w-[]"
                // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vidpopup;
