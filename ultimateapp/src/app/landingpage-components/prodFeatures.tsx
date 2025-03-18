"use client";

import React from 'react';
import Image from 'next/image';



const ProdFeature: React.FC = () => {
    return (
        <div>
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold mb-3 tracking-wide">
                OUR FEATURES
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Tools, mentorship, and resources specifically designed to help
                CS students land their first tech job.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {[
                "Mentorship sessions",
                "Resume building",
                "Interview prep",
                "Job placement",
              ].map((alt, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden h-48">
                  <Image
                    src={`/api/placeholder/300/200?text=${encodeURIComponent(
                      alt
                    )}`}
                    alt={alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
        </div>
    );
};

export default ProdFeature;