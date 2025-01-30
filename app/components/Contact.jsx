import React from "react";
import "../../styles/contactStyles.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  MdContactPage,
  MdOutlineWhatsapp,
  MdOutlinePhone,
} from "react-icons/md";
import Swal from "sweetalert2";
import { Cloudinary } from "@cloudinary/url-gen";
import { exportDictionary } from "../../dictionary";

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

new Cloudinary({ cloud: { cloudName: cloudinaryCloudName } });

const Gmail_Logo = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1738180605/Portfolio/jl6vhdm8euxzf6cwpuq1.svg`;

export const Contact = ({ lang }) => {
  const copyToClipboard = (isMail) => {
    let toShare = "nahuelvenerus@gmail.com";
    let color = "red";
    if (!isMail) {
      toShare = "1136441633";
      color = "#AF64DB";
    }
    navigator.clipboard.writeText(toShare);
    Swal.fire({
      icon: "success",
      title: `${exportDictionary(lang, "mailText1")} </br><div style="color: ${color};"><br>${toShare}</br></div></br> ${exportDictionary(lang, "mailText2")}`,
      confirmButtonText: exportDictionary(lang, "great"),
    });
  };

  return (
    <>
      <h1 className="inner-title">{exportDictionary(lang, "contact")}</h1>
      <div className="icon-container" >
        <a className="icon-wrapper linkedin"
          href="https://www.linkedin.com/in/nahuel-venerus/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="contact-icon" />
          <span className="icon-text">LinkedIn</span>
        </a>
        <div
          className="icon-wrapper gmail"
          onClick={() => copyToClipboard(true)}
        >
          <img alt="gmail" src={Gmail_Logo} className="gmail-logo"/>
          <span className="gmail-text">Gmail</span>
        </div>
        <a className="icon-wrapper github"
          href="https://www.github.com/NahuelVenerus"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="contact-icon" />
          <span style={{ color: "white" }} className="icon-text">
            Github
          </span>
        </a>
        <a className="icon-wrapper resume"
          href={lang === "ES" ? "https://nahuelvenerus.my.canva.site/nahuel-venerus" : "https://nahuelvenerus.my.canva.site/resume-nahuel-venerus"}
          target="_blank"
          rel="noreferrer"
        >
          <MdContactPage className="contact-icon" />
          <span className="icon-text">CV</span>
        </a>
        <a className="icon-wrapper whatsapp"
          href="https://wa.me/5491136441633"
          target="_blank"
          rel="noreferrer"
        >
          <MdOutlineWhatsapp className="contact-icon" />
          <span className="icon-text">WhatsApp</span>
        </a>
        <div
          className="icon-wrapper phone"
          onClick={() => copyToClipboard(false)}
        >
          <MdOutlinePhone className="contact-icon" />
          <span className="icon-text">{exportDictionary(lang, "number")}</span>
        </div>
      </div>
    </>
  );
};