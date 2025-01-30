"use client"
import React, { useState, useEffect } from "react";
import "../../styles/skillsStyles.css";

const SkillRow = ({ icon: IconComponent, name }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500 || window.innerHeight < 500);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className="skill-row">
      <IconComponent className="skill-icon" />
      {!isMobile && <span>{name}</span>}
    </div>
  );
};

export default SkillRow;
