import { createContext } from "react";
import data from "./data.json";

const ResumeContext = createContext({});

export const ResumeContextProvider = ({ children }) => {
    return (
        <ResumeContext.Provider value={data}>
            {children}
        </ResumeContext.Provider>
    );
}

export default ResumeContext;