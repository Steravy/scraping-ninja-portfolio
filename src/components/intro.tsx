import { SectionIds } from "@/types"
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "./page-headers";
import ActionIcons from "./action-icons";

const Intro = () => {

    return (
        <section id={SectionIds.Intro}>
            <PageHeader className='mt-16'>
                {/* <Announcement label='Why choose dotJobs?' /> */}
                <PageHeaderHeading >
                    Scraping Ninja.
                </PageHeaderHeading>

                <PageHeaderDescription>
                    {/* We searched +3500 jobs, so you can choose the one that fits you best! */}
                    Hey there! I build web scrapers and bots that efficiently gather information
                    from the internet and provide real-time updates when changes occur.
                    My expertise includes creating powerful scrapers capable of indexing millions of pages every day.
                </PageHeaderDescription>
                <PageActions className="my-4">
                    <ActionIcons />
                </PageActions>
            </PageHeader>
        </section>

    )
}

export default Intro;
