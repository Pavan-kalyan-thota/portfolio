import styles from "./components.module.css";

const SectionItemHeader = ({ companyName, start, end, role, location}) => {
    return (
        <div className={styles.sectionItemHeader}>
            <div className={styles.sectionItemHeaderRow}>
                <h3 className={styles.sectionItemHeaderRowItem}>{companyName}</h3>
                <h3 className={styles.sectionItemHeaderRowItem}>{`${start} - ` + (end ? end : "current")}</h3>
            </div>
            <div className={styles.sectionItemHeaderRow}>
                <span>{role}</span>
                <span>{location}</span>
            </div>
        </div>
    );
};

export default SectionItemHeader;