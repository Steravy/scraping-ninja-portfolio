import { SocialLinks } from "@/types";
import { Github, LinkedIn, Twitter } from "@/lib/icons";


export default function Footer() {

    return (
        <footer className="flex flex-col items-center justify-center gap-2 text-muted-foreground mb-5">

            <FooterSocialLinks />

            <small className="mb-2 block text-xs">
                &copy; Scraping Ninja {new Date().getFullYear()}. All rights reserved.
            </small>

        </footer>
    );
}

const FooterSocialLinks = () => {
    return (
        <div className="flex items-center justify-center space-x-3 w-min">
            <a
                href={SocialLinks.GITHUB}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-[0.35rem] transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">Github</span>
                <Github className="h-[0.9rem] w-[0.9rem] text-gray-600 transition-colors group-hover:text-black" />
            </a>
            <a
                href={SocialLinks.LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-[0.35rem] transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="h-[0.9rem] w-[0.9rem] text-gray-600 transition-colors group-hover:text-[#0077b5]" />
            </a>
            <a
                href={SocialLinks.TWITTER}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-[0.35rem] transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-[0.9rem] w-[0.9rem] text-gray-600 transition-colors group-hover:text-black" />
            </a>
        </div>
    )
}