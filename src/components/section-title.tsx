
type SectionTitleProps = {
    children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
    return (
        <h2 className="text-2xl md:text-4xl font-medium capitalize mb-8 md:mb-10 lg:mb-12 text-center">
            {children}
        </h2>
    );
}

export default SectionTitle;