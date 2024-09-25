"use client";
import React, { useState, useEffect } from "react";
const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            let currentScrollTop = window.scrollY;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            lastScrollTop = currentScrollTop;
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
          <div className={`bg-black text-white backdrop-blur-lg fixed flex items-center h-fit  w-full z-10 transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
            }`}>
            <p className="text-center w-full mx-auto text-sm">
            This site is currenlty in developement phase :) 

            </p>
            
        </div>
  )
}

export default Banner