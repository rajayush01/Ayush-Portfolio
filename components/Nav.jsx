"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope, } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const links = [
    {
        name: 'home',
        path: '/',
        icon: <HiHome />,
    },
    {
        name: 'about',
        path: '/about',
        icon: <HiUser />,
    },
    {
        name: 'services',
        path: '/services',
        icon: <HiRectangleGroup />,
    },
    {
        name: 'work',
        path: '/work',
        icon: <HiViewColumns />,
    },
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope />,
    },
]

const LinkName = ({ name, isHovered }) => (
    <div
        className={`absolute capitalize top-1/3 right-full -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} sm:block hidden`}
    >
        {name}
    </div>
);

const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;
    const [activeLink, setActiveLink] = useState(pathname);
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleLinkClick = (path) => {
        setActiveLink(path);
        router.push(path);
    };

    return (
        <nav className='flex flex-col items-center justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen'>
            <div className='flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[80px] bg-white/10 lg:h-max py-8 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full'>
                {links.map((link, index) => (
                    <div
                        key={index}
                        className='relative'
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <Link href={link.path} onClick={() => handleLinkClick(link.path)}>
                            <div
                                className={`transition-colors duration-300 ${activeLink === link.path || hoveredLink === link.name ? 'text-red-500' : 'text-white'}`}
                            >
                                {link.icon}
                            </div>
                        </Link>
                        <LinkName name={link.name} isHovered={hoveredLink === link.name} />
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
