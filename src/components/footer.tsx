import SocialsLinks from "./social-links";



export default function Footer() {

    return (
        <footer className="flex flex-col items-center justify-center gap-2 text-muted-foreground mb-5">

            <SocialsLinks />

            <small className="mb-2 block text-xs">
                &copy; Scraping Ninja {new Date().getFullYear()}. All rights reserved.
            </small>

        </footer>
    );
}
