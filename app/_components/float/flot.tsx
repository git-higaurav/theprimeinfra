"use client";

import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Float() {
    const [isOpen, setIsOpen] = useState(false);

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-2">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="flex flex-col gap-2 mb-2"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0.8 }
                        }}
                    >
                        <motion.button 
                            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
                            onClick={() => window.open('https://maps.google.com', '_blank')}
                            variants={buttonVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MapPin size={24} />
                        </motion.button>
                        <motion.button 
                            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
                            onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
                            variants={buttonVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MessageCircle size={24} />
                        </motion.button>
                        <motion.button 
                            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
                            onClick={() => window.open('tel:yourphonenumber')}
                            variants={buttonVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Phone size={24} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button 
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
                animate={{ rotate: isOpen ? 135 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Plus size={24} />
            </motion.button>
        </div>
    );
}