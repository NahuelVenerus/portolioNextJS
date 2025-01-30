import React from "react";
import {TbBrandReactNative, TbBrandRedux, TbBrandNextjs, TbBrandBootstrap, TbBrandTailwind, TbBrandMongodb, TbBrandJavascript, TbBrandTypescript, TbBrandDocker,} from "react-icons/tb";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import {SiAxios, SiSequelize, SiPostgresql, SiJsonwebtokens, SiExpress, SiAmazon} from "react-icons/si";
import "../../styles/skillsStyles.css";
import "../../styles/aboutStyles.css";
import { exportDictionary } from "../../dictionary";
import { SkillColumn } from "../commons/SkillColumn";

export const Skills = ({ lang }) => {
  const column1 = [
    {icon: TbBrandReactNative, name: "React-Native"}, 
    {icon: TbBrandRedux, name: "Redux"}, 
    {icon: TbBrandNextjs, name: "NextJs"}, 
    {icon: SiAxios, name: "Axios"}, 
    {icon: TbBrandBootstrap, name: "Bootstrap"}, 
    {icon: TbBrandTailwind, name: "Tailwind"}];
  const column2 = [
    {icon: FaNodeJs, name: "NodeJs"}, 
    {icon: SiSequelize, name: "Sequelize"}, 
    {icon: SiPostgresql, name: "PosgreSQL"}, 
    {icon: TbBrandMongodb, name: "MongoDB"}, 
    {icon: SiExpress, name: "Express"}, 
    {icon: SiJsonwebtokens, name: "JWT"}];
  const column3 = [
    {icon: TbBrandJavascript, name: "Javascript"}, 
    {icon: TbBrandTypescript, name: "Typescript"}, 
    {icon: FaJava, name: "Java"}, 
    {icon: TbBrandDocker, name: "Docker"}, 
    {icon: SiAmazon, name: "AWS"}, 
    {icon: DiScrum, name: "SCRUM"}
  ]
  return (
    <>
      <h1 className="inner-title ">{exportDictionary(lang, "skills")}</h1>
      <div className="inner-subtitle">
        <div className="skills-container">
          <SkillColumn title="FRONT" techList={column1}/>
          <SkillColumn title="BACK" techList={column2}/>
          <SkillColumn title={exportDictionary(lang, "techs")} techList={column3}/>
        </div>
      </div>
    </>
  );
};
