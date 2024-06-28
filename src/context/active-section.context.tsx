'use client';
import { Section } from "@/types";
import { useState, ReactNode, createContext, Dispatch, SetStateAction, useContext } from "react";

// type Section = typeof links[number]["name"];
type ActiveSectionContextProviderProps = {
    children: ReactNode
};
type ActiveSectionContextType = {
    activeSection: Section,
    setActiveSection: Dispatch<SetStateAction<Section>>,
    timeOfLastClick: number,
    setTimeOfLastClick: Dispatch<SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);


const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {


    const [activeSection, setActiveSection] =
        useState<Section>("Intro");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )

}

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {

    const activeSectionContext = useContext(ActiveSectionContext);

    if (activeSectionContext === null)
        throw new Error("The useActiveSectionContext must be used within an ActiveSectionContextProvider")

    return activeSectionContext;
}