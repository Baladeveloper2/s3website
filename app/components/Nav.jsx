'use client'; // Only if using app directory
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '@/public/logo.png'; // Adjust if your logo is in public folder

const Navbars = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'publications' },
    { name: 'Connect Us', id: 'connect' },
    { name: 'Events & Workshops', id: 'workshops' },
    { name: 'Collaborate With Us', id: 'collaborations' },
    { name: 'Research & Development', id: 'technologies' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'Payments', id: 'payments' },
  ];

  const renderNavItem = (item) => {
    if (item.href) {
      return (
        <Link href={item.href} className="text-black hover:text-[#e55d00]">
          {item.name}
        </Link>
      );
    }

    return isHome ? (
      <ScrollLink
        to={item.id}
        smooth
        duration={300}
        offset={-80}
        className="text-black hover:text-[#e55d00] cursor-pointer"
      >
        {item.name}
      </ScrollLink>
    ) : (
      <Link
        href={`/#${item.id}`}
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
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
