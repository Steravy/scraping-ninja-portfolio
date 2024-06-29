import { SocialLinks } from "@/types";
import { Github, LinkedIn, Twitter } from "../lib/icons";
import { motion } from "framer-motion";

const ActionIcons = () => {

    return (
        <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "tween",
                duration: 0.4,
            }}
        >
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
        </motion.div>
    )
}

export default ActionIcons;