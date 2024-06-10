import { ResumeContextProvider } from "../data/ResumeContext";
import styles from "./components.module.css"
import Divider from "./Divider";
import Header from "./Header";
import Section from "./Section";
import Skills from "./Skills";

const Resume = () => {
    return (
        <div className={styles.resume}>
            <ResumeContextProvider>
                <Header /> 
                <Divider />
                <Section sectionName="workExperience" />
                <Section sectionName="projects" />
                <Section sectionName="education" />
                <Skills />
                <div className={styles.footer}></div>
            </ResumeContextProvider>
        </div>
    );
}

export default Resume;