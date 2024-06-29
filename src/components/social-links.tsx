import { SocialLinks } from "@/types";
import { Github, LinkedIn, Twitter } from "@/lib/icons";

const SocialsLinks = () => {
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

export default SocialsLinks