"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

interface OngoingProject {
    id: number;
    title: string;
    description: string;
    location: string;
    images: string[];
    features?: string[];
    amenities?: string[];
    specifications?: {
        [key: string]: string;
    };
    priceRange?: string;
    completionDate?: string;
}

const projectDetails: OngoingProject = {
    id: 1,
    title: "Skyline Residences",
    description: "Experience luxury living at its finest with our newest development featuring stunning architecture and world-class amenities.",
    location: "Silicon Valley, Bangalore",
    images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"  
    ],
    features: [
        "Smart Home Automation",
        "Infinity Pool", 
        "Private Theater",
        "Rooftop Garden",
        "EV Charging Stations",
        "Concierge Service"
    ],
    amenities: [
        "Spa & Wellness Center",
        "Wine Cellar",
        "Pet Park",
        "Business Lounge",
        "Sky Lounge"
    ],
    specifications: {
        "Structure": "Earthquake Resistant Design",
        "Walls": "Double Glazed Windows",
        "Flooring": "Italian Marble",
        "Security": "Biometric Access",
        "Connectivity": "High-Speed Fiber Optic"
    },
    priceRange: "₹2.5Cr - ₹5.8Cr",
    completionDate: "March 2025"
};

export default function OnGoingProject() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-white mb-6">{projectDetails.title}</h1>
                    <p className="text-xl text-gray-300">{projectDetails.description}</p>
                </motion.div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="col-span-2 row-span-2 relative h-[600px] rounded-3xl overflow-hidden"
                    >
                        <Image
                            src={projectDetails.images[0]}
                            alt="Main Project View"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            priority
                            unoptimized={true}
                        />
                    </motion.div>
                    {projectDetails.images.slice(1).map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative h-[290px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src={img}
                                alt={`Project View ${index + 2}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                unoptimized={true}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Premium Features</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {projectDetails.features?.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-emerald-400">Location:</span>
                                <span className="text-gray-300">{projectDetails.location}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-emerald-400">Price Range:</span>
                                <span className="text-gray-300">{projectDetails.priceRange}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-emerald-400">Completion:</span>
                                <span className="text-gray-300">{projectDetails.completionDate}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Property Layout Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full mb-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Property Layout</h2>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700">
                        <Image 
                            src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2070"
                            alt="Property Layout Map"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-2xl"
                            unoptimized={true}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div className="text-gray-300">
                                <h3 className="text-emerald-400 font-semibold mb-2">North Wing</h3>
                                <ul className="list-disc list-inside">
                                    <li>Premium Apartments</li>
                                    <li>Rooftop Garden</li>
                                    <li>Sky Lounge</li>
                                </ul>
                            </div>
                            <div className="text-gray-300">
                                <h3 className="text-emerald-400 font-semibold mb-2">Central Area</h3>
                                <ul className="list-disc list-inside">
                                    <li>Swimming Pool</li>
                                    <li>Clubhouse</li>
                                    <li>Landscaped Gardens</li>
                                </ul>
                            </div>
                            <div className="text-gray-300">
                                <h3 className="text-emerald-400 font-semibold mb-2">South Wing</h3>
                                <ul className="list-disc list-inside">
                                    <li>Luxury Suites</li>
                                    <li>Spa & Wellness</li>
                                    <li>Private Theater</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}