"use client"
import Slider from "react-slick";
import "../../styles/aboutStyles.css";
import "../../styles/swiperStyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperSlide from "../commons/SwiperSlide";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Cloudinary } from "@cloudinary/url-gen";
import { exportDictionary } from "../../dictionary";
import { debounce } from "lodash";
const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

new Cloudinary({ cloud: { cloudName: cloudinaryCloudName } });

const ClubDelPlan = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1738176496/Portfolio/Project%20Images/jxdptwcu34mttqj7cn7s.png`;
const GeekCentralStore = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1738176496/Portfolio/Project%20Images/vbpgvczmxqt1pajtqi4y.png`;
const ClubDelPlanMobile = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1738176496/Portfolio/Project%20Images/fghfxuwv77zkenftznrh.png`;
const GeekCentralStoreMobile = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1738176495/Portfolio/Project%20Images/xnqij7hndclvlaspxmza.png`;

export const Projects = ({ lang }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isTiny, setIsTiny] = useState(false);

  const handleResize = debounce(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    setIsMobile(width < 500 && height > width);
    setIsLandscape(height < 500 && height < width);
    setIsTiny(height <= width / 2.15);
    console.log("height: ", height, "width: ", width);
  }, 300);
  console.log("is tiny: ", isTiny);
  
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    {
      image: isMobile ? ClubDelPlanMobile : ClubDelPlan,
      name: "El Club del Plan",
      link: "https://github.com/alba-97/ceibo-back",
    },
    {
      image: isMobile ? GeekCentralStoreMobile : GeekCentralStore,
      name: "Geek Central Store",
      link: "https://github.com/NahuelVenerus/GeekCentralStore",
    },
  ];

  function PrevArrow( props ) {
    const { className, onClick } = props;
    return (
      <IoIosArrowBack color="#86CC7B" onClick={onClick} className={className} />
    );
  }

  function NextArrow( props ) {
    const { className, onClick } = props;
    return (
      <IoIosArrowForward color="#86CC7B" onClick={onClick} className={className} />
    );
  }

  const landscapeSettings = {
    className: "swiper",
    centerMode: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    useCSS: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const portraitSettings= {
    className: "center",
    centerMode: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    arrows: false,    
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const settings = isLandscape ? landscapeSettings : portraitSettings;

  return (
    <div className="swiper">
      <h1 className="inner-title">{exportDictionary(lang, "projects")}</h1>
      <div className="swiper-container">
        <Slider {...settings}>
          {images.map((image) =>
            isTiny ? (
              <div className="slide text-slide" key={image.link}>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                <div className="project-name-container">
                  <h2 className="project-name">{image.name}</h2>
                </div>
              </a>
              </div>
            ) : (
              <SwiperSlide image={image} key={image.link} />
            )
          )}
        </Slider>
      </div>
    </div>
  );
}  
