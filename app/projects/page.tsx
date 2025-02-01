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
    title: "Kings Residency",
    description: "Experience luxury living at its finest with our newest development featuring stunning architecture and world-class amenities.",
    location: "Main Rajpur Road, Dehradun",
    images: [
        "/projects/1.png",
        "/projects/2.png",
        "/projects/3.png",
        "/projects/4.png",
        "/projects/5.png",
        "/projects/6.png"  
    ],
    features: [
        "Security",
        "Covered Car Parking", 
        "Prime Location",
        "Gated Society",
        "CCTV Surveillance",
        "Connected Balconies"
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
    priceRange: "Starting from ₹1.5Cr",
    completionDate: "Completed"
};

export default function OnGoingProject() {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918057235806', '_blank');
    };

    const handleDirectionsClick = () => {
        window.open('https://www.google.com/maps/dir//Kings+Residency/@30.384069,78.089316,21z', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-2 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">{projectDetails.title}</h1>
                    <p className="text-lg sm:text-xl text-gray-300">{projectDetails.description}</p>
                </motion.div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-16">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="col-span-2 row-span-2 relative h-[400px] sm:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden"
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
                            className="relative h-[200px] sm:h-[290px] rounded-xl sm:rounded-2xl overflow-hidden"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-700"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Premium Features</h2>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {projectDetails.features?.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-700"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Project Details</h2>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <span className="text-emerald-400">Location:</span>
                                <span className="text-sm sm:text-base text-gray-300">{projectDetails.location}</span>
                            </div>
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <span className="text-emerald-400">Price Range:</span>
                                <span className="text-sm sm:text-base text-gray-300">{projectDetails.priceRange}</span>
                            </div>
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <span className="text-emerald-400">Completion:</span>
                                <span className="text-sm sm:text-base text-gray-300">{projectDetails.completionDate}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Property Layout Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full mb-8 sm:mb-16"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Property Layout</h2>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-700">
                        <Image 
                            src="/projects/plan.png"
                            alt="Property Layout Map"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-xl sm:rounded-2xl"
                            unoptimized={true}
                        />
                    </div>
                </motion.div>

                {/* Google Maps Location */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full mb-8 sm:mb-16"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Location</h2>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-700">
                        <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575.8714034280464!2d78.08931610624131!3d30.384069256624098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d798459d27f3%3A0xb6cd28b09fe48000!2sKings%20Residency!5e1!3m2!1sen!2sin!4v1738397366218!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <button
                            onClick={handleDirectionsClick}
                            className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors duration-300"
                        >
                            Get Directions
                        </button>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-16"
                >
                    <a
                        href="https://drive.google.com/uc?export=download&id=1FogTQIQsOQVzdqN26I0bdGkdXOMh7d0p"
                        download
                        className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-300 text-center"
                    >
                        Download Brochure
                    </a>
                    <button
                        onClick={handleWhatsAppClick}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-300"
                    >
                        Contact Us on WhatsApp
                    </button>
                </motion.div>
            </div>
        </div>
    );
}