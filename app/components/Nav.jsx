'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';


import { X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '@/public/logo.png'; // Ensure path is correct

const Navbars = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', hash: 'about' },
    { name: 'Services', hash: 'publications' },
    { name: 'Connect Us', hash: 'connect' },
    { name: 'Events & Workshops', hash: 'workshops' },
    { name: 'Collaborate With Us', hash: 'collaborations' },
    { name: 'Research & Development', hash: 'technologies' },
    { name: 'Contact Us', hash: 'contact' },
    { name: 'Payments', hash: 'payments' },
  ];

  const renderNavItem = (item) => {
    const linkHref = item.href
      ? item.href
      : isHome
      ? `#${item.hash}`
      : `/#${item.hash}`;

    return (
      <Link
        href={linkHref}
        scroll={true}
        className="text-black hover:text-[#e55d00]"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md p-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="S3 Logo"
              width={150}
              height={60}
              className="mr-4"
            />
          </div>

          {/* Hamburger Icon */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-black" />
            )}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-wrap gap-4 text-base lg:text-xl font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>{renderNavItem(item)}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Image src={logo} alt="Logo" width={150} height={40} />
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} className="text-black" />
            </button>
          </div>
          <ul className="space-y-6 text-lg text-black">
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => setMenuOpen(false)}>
                {renderNavItem(item)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbars;
