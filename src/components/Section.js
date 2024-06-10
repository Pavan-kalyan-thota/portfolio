import { useContext } from "react";
import styles from "./components.module.css";
import SectionHeader from "./SectionHeader";
import ResumeContext from "../data/ResumeContext";
import SectionItem from "./SectionItem";
import Divider from "./Divider";
const Section = ({ sectionName }) => {
    const resumeContext = useContext(ResumeContext);
    if(resumeContext[sectionName].items.length === 0) return null;
    return (
        <div className={styles.section}>
            <SectionHeader sectionName={resumeContext[sectionName]?.title} />
            <Divider />
            {resumeContext[sectionName]?.items.map((experience) => {
                return <SectionItem experience={experience}/>;
            })}
            <Divider />
        </div>
    );
};

export default Section;