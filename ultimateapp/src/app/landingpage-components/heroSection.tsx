"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-20 text-center bg-black text-white flex flex-col items-center justify-center min-h-screen">
            <div>
                <h1 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                    Welcome to
                </h1>
                <h2 className="text-4xl md:text-6xl font-extrabold">
                    UnemployedCS <br /> Students
                </h2>
                <p className="text-gray-400 mt-4 mb-10 text-lg">
                    Land the Tech Job You Deserve.
                </p>
            </div>
            <Button className="mt-40 bg-gray-900 hover:bg-gray-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-transform hover:scale-105">
                Start
            </Button>
        </section>
    );
};

export default HeroSection;