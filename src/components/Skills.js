import { useContext } from "react";
import SectionHeader from "./SectionHeader";
import ResumeContext from "../data/ResumeContext";
import styles from "./components.module.css";
import Divider from "./Divider";

const Skills = () => {
    const resumeContext = useContext(ResumeContext);
    return (
        <div className={styles.section}>
            <SectionHeader sectionName="Skills" />
            <Divider />
            <p className={styles.skills}>{resumeContext.skills.join(", ")}</p>
            <Divider />
        </div>
    );
};

export default Skills;