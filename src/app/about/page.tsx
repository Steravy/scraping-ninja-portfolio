import SectionSpacer from "@/components/section-spacer";
import SectionTitle from "@/components/section-title";
import SocialsLinks from "@/components/social-links";
import Image from "next/image";


const AboutPage = () => {
    return (
        <main className="max-w-4xl mx-auto mt-40 px-4">
            <div className="relative flex flex-col  items-center gap-6">
                <>
                    <Image
                        src="/corpcomment.png"
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className="w-28 h-28 rounded-full shadow-md"
                    />
                </>

                <article className="flex flex-col justify-center gap-1">
                    <p className="text-xl text-center md:text-2xl font-semibold tracking-tight">
                        Stefan Vitoria
                    </p>
                    <span className="font-extralight leading-7 text-muted-foreground">
                        A software engineer with a <span className="italic">thing</span> for web scraping.
                    </span>
                </article>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-6">
                <SocialsLinks />
            </div>

            <SectionSpacer />

            <section>
                <SectionTitle>What is Scraping Ninja?</SectionTitle>

                <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                    <span className="italic">Scraping Ninja</span>  is a personal brand i am creating for myself.
                    It aims to represent my skills and passion for web scraping. While this website/protifolio
                    is a place where i showcase some of my products and tools/scrappers i have been building for clients. It is also where you can find this
                    <span className="italic">Ninja</span> contacts to craft your own projects, or just to have a chat.
                </p>
            </section>

            <SectionSpacer />

            <section>
                <SectionTitle>About the author</SectionTitle>

                <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                    My name is Stefan Vitoria, i am a software engineer that is currently living in Praia, Cape Verde. A whole year summer paradise country in the middle of the occean.
                    After being working as a backend engineer for a company here in Cape Verde i applied for a job offer in Brasil to work as backend engineer for this holding company.
                    Here we craft bots that not only gets information from target sources in the web but does, in real time,
                    a bunch of data engineering processes to deliver data for milhoes of clients on demand.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                    But my first direct contact with web scrapping happen about 2 years ago when i build this bot that scrappes remote jobs from different companies carrers pages,
                    indexes them and alerts me so i could applied to them, and thats how i knew about the job i talked about earlier. And a love story beguins.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                    After this first project and this whole new experience in that company, i started creating side projects. Now i create custom web scrappers and bots for clients and some other side projects.
                    If you need a website scrapped or a bot for your company, or just want to have a chat, feel free to contact me.
                </p>
            </section>

            <SectionSpacer />
        </main>
    )
}

export default AboutPage;