import SectionItemHeader from "./SectionItemHeader";
import styles from "./components.module.css";

const SectionItem = ({ experience }) => {
    return (
        <div>
            <SectionItemHeader 
                companyName={experience.companyName} 
                start={experience.start}
                end={experience.end}
                role={experience.role}
                location={experience.location}
            />

            <ul className={styles.detailsList}>    
                {experience.details.map(detail => {
                    return <li>{detail}</li>;
                })}
            </ul>
        </div>
    );
};

export default SectionItem;