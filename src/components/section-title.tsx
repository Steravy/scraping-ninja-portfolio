import { motion } from "framer-motion";

type SectionTitleProps = {
    children: React.ReactNode;
    shouldAnimate?: boolean;
};

const SectionTitle = ({ children, shouldAnimate }: SectionTitleProps) => {

    if (shouldAnimate) {
        return (
            <motion.h2
                className="text-2xl md:text-4xl font-medium capitalize mb-8 md:mb-10 lg:mb-12 text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
            >
                {children}
            </motion.h2>
        )
    }

    return (
        <h2 className="text-2xl md:text-4xl font-medium capitalize mb-8 md:mb-10 lg:mb-12 text-center">
            {children}
        </h2>
    );
}

export default SectionTitle;