import React from "react";
import {TbBrandReactNative, TbBrandRedux, TbBrandNextjs, TbBrandBootstrap, TbBrandTailwind, TbBrandMongodb, TbBrandJavascript, TbBrandTypescript, TbBrandDocker,} from "react-icons/tb";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import {SiAxios, SiSequelize, SiPostgresql, SiJsonwebtokens, SiExpress, SiAmazon} from "react-icons/si";
import "../../styles/skillsStyles.css";
import "../../styles/aboutStyles.css";
import SkillRow from "../commons/SkillRow";

export const Skills = () => {
  return (
    <>
      <div className="inner-title">SKILLS</div>
      <div className="inner-subtitle">
        <div className="skills-container">
          <div className="skill-subtitle">Front</div>
          <div className="skill-subtitle">Back</div>
          <div className="skill-subtitle">Tecnologías</div>
        </div>
        <div className="skills-container">
          <div className="skill-column">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SkillRow icon={TbBrandReactNative} name="React-Native" />
              <SkillRow icon={TbBrandRedux} name="Redux" />
              <SkillRow icon={TbBrandNextjs} name="NextJs" />
              <SkillRow icon={SiAxios} name="Axios" />
              <SkillRow icon={TbBrandBootstrap} name="Bootstrap" />
              <SkillRow icon={TbBrandTailwind} name="Tailwind" />
            </div>
          </div>
          <div className="skill-column">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SkillRow icon={FaNodeJs} name={"NodeJs"} />
              <SkillRow icon={SiSequelize} name={"Sequelize"} />
              <SkillRow icon={SiPostgresql} name={"PosgreSQL"} />
              <SkillRow icon={TbBrandMongodb} name={"MongoDB"} />
              <SkillRow icon={SiExpress} name={"Express"} />
              <SkillRow icon={SiJsonwebtokens} name={"JWT"} />
            </div>
          </div>
          <div className="skill-column">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SkillRow icon={TbBrandJavascript} name={"Javascript"} />
              <SkillRow icon={TbBrandTypescript} name={"Typescript"} />
              <SkillRow icon={FaJava} name={"Java"} />
              <SkillRow icon={TbBrandDocker} name={"Docker"} />
              <SkillRow icon={SiAmazon} name={"AWS"} />
              <SkillRow icon={DiScrum} name={"SCRUM"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};