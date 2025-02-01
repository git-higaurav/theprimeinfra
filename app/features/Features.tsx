"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCard {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    status: 'Completed' | 'Ongoing' | 'Upcoming';
    callToAction? : string;
}

const projects: ProjectCard[] = [
    {
        id: 1,
        title: "Kings Residency",
        description: "2 & 3 BHK Luxury Apartments , Main Rajpur Road.",
        image: "./assets/Kings.png",
        location: "Dehradun",
        status: "Ongoing",
        callToAction : "Explore Project",
    },
    {
        id: 2,
        title: "Park Avenue",
        description: "2'3'4 BHK aprtment housing society , near malsi dear park, main mussouri road.",
        image: "./assets/ParkAvenue.jpg",
        location: "Dehradun",
        status: "Completed"
    },
    {
        id: 3,
        title: "Pacific golf ",
        description: "1,2,3 & penthouse Apartments Near sahastradhara, sahastradhara road",
        image: "./assets/Pacific.png",
        location: "Dehradun", 
        status: "Completed"
    },
    {
        id: 4,
        title: "Forest residency",
        description: "Studio, 2, 3 bhk aprtment and commercial space.Main mussurie road near dear malsi park. ",
        image: "./assets/Forest.jpg",
        location: "Dehradun",
        status: "Completed"
    },
    {
        id: 5,
        title: "Mega county",
        description: "2,3 bhk apartment Main mussurie road, near DIT university. ",
        image: "./assets/Mega.png",
        location: "Dehradun",
        status: "Completed"
    },
    {
        id: 6,
        title: "Doon square mall ",
        description: "Studio, service aparrtment, shops, food court and Hotel space IT park, sahastradhara road. ",
        image: "./assets/Doonsquare.png",
        location: "Dehradun",
        status: "Completed"
    },
    {
        id: 7,
        title: "ATS heavenly foothills",
        description: "ATS heavenly foothills  platting housing society,Sahastradhara road",
        image: "./assets/ATS.jpg",
        location: "Dehradun",
        status: "Completed"
    },
    {
        id: 8,
        title: "Panache valley ",
        description: "Plotting housing society Sahastradhara road, ",
        image: "./assets/Panache.jpg",
        location: "Dehradun",
        status: "Completed"
    }
];

const ProjectCard = ({ project }: { project: ProjectCard }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
            <div className="relative h-48 w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                    quality={75}
                    unoptimized={true}
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium
                        ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {project.status}
                    </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors group">
                            <svg 
                                className="w-5 h-5 mr-2 group-hover:text-emerald-500 transition-colors" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                />
                            </svg>
                            <span className="font-medium">{project.location}</span>
                        </div>
                        {project.callToAction && (
                            <Link 
                                href="/projects"
                                className="inline-flex items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                            >
                                {project.callToAction}
                                <svg 
                                    className="w-4 h-4 ml-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
                
            </div>
        </motion.div>
    );
};

export default function Features() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
                    <p className="text-xl text-gray-600">Discover our portfolio of completed and ongoing infrastructure projects</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}