"use client"
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300 py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">The Prime Infra</h3>
                        <p className="text-sm">
                            Your trusted partner in real estate, helping you find your perfect property in Dehradun.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#edc135] transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-[#edc135] transition-colors">Properties</a></li>
                            <li><a href="#" className="hover:text-[#edc135] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#edc135] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>+91 8057235806</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>sales@theprimeinfra.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <motion.a
                                href="https://facebook.com"
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-300 hover:text-[#1877F2]"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://instagram.com"
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-300 hover:text-[#E4405F]"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-sm">
                        © {new Date().getFullYear()} The Prime Infra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}