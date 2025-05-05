"use client"
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCard {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    status: 'Completed' | 'Ongoing' | 'Upcoming';
    callToAction?: string;
}

const projects: ProjectCard[] = [
    {
        id: 1,
        title: "Kings Residency",
        description: "2 & 3 BHK Luxury Apartments , Main Rajpur Road.",
        image: "./assets/Kings.png",
        location: "Dehradun",
        status: "Ongoing",
        callToAction: "Explore Project",
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
        <div id='projects' className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                    quality={75}
                    unoptimized={true}
                />
            </div>
            <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide
                        ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {project.status}
                    </span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                            className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
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
    );
};

export default function Features() {
    return (
        <section id='properties' className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our portfolio of completed and ongoing infrastructure projects</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}