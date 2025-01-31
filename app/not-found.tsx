export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full text-center space-y-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 animate-pulse">
                    404
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200">
                    Oops! Page Not Found
                </h2>
                <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto">
                    We're working diligently to expand our platform with new and exciting pages. 
                    This section is currently under development and will be available soon.
                </p>
                <div className="pt-4">
                    <a 
                        href="/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-[#edc135] to-[#d4a82b] text-black rounded-lg font-medium hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-[#edc135]/50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Back to Homepage
                    </a>
                </div>
            </div>
        </div>
    );
}
