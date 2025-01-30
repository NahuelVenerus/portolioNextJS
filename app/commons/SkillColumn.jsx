import SkillRow from "./SkillRow"

export const SkillColumn = ({title: title, techList: techList }) => {
    return (
        <div className="skill-column">
            <div className="skill-subtitle">{title}</div>
            <div className="skills-column-items">
                <SkillRow icon={techList[0].icon} name={techList[0].name} />
                <SkillRow icon={techList[1].icon} name={techList[1].name} />
                <SkillRow icon={techList[2].icon} name={techList[2].name} />
                <SkillRow icon={techList[3].icon} name={techList[3].name} />
                <SkillRow icon={techList[4].icon} name={techList[4].name} />
                <SkillRow icon={techList[5].icon} name={techList[5].name} />
            </div>
        </div>
    )
}