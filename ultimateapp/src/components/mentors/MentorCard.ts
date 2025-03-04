// src/components/mentors/MentorCard.tsx
import React from 'react';
import { StarIcon, ClockIcon, CalendarIcon, CurrencyDollarIcon } from '@heroicons/react/solid';

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  rating: number;
  totalSessions: number;
  imageUrl: string;
  availability: string;
  hourlyRate: number;
  about: string;
}

interface MentorCardProps {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="bg-dark-800 rounded-xl border border-dark-600 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Mentor image */}
        <div className="md:w-1/4 flex-shrink-0">
          <img 
            src={mentor.imageUrl} 
            alt={`${mentor.name}, ${mentor.role}`}
            className="w-full h-48 md:h-full object-cover";
          />
        </div>
        
        {/* Mentor details */}
        <div className="p-6 md:w-3/4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
              <p className="text-indigo-400">{mentor.role}</p>
            </div>
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-white">{mentor.rating.toFixed(1)}</span>
              <span className="ml-1 text-gray-400">({mentor.totalSessions} sessions)</span>
            </div>
          </div>
          
          {/* Expertise tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dark-700 text-sm text-indigo-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* About section */}
          <p className="text-gray-300 mb-6 line-clamp-2">{mentor.about}</p>
          
          {/* Bottom info */}
          <div className="flex flex-wrap justify-between mt-auto">
            <div className="flex items-center mr-4 mb-2">
              <CalendarIcon className="h-5 w-5 text-gray-400 mr-1" />
              <span className="text-gray-300">{mentor.availability}</span>
            </div>
            <div className="flex items-center mb-2">
              <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-1" />
              <span className="text-gray-300">${mentor.hourlyRate}/hour</span>
            </div>
          </div>
          
          {/* Button */}
          <div className="mt-4">
            <button
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}