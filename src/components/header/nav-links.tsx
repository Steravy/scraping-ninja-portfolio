import { links } from "@/lib/static-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from '@/lib/utils';
import { useActiveSectionContext } from "@/context/active-section.context";


type NavLinksProps = {}

const NavLinks: React.FC<NavLinksProps> = (props: NavLinksProps) => {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (

        <nav
            className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] text-gray-500 sm:flex-nowrap sm:gap-5">
                {
                    links.map(link => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.href}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={cn(
                                    "flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:hover:text-gray-300",
                                    { "text-gray-950 dark:text-gray-200": activeSection === link.name }
                                )}
                                href={link.href}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}
                                {
                                    link.name === activeSection && (
                                        <motion.span
                                            layoutId="activeLink"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            className="bg-gray-100 dark:bg-gray-800 rounded-full absolute inset-0 -z-10"
                                        />
                                    )
                                }
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks;
