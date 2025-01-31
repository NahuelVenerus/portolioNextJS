"use client"
import React, { useEffect, useState } from "react";
import { NavbarName } from "../commons/NavbarName";
import { IoIosArrowForward } from "react-icons/io";
import "../../styles/backgroundChanger.css";
import "../../styles/containerStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../store/color";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Cloudinary } from "@cloudinary/url-gen";
import { exportDictionary } from "../../dictionary";

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

new Cloudinary({ cloud: { cloudName: cloudinaryCloudName } });
let backgroundImage1 =
  `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1693515045/Portfolio/pink_background.png`;
let backgroundImage2 =
`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1693515044/Portfolio/red_background.png`;
let backgroundImage3 =
  `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1693515044/Portfolio/blue_background.png`;
let backgroundImage4 =
  `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1693515044/Portfolio/green_background.png`;
let backgroundImage5 =
  `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1693515044/Portfolio/black_background.png`;

const BackgroundChanger = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const [currentBackground, setCurrentBackground] = useState(backgroundImage1);
  const [top, setTop] = useState("85%");
  const [isHidden, setIsHidden] = useState(1);
  const [isNavbarHidden, setIsNavbarHidden] = useState(1);
  const [currentContent, setCurrentContent] = useState("");
  const [subtitleInvisibility, setSubtitleInvisibility] = useState(1);
  const [language, setLanguage] = useState("ES");

  const handleBackgroundChange = (newBackground) => {
    setCurrentBackground(newBackground);
  };

  const handleNavbarClick = (content) => {
    setTop("20%");
    setSubtitleInvisibility(0)
    if (currentContent !== content) {
      setIsHidden(0);
      setTimeout(() => setCurrentContent(content), 500);
      setTimeout(() => setIsHidden(1), 800);
    } else {
      dispatch(setColor("pink"));
      handleBackgroundChange(backgroundImage1);
      setTop("85%");
      setSubtitleInvisibility(1)
      setTimeout(() => setCurrentContent(""), 500);
    }
  };
  
  const changeLanguageUrl = (lang) => {
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('lang', lang);
    window.history.pushState({}, '', currentUrl);
    updateLanguageContent(lang);
  };

  const updateLanguageContent = (lang) => {
    setIsHidden(0);
    setIsNavbarHidden(0);
    setSubtitleInvisibility(0);
    setTimeout(() => {
      setLanguage(lang || "ES");
      setTimeout(() => {
        setIsHidden(1);
        setIsNavbarHidden(1);
        if (currentContent === "") setSubtitleInvisibility(1);
      }, 500);
    }, 1000);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang")?.toUpperCase() || "ES"; 
    setLanguage(lang);
  }, []);
  
  useEffect(() => {
    dispatch(setColor("pink"));
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        transition: "background-image 1s ease",
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}
    >
      <div>
        <div className="top-section">
          <div className={currentBackground === backgroundImage1 ? "title transition" : "title-reduced transition"} style={{ color: color }}>NAHUEL VENERUS</div>
          <div className="language-change"
            style={{ transition: "all 1s ease", borderColor: color, color: color, transform: `scale(${currentBackground !== backgroundImage1 ? 0.8 : 1})` }}>
            <span className={language === "ES" ? "language-change-selected" : ""} onClick={() => changeLanguageUrl("ES")} style={{ paddingRight: "10px", textShadow: language === "ES" ? `0 0 0.5px ${color}, 0 0 10px ${color}, 0 0 10px ${color}` : ""}}>ES</span> <span style={{fontSize: "35px"}}>|</span>
            <span className={language === "EN" ? "language-change-selected" : ""} onClick={() => changeLanguageUrl("EN")} style={{ paddingLeft: "10px", textShadow: language === "EN" ? `0 0 0.5px ${color}, 0 0 10px ${color}, 0 0 10px ${color}` : ""}}>EN</span></div>
        </div>
        <div className="subtitle transition" style={{ opacity: subtitleInvisibility }}>{exportDictionary(language, "subtitle")}</div>
      </div>
      <section className="main-container transition" style={{ top: top, color: color }}>
        <nav  style={{opacity: isNavbarHidden}} className="navbar transition">
          <div onClick={() => handleNavbarClick("About")}>
            <NavbarName
              icon={<IoIosArrowForward />}
              image={backgroundImage2}
              newBackground={handleBackgroundChange}
              newColor="#E97979"
              title={exportDictionary(language, "about")}
              currentBackground={currentBackground}
            />
          </div>
          <div onClick={() => handleNavbarClick("Skills")}>
            <NavbarName
              icon={<IoIosArrowForward />}
              image={backgroundImage3}
              newBackground={handleBackgroundChange}
              newColor="#B0A0FF"
              title={exportDictionary(language, "skills")}
              currentBackground={currentBackground}
            />
          </div>
          <div onClick={() => handleNavbarClick("Projects")}>
            <NavbarName
              icon={<IoIosArrowForward />}
              image={backgroundImage4}
              newBackground={handleBackgroundChange}
              newColor="#86CC7B"
              title={exportDictionary(language, "projects")}
              currentBackground={currentBackground}
            />
          </div>
          <div onClick={() => handleNavbarClick("Contact")}>
            <NavbarName
              icon={<IoIosArrowForward />}
              image={backgroundImage5}
              newBackground={handleBackgroundChange}
              newColor="white"
              title={exportDictionary(language, "contact")}
              currentBackground={currentBackground}
            />
          </div>
        </nav>

        <div className="content-container">
          <div className="border">
          {currentContent === "About" && <div className="component-container" style={{transition: "all 1s ease", opacity: isHidden}}><About lang={language}/></div>}
            {currentContent === "Skills" && <div className="component-container" style={{transition: "all 1s ease", opacity: isHidden}}><Skills lang={language}/></div>}
            {currentContent === "Projects" && <div className="component-container" style={{transition: "all 1s ease", opacity: isHidden}}><Projects lang={language}/></div>}
            {currentContent === "Contact" && <div className="component-container" style={{transition: "all 1s ease", opacity: isHidden}}><Contact lang={language}/></div>}
          </div>
        </div>
      </section>
    </div >
  );
};

export default BackgroundChanger;