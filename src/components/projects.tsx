'use client';
import { projectsData } from "@/lib/static-data"
import { Fragment } from "react"
import Project from "./project"
import useSectionInView from "@/hooks/use-section-in-view";
import SectionTitle from "./section-title";

type Props = {}

const Projects = (props: Props) => {

    const { ref } = useSectionInView("Projects", 0.3)

    return (

        <section ref={ref} id='projects' className="scroll-mt-28 px-3 flex flex-col items-center justify-center">

            <SectionTitle>Things I&#39;ve worked on</SectionTitle>

            {
                projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))
            }
        </section>
    )
}

export default Projects;