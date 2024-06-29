import SectionSpacer from "@/components/section-spacer";
import SectionTitle from "@/components/section-title";
import SocialsLinks from "@/components/social-links";
import Image from "next/image";


const AboutPage = () => {
    return (
        <main className="max-w-5xl mx-auto mt-40 px-3">
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

            <SectionSpacer/>

            <section>
                <SectionTitle>My Background</SectionTitle>


            </section>
        </main>
    )
}

export default AboutPage;