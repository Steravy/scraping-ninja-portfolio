import { SocialLinks } from "@/types";
import { Github, LinkedIn, Twitter } from "../lib/icons"

const ActionIcons = () => {

    return (
        <div className="flex items-center space-x-3">
            <a
                href={SocialLinks.GITHUB}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-2 transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">Github</span>
                <Github className="h-4 w-4 text-gray-600 transition-colors group-hover:text-black" />
            </a>
            <a
                href={SocialLinks.LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-2 transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="h-4 w-4 text-gray-600 transition-colors group-hover:text-[#0077b5]" />
            </a>
            <a
                href={SocialLinks.TWITTER}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-2 transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-4 w-4 text-gray-600 transition-colors group-hover:text-black" />
            </a>
        </div>
    )
}

export default ActionIcons;