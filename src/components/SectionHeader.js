import styles from "./components.module.css";
const SectionHeader = ({ sectionName }) => {
    return <h1 className={styles.sectionHeader}>{sectionName}</h1>;
}

export default SectionHeader;