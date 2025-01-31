"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Rahul Sharma",
        role: "Senior Real Estate Agent",
        description: "10+ years of experience in Dehradun real estate market",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop"
    },
    {
        name: "Priya Verma", 
        role: "Property Consultant",
        description: "Specializes in residential properties and client relations",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop"
    },
    {
        name: "Amit Kumar",
        role: "Real Estate Advisor",
        description: "Expert in property valuation and market analysis",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=870&auto=format&fit=crop"
    }
];

export default function Agent() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our experienced team of real estate professionals is here to help you find your perfect property in Dehradun.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mt-8 overflow-hidden rounded-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={false}
                                    quality={75}
                                    unoptimized={true}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-[#edc135] font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.a
                        href="https://wa.me/918057235806"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#edc135] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d4ac2d] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Our Team
                    </motion.a>
                </div>
            </div>
        </section>
    );
}