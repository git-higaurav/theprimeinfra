"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactUs() {
    return (
        <section className="relative min-h-screen py-12 md:py-20 px-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#edc135]/5 to-transparent blur-2xl"
            />
            <motion.div
                animate={{
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#edc135]/10 to-transparent blur-2xl"
            />

            <div className="container mx-auto relative z-10 max-w-5xl">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#edc135] to-[#d4af37] bg-clip-text text-transparent mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Get in touch with us for any queries about properties in Dehradun. We're here to help you find your perfect property!
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Quick Contact Box */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#1a2338] p-6 md:p-8 rounded-2xl shadow-lg border border-[#edc135]/20"
                        >
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#edc135] to-[#d4af37] bg-clip-text text-transparent mb-6">Quick Contact</h3>
                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:sales@theprimeinfra.com"
                                    className="flex items-center space-x-4 text-gray-300 hover:text-[#edc135] transition-all duration-300 group p-3 rounded-lg hover:bg-[#edc135]/5"
                                    whileHover={{ x: 8 }}
                                >
                                    <span className="p-2 bg-[#edc135]/10 rounded-lg group-hover:bg-[#edc135]/20">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">sales@theprimeinfra.com</span>
                                </motion.a>

                                <motion.a
                                    href="tel:+918057235806"
                                    className="flex items-center space-x-4 text-gray-300 hover:text-[#edc135] transition-all duration-300 group p-3 rounded-lg hover:bg-[#edc135]/5"
                                    whileHover={{ x: 8 }}
                                >
                                    <span className="p-2 bg-[#edc135]/10 rounded-lg group-hover:bg-[#edc135]/20">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">+91 8057235806</span>
                                </motion.a>

                                <motion.a
                                    href="https://wa.me/918057235806"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-4 text-gray-300 hover:text-[#25D366] transition-all duration-300 group p-3 rounded-lg hover:bg-[#25D366]/5"
                                    whileHover={{ x: 8 }}
                                >
                                    <span className="p-2 bg-[#25D366]/10 rounded-lg group-hover:bg-[#25D366]/20">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </span>
                                    <span className="font-medium">WhatsApp Us</span>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Office Hours Box */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#1a2338] p-6 md:p-8 rounded-2xl shadow-lg border border-[#edc135]/20"
                        >
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#edc135] to-[#d4af37] bg-clip-text text-transparent mb-6">Office Hours</h3>
                            <div className="space-y-4">
                                <p className="text-gray-300 flex justify-between items-center bg-[#edc135]/5 p-3 rounded-lg">
                                    <span className="font-medium">Monday - Saturday</span>
                                    <span>10:00 AM - 7:00 PM</span>
                                </p>
                                <p className="text-gray-300 flex justify-between items-center bg-[#edc135]/5 p-3 rounded-lg">
                                    <span className="font-medium">Sunday</span>
                                    <span>By Appointment</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-[#1a2338] p-6 md:p-8 rounded-2xl shadow-lg border border-[#edc135]/20"
                        >
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#edc135] to-[#d4af37] bg-clip-text text-transparent mb-6">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <motion.a
                                    href="https://www.facebook.com/theprimeinfra/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-[#edc135]/10 rounded-lg text-gray-300 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-300 flex-1 text-center"
                                    whileHover={{ y: -5 }}
                                >
                                    <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                                    </svg>
                                    <span className="text-sm mt-2 block">Facebook</span>
                                </motion.a>
                                <motion.a
                                    href="https://instagram.com/theprimeinfra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-[#edc135]/10 rounded-lg text-gray-300 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300 flex-1 text-center"
                                    whileHover={{ y: -5 }}
                                >
                                    <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    <span className="text-sm mt-2 block">Instagram</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Map */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-[#1a2338] p-6 md:p-8 rounded-2xl shadow-lg border border-[#edc135]/20"
                    >
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#edc135] to-[#d4af37] bg-clip-text text-transparent mb-6">Visit Our Office</h3>
                        <div className="rounded-lg overflow-hidden mb-4">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.9995373058711!2d78.06722936897617!3d30.361407985665256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7cd91b3de7d%3A0x76b1844014e0e8dc!2sThe%20Prime%20Infra!5e0!3m2!1sen!2sin!4v1738330978090!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <motion.a
                                href="https://goo.gl/maps/your-location-link-here" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-[#edc135] to-[#d4af37] rounded-lg hover:opacity-90 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Get Directions
                            </motion.a>
                            <motion.button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: 'The Prime Infra Location',
                                            text: 'Check out The Prime Infra office location!',
                                            url: 'https://maps.app.goo.gl/LBBHkmZyqxXSVHGM9'
                                        })
                                    }
                                }}
                                className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#edc135] border-2 border-[#edc135] rounded-lg hover:bg-[#edc135]/10 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                                </svg>
                                Share Location
                            </motion.button>
                        </div>
                        <div className="bg-[#edc135]/5 p-4 rounded-lg">
                            <p className="text-gray-300 text-sm">
                                <span className="font-medium text-[#edc135]">Address:</span> 2nd Floor, Shivam Tower, Rajpur Rd, Jakhan, Dehradun, Uttarakhand 248001
                            </p>
{/*                             <p className="text-gray-300 text-sm mt-2">
                                <span className="font-medium text-[#edc135]">Landmark:</span> Near Clock Tower, Opposite City Mall
                            </p> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
