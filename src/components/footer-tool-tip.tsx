import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github } from "@/lib/icons";

export function AboutTheWebSite() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className="font-semibold text-sm cursor-pointer">About this website</span>
                </TooltipTrigger>
                <TooltipContent
                    className="max-w-[350px] sm:max-w-none rounded-lg dark:bg-white/10 dark:text-white/80 text-sm flex-col flex-wrap gap-2 items-center justify-center"
                >
                    <p>
                        Crafted by Stefan Vitoria, utilizing React & Next.js (employing App Router & Server Actions),
                        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend. It is live on Vercel.
                    </p>

                    <a
                        className="text-xs underline flex items-center justify-center gap-2"
                        href="https://github.com/Steravy"
                        target="_blank"
                    >
                        The source code is on
                        <Github className="h-4 w-4 text-gray-600 transition-colors group-hover:text-black" />
                    </a>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
