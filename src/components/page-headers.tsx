import { cn } from "@/lib/utils"
import Balance from "react-wrap-balancer"


function PageHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={cn(
                "mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20",
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

function PageHeaderHeading({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                `text-center text-5xl md:text-7xl lg:text-9xl z-10 font-bold
                 hover:scale-110 duration-1000 cursor-default animate-title leading-tight tracking-normal lg:leading-[1.1]`,
                className
            )}
            {...props}
        />
    )
}

function PageHeaderDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <Balance
            className={cn(
                "max-w-[750px] text-center text-lg font-light text-muted-foreground my-12",
                className
            )}
            {...props}
        />
    )
}

function PageActions({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex w-full items-center justify-center space-x-4",
                className
            )}
            {...props}
        />
    )
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription, PageActions }