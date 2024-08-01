'use client'
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { primaryColor } from '../globalvar';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = React.useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Services', path: '/services' },
        { name: 'Visit Us', path: '/visit' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'News and Updates', path: '/news' },
        { name: 'Contact Us', path: '/contact' },
    ];

    React.useEffect(() => {
        setMenuOpen(false);
    },[pathname])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const classActive = `flex cursor-pointer items-center pb-2 text-[#bc2e30] space-x-4 px-2 border-b-2 border-[#bc2e30]`;
    const classUnActive = `flex items-center cursor-pointer pb-2 space-x-4 text-black transition-all px-2 duration-300 hover:text-[#bc2e30] hover:border-b-2 hover:border-[#bc2e30]`;

    const classActiveMobile = `flex w-full cursor-pointer items-center p-4 text-white space-x-4 bg-[#bc2e30]`;
    const classUnActiveMobile = `flex w-full items-center cursor-pointer space-x-4 text-black transition-all duration-300 hover:text-white p-4 hover:bg-[#bc2e30]`;
    return (
        <nav className='flex items-center bg-gray-100 justify-between sm:p-4 p-2 sticky top-0 left-0'>
            <div>
                <Image src={"/logo.png"} height={80} width={80}></Image>
            </div>
            <div>
                <ul className='lg:flex hidden items-center space-x-8 justify-center w-full'>
                    {
                        menuItems.map((item, idx) => {
                            return <Link key={idx} href={item.path}><li className={item.path === pathname ? classActive : classUnActive}>{item.name}</li></Link>
                        })
                    }
                </ul>

                <div onClick={toggleMenu} className='p-1 lg:hidden block text-xl rounded-lg border-2 border-[#bc2e30] cursor-pointer hover:bg-[#bc2e30] hover:text-white text-[#bc2e30]'>
                    {!menuOpen ? <MdOutlineMenu fontSize={32}></MdOutlineMenu> : <IoMdClose fontSize={32}></IoMdClose>}
                </div>

                <div className={menuOpen ? 'min-w-[50%] absolute md:hidden flex flex-col items-start top-20 right-0 bg-white z-[1001] shadow-md' : 'hidden'}>
                    {
                        menuItems.map((item, idx) => {
                            return <Link className='w-full' key={idx} href={item.path}><li className={item.path === pathname ? classActiveMobile : classUnActiveMobile}>{item.name}</li></Link>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}


export default Navbar;