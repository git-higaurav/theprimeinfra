"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#team', label: 'Team' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
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

    return (
        <header className={headerClass}>
            <nav className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-shrink-0"
                    >
                        <Link 
                            href="/" 
                            className="text-xl sm:text-2xl font-bold text-white hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
                            aria-label="Home"
                        >
                            The <span className='text-[#edc135]'>Prime</span> Infra
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1"
                            >
                                {item.label}
                            </Link>
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
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black md:hidden z-[105]"
                                onClick={() => setIsMobileNavOpen(false)}
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-[#111111] md:hidden overflow-y-auto z-[106] shadow-xl"
                                role="dialog"
                                aria-modal="true"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Logo Section in Mobile Menu */}
                                    <div className="p-4 border-b border-white/10">
                                        <Link 
                                            href="/" 
                                            className="text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg inline-block"
                                            onClick={() => setIsMobileNavOpen(false)}
                                        >
                                            The <span className='text-[#edc135]'>Prime</span> Infra
                                        </Link>
                                    </div>

                                    {/* Navigation Items */}
                                    <motion.div 
                                        className="flex-1 overflow-y-auto py-6 px-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="flex flex-col space-y-4">
                                            {navItems.map((item, index) => (
                                                <motion.div
                                                    key={item.href}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + 0.2 }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className="text-lg text-gray-200 hover:text-white py-2 px-3 rounded-lg block hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
                                                        onClick={() => setIsMobileNavOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Bottom Section with Login Button */}
                                    <div className="p-4 border-t border-white/10">
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
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}