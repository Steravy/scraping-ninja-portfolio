import { Github, LinkedIn, Twitter } from "../lib/icons"

const ActionIcons = () => {

    return (
        <div className="flex items-center space-x-3">
            <a
                href="https://github.com/dubinc/dub"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-2 transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">Github</span>
                <Github className="h-4 w-4 text-gray-600 transition-colors group-hover:text-black" />
            </a>
            <a
                href="https://www.linkedin.com/company/dubinc"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-200 p-2 transition-colors bg-background hover:bg-gray-100"
            >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="h-4 w-4 text-gray-600 transition-colors group-hover:text-[#0077b5]" />
            </a>
            <a
                href="https://twitter.com/dubdotco"
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