import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { Section } from "@/types";
import { useActiveSectionContext } from "@/context/active-section.context";

const useSectionInView = (sectionName: Section, threshold: number = 0.75) => {

    const { ref, inView } = useInView({
        threshold
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    const lastClickPeriodIsEnough = Date.now() - timeOfLastClick > 1000;

    useEffect(() => {
        if (inView && lastClickPeriodIsEnough)
            setActiveSection(sectionName);
    }, [inView, setActiveSection, lastClickPeriodIsEnough, sectionName]);

    return {
        ref
    }
}

export default useSectionInView;