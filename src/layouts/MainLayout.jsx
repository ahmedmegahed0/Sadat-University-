import React from 'react';
import Navbar from '../components/navbar/Navbar';
import TopHeader from '../components/header/TopHeader';
import Footer from '../components/footer/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden w-full max-w-[100vw]">
            <TopHeader />
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
