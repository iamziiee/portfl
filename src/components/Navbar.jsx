import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }
  return (
    <div className="flex text-1xl justify-between text-gray-200 items-center px-6 max-w-[1300px] mx-auto h-24">
        {/* <a href="./src/assets/logo.png" className='transform transition-transform hover:scale-105 hover:shadow-lg
                z-10 cursor-poiter font-sm text-gray-200 mt-2 p-2 bg-gradient-to-r
                from-[#3d3f3d] via-[#1d1f1e] to-[#3d6ca4] rounded-xl'>MRF</a> */}
        <img src="./src/assets/logo.png" className='w-[30px] md:w-[30px] rounded-full'/>


        <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
            <li className='relative group'>
            <Link to="about" smooth={true} offset={50} duration={500}>About</Link>
            <span className='absolute bottom-0 left-0 w-full h-1 bg-red-300 transform scale-x-0 group-hover:scale-x-100
            transition-transform duration-300 ease-in-out'></span>
            </li>
            <li className='relative group'>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link>
            <span className='absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100
            transition-transform duration-300 ease-in-out'></span>
            </li>
            <li className='relative group'>
            <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
            <span className='absolute bottom-0 left-0 w-full h-1 bg-green-200 transform scale-x-0 group-hover:scale-x-100
            transition-transform duration-300 ease-in-out'></span>
            </li>
        </ul>

        <div onClick={toggleNav} className='md:hidden z-30'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={nav ? 'text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]' : 'fixed left-[-100%]'}>
            <ul className='font-semibold text-1xl space-y-8 mt-24'>
                <li>
                <Link to="about" onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link>
                </li>
                <li>
                <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link>
                </li>
                <li>
                <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar