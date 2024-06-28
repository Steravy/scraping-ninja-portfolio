'use client';

import { motion } from 'framer-motion';
import NavLinks from './nav-links';

type HeaderProps = {}

const Header = (props: HeaderProps) => {

    return (

        <header className='z-[1000] relative'>
            <motion.div
                className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none shadow-sm backdrop-blur-[0.5rem]
             sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'

                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            />
            <NavLinks />
        </header>
    )
}

export default Header;