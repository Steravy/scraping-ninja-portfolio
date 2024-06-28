import { SectionIds } from "@/types"
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "./page-headers";

const Intro = () => {

    return (
        <section id={SectionIds.Intro}>
            <PageHeader className='mt-16'>
                {/* <Announcement label='Why choose dotJobs?' /> */}
                <PageHeaderHeading >
                    Scraping Ninja.
                </PageHeaderHeading>

                <PageHeaderDescription>
                    We searched +3500 jobs, so you can choose the one that fits you best!
                </PageHeaderDescription>
                {/* <PageActions className="my-4">
                
            </PageActions> */}
            </PageHeader>
        </section>

    )
}

export default Intro;
