import React, { useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleScroll = () => {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }
  };

  const onMouseEnterLeave = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    
    if (topButton && arrow) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div
      onClick={scrollToTop}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnterLeave(theme.text, theme.body)}
      onMouseLeave={() => onMouseEnterLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
