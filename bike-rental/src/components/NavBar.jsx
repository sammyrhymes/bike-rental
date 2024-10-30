import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const [ navItems, setNavItems ] = useState( [
        {title:'Bikes', url: '/bikes'},
        {title:'About', url: '/about'},
        {title:'Blog', url: '/blog'},
    ] )

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='px-8 sticky top-0 inset-x-0 z-30 py-4 bg-accent text-primary'>
        <div className='container  mx-auto lg:max-w-[1000px] flex justify-between items-center'>
            <div>
                <Link to={'/'} className='text-lg font-bold'>Logo</Link>
            </div>

            <div className='hidden gap-2 md:flex'>
                {navItems.map((navItem, index) => (
                    <Link key={index} to={navItem.url}>{navItem.title}</Link>
                ))}
            </div>
            <div className='md:hidden'>
                <svg className="size-6" onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            
            {/* Sliding Menu */}
            <div className={`fixed text-accent z-30 top-0 left-0 h-full w-4/5 bg-primary shadow-lg transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex items-center justify-between p-4'>
                    <h2 className='text-lg font-bold'>Menu</h2>
                    <button onClick={handleMenu} className='text-2xl '>
                        &times; {/* X Icon */}
                    </button>
                </div>
                <div className='flex flex-col p-4'>
                    {navItems.map((navItem, index) => (
                        <Link key={index} to={navItem.url} className='py-2'>
                            {navItem.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Background Overlay */}
            {isMenuOpen && <div className='fixed inset-0 z-20 bg-black opacity-50' onClick={handleMenu}></div>}
        </div>
    </div>
  )
}
