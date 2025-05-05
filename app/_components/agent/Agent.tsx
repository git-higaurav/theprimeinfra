"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Manoj Jayant",
        role: "Sales Manager", 
        description: "10+ years of experience in Dehradun real estate market",
        image: "/agents/mj.png",
        phone: "+91 8057235806",
        email: "sales@theprimeinfra.com"
    },
    {
        name: "Deepak  kathayat",
        role: "Sales Executive",
        description: "Specializes in residential properties and client relations", 
        image: "/agents/deepak.png",
        phone: "+91 8979894770",
        email: "sales@theprimeinfra.com"
    },
    {
        name: "Sweety Sharma",
        role: "Sales Executive",
        description: "Expert in property valuation and market analysis",
        image: "/agents/sweety.png",
        phone: "+91 8057235806",
        email: "sales@theprimeinfra.com"
    }
];

export default function Agent() {
    return (
        <section id='team' className="relative py-24 md:py-32 px-4 md:px-8 bg-white overflow-hidden">
            {/* Animated Background Shapes */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-24 right-24 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gray-100/60 to-transparent blur-3xl"
            />
            <motion.div
                animate={{
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-24 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gray-100/60 to-transparent blur-3xl"
            />

            <div className="container mx-auto relative z-10 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Meet Our Expert Team</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Our dedicated team of real estate professionals brings years of local market expertise to help you find your ideal property in Dehradun.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mb-20 px-4">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative w-full h-72 overflow-hidden bg-gray-50">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index === 0}
                                    quality={95}
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{member.name}</h3>
                                <p className="text-gray-600 font-medium mb-4 text-lg">{member.role}</p>
                                <p className="text-gray-500 mb-8 text-base leading-relaxed">{member.description}</p>
                                    
                                <div className="flex flex-col space-y-4">
                                    <motion.a
                                        href={`tel:${member.phone}`}
                                        className="flex items-center justify-center space-x-3 bg-gray-800 text-white py-3 px-6 rounded-xl hover:bg-gray-700 transition-all font-semibold text-base"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span>Call Now</span>
                                    </motion.a>
                                    
                                    <motion.a
                                        href={`mailto:${member.email}`}
                                        className="flex items-center justify-center space-x-3 bg-gray-50 text-gray-800 py-3 px-6 rounded-xl hover:bg-gray-100 transition-all font-semibold text-base border border-gray-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <span>Email</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center px-4"
                >
                    <motion.a
                        href="https://wa.me/918057235806"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1ea952] transition-all shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>Chat with Us on WhatsApp</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}