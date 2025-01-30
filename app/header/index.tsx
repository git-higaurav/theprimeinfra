"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { 
        href: '/buy', 
        label: 'Buy',
        submenu: [
            { href: '/buy/residential', label: 'Residential' },
            { href: '/buy/commercial', label: 'Commercial' },
            { href: '/buy/luxury', label: 'Luxury Estates' },
        ]
    },
    { 
        href: '/rent', 
        label: 'Rent',
        submenu: [
            { href: '/rent/apartments', label: 'Apartments' },
            { href: '/rent/houses', label: 'Houses' },
            { href: '/rent/offices', label: 'Office Spaces' },
        ]
    },
    { href: '/sell', label: 'Sell' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileNavOpen]);

    const headerClass = `fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg py-2' : 'bg-transparent py-4'
    }`;

    const SubmenuContent = ({ items }: { items: Array<{ href: string; label: string }> }) => (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-48 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-2"
        >
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all"
                >
                    {item.label}
                </Link>
            ))}
        </motion.div>
    );

    return (
        <header className={headerClass}>
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="text-2xl font-bold text-white hover:opacity-90 transition-all">
                            The Prime Infra
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div key={item.href} className="relative group">
                                <motion.div
                                    className="flex items-center cursor-pointer"
                                    onHoverStart={() => setActiveSubmenu(item.href)}
                                    onHoverEnd={() => setActiveSubmenu(null)}
                                >
                                    <span className="text-gray-200 hover:text-white transition-colors flex items-center gap-1">
                                        {item.label}
                                        {item.submenu && (
                                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                        )}
                                    </span>
                                    {item.submenu && activeSubmenu === item.href && (
                                        <AnimatePresence>
                                            <SubmenuContent items={item.submenu} />
                                        </AnimatePresence>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-white z-50"
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    >
                        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileNavOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black md:hidden overflow-y-auto z-40"
                        >
                            <div className="flex flex-col h-full">
                                {/* Logo Section in Mobile Menu */}
                                <div className="p-6 border-b border-gray-800">
                                    <Link href="/" className="text-2xl font-bold text-white">
                                        The Prime Infra
                                    </Link>
                                </div>

                                {/* Navigation Items */}
                                <div className="flex-1 overflow-y-auto p-6">
                                    <div className="flex flex-col space-y-6">
                                        {navItems.map((item) => (
                                            <div key={item.href} className="flex flex-col">
                                                <button
                                                    onClick={() => setActiveSubmenu(activeSubmenu === item.href ? null : item.href)}
                                                    className="text-xl text-gray-200 hover:text-white py-2 flex items-center justify-between"
                                                >
                                                    {item.label}
                                                    {item.submenu && (
                                                        <ChevronDown
                                                            className={`w-5 h-5 transition-transform ${
                                                                activeSubmenu === item.href ? 'rotate-180' : ''
                                                            }`}
                                                        />
                                                    )}
                                                </button>
                                                <AnimatePresence>
                                                    {item.submenu && activeSubmenu === item.href && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pl-4 space-y-4 mt-4"
                                                        >
                                                            {item.submenu.map((subItem) => (
                                                                <Link
                                                                    key={subItem.href}
                                                                    href={subItem.href}
                                                                    className="block text-lg text-gray-300 hover:text-white py-2"
                                                                >
                                                                    {subItem.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Section with CTA */}
                                <div className="p-6 border-t border-gray-800">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full px-6 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
                                    >
                                        Get Started
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}