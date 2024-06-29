'use client';
import { SectionIds } from "@/types"
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "./page-headers";
import ActionIcons from "./action-icons";
import useSectionInView from "@/hooks/use-section-in-view";

const Intro = () => {

    const { ref } = useSectionInView("Intro", 0.5);

    return (
        <section id={SectionIds.Intro} ref={ref} className="scroll-mt-[100rem] h-[95vh] flex flex-col justify-center items-center">
            <PageHeader>
                {/* <Announcement label='Why choose dotJobs?' /> */}
                <PageHeaderHeading >
                    Scraping Ninja.
                </PageHeaderHeading>
                <PageHeaderDescription className="italic">
                    Hello World! I&#96;m Stefan Vitoria. I build web scrapers and bots that efficiently gather information
                    from the internet and provide real-time updates when changes occur.
                    {/* My expertise includes creating powerful scrapers capable of indexing millions of pages every day." */}
                </PageHeaderDescription>
                <PageActions className="">
                    <ActionIcons />
                </PageActions>
            </PageHeader>
        </section>

    )
}

export default Intro;
