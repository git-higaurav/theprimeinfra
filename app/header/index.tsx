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

    // Debounced scroll handler for better performance
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsScrolled(window.scrollY > 20);
            }, 100);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    // Handle escape key to close mobile menu
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileNavOpen(false);
                setActiveSubmenu(null);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileNavOpen]);

    const headerClass = `fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg py-2 shadow-lg' : 'bg-transparent py-4'
    }`;

    const SubmenuContent = ({ items }: { items: Array<{ href: string; label: string }> }) => (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-48 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg shadow-xl p-2 border border-gray-700"
        >
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
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
                        <Link 
                            href="/" 
                            className="text-2xl font-bold text-white hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
                            aria-label="Home"
                        >
                            The <span className='text-[#edc135]'>Prime</span> Infra
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
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={activeSubmenu === item.href}
                                >
                                    <span className="text-gray-200 hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1">
                                        {item.label}
                                        {item.submenu && (
                                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
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
                        <Link href="/login">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                            >
                                Login
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-white z-[110] p-2 hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileNavOpen}
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
                            className="fixed inset-0 top-0 left-0 w-full h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] md:hidden overflow-y-auto z-[105]"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex flex-col h-dvh pt-20">
                                {/* Logo Section in Mobile Menu */}
                                <div className="p-6 border-b border-gray-800">
                                    <Link 
                                        href="/" 
                                        className="text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
                                        onClick={() => setIsMobileNavOpen(false)}
                                    >
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
                                                    className="text-xl text-gray-200 hover:text-white py-2 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2"
                                                    aria-expanded={activeSubmenu === item.href}
                                                >
                                                    {item.label}
                                                    {item.submenu && (
                                                        <ChevronDown
                                                            className={`w-5 h-5 transition-transform ${
                                                                activeSubmenu === item.href ? 'rotate-180' : ''
                                                            }`}
                                                            aria-hidden="true"
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
                                                                    className="block text-lg text-gray-300 hover:text-white py-2 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2"
                                                                    onClick={() => setIsMobileNavOpen(false)}
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

                                {/* Bottom Section with      Button */}
                                <div className="p-6 border-t border-gray-800">
                                    <Link href="/login" className="block w-full">
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 text-base"
                                            onClick={() => setIsMobileNavOpen(false)}
                                        >
                                            Login
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}