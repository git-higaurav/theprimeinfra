"use client";
import { useState } from 'react';
import { Menu, Home, User, Building2, Settings, LogOut, MessageSquare, TrendingUp, Package } from 'lucide-react';

export default function Dashboard() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Drawer Button - Fixed Position for Mobile */}
            <button 
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Drawer */}
            <div className={`fixed lg:static w-64 h-full bg-white shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}>
                <div className="flex flex-col h-full">
                    {/* Admin Profile */}
                    <div className="p-6 text-center border-b">
                        <div className="relative w-20 h-20 mx-auto mb-4">
                            <img 
                                src="/avatar-placeholder.jpg" 
                                alt="Admin"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-semibold">Admin Name</h2>
                        <p className="text-gray-500 text-sm">Administrator</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            {[
                                { icon: Home, label: 'Dashboard', active: true },
                                { icon: User, label: 'Profile' },
                                { icon: Building2, label: 'Property' },
                                { icon: Settings, label: 'Settings' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className={`flex items-center p-3 rounded-lg ${item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}>
                                        <item.icon className="h-5 w-5 mr-3" />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Logout Button */}
                    <div className="p-4 border-t">
                        <button className="flex items-center w-full p-3 text-red-600 rounded-lg hover:bg-red-50">
                            <LogOut className="h-5 w-5 mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 lg:p-10 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Stats Cards */}
                    {[
                        { icon: Building2, label: 'Total Listings', value: '156', color: 'bg-blue-500' },
                        { icon: MessageSquare, label: 'New Messages', value: '24', color: 'bg-green-500' },
                        { icon: TrendingUp, label: 'Total Views', value: '2.4K', color: 'bg-purple-500' },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center">
                                <div className={`${stat.color} p-3 rounded-lg`}>
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-500 text-sm">{stat.label}</p>
                                    <h3 className="text-2xl font-semibold">{stat.value}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trending Properties Section */}
                <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-6">Trending Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="border rounded-lg overflow-hidden">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-4">
                                    <h3 className="font-semibold">Property Name</h3>
                                    <p className="text-gray-500 text-sm">Location</p>
                                    <div className="mt-2 flex items-center justify-between">
                                        <span className="text-blue-600 font-semibold">$250,000</span>
                                        <span className="text-gray-500 text-sm">3 days ago</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}