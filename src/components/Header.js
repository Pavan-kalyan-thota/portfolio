import { useContext } from "react";
import ResumeContext from "../data/ResumeContext";
import styles from "./components.module.css";

const Header = () => {
    const resumeContext = useContext(ResumeContext);
    return (
        <div className={styles.header}>
            <h1 className={styles.fullName}>{resumeContext.header.fullName}</h1>
            <div className={styles.links}>
                <a href={`tel:${resumeContext.header.phNo}`} target="_blank" rel="noreferrer">Call Me</a>
                <a href={`mailto:${resumeContext.header.email}`} target="_blank" rel="noreferrer">Mail</a>
                <a href={resumeContext.header.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={resumeContext.header.github} target="_blank" rel="noreferrer">Git Hub</a>
            </div>
        </div>
    );
}

export default Header;