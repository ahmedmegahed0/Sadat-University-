import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicLayout({ children }) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden w-full max-w-[100vw]">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
