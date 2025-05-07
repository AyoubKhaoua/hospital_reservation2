import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
 
    return (
        <>
        <div className='bg-[#131619] min-h-screen'>
    {/* Header avec fond semi-transparent */}
    <header className="sticky top-4 inset-x-0 bg-[#1a1d21]/80 backdrop-blur-md border-b border-[#2d3239]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <ApplicationLogo className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold text-white"></span>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-6">
                <a href={route('register')} className="text-[#8b929a] hover:text-green-500 transition-colors">
                    Register
                </a>
                <a href={route('login')} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors">
                    Log in
                </a>
            </div>
        </nav>
    </header>

    {/* Hero Section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
                <h1 className="text-5xl font-bold text-white leading-tight">
                    Your Health, 
                    <span className="text-green-500 block mt-2">Your Schedule</span>
                </h1>
                
                <p className="text-lg text-[#8b929a] leading-relaxed">
                    Welcome to your one-stop solution for health management. 
                    Book appointments with top-rated doctors in just a few clicks.
                </p>

                {/* CTA Button */}
                <a href="/dashboard" className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl transition-colors">
                    <span className="text-white font-semibold text-lg">Book Appointment</span>
                    <svg className="ml-3 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>

            {/* Image Section */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img 
                    src="/doc.jpg" 
                    alt="Doctor illustration" 
                    className="relative z-10 rounded-2xl transform hover:scale-105 transition-transform"
                />
            </div>
        </div>
    </div>
</div> {/* 
        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
            Laravel v{laravelVersion} (PHP v{phpVersion})
        </footer> */}
        </>
    );
}