// src/components/mentors/MentorList.tsx
import Link from 'next/link';
// import Image from 'next/image';

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

interface MentorListProps {
  mentors: Mentor[];
}

export default function MentorList({ mentors }: MentorListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mentors.map((mentor) => (
        <div 
          key={mentor.id} 
          className="bg-dark-700 rounded-xl overflow-hidden border border-dark-600 transition-transform hover:scale-105"
        >
          <Link href={`/mentors/${mentor.id}`} className="block h-full">
            <div className="p-6">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-600/30 to-dark-900 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white/30">{mentor.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                  <p className="text-gray-400 text-sm">{mentor.role}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="ml-1 text-white text-sm">{mentor.rating}</span>
                    <span className="ml-1 text-gray-400 text-xs">({mentor.totalSessions} sessions)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {mentor.expertise.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-dark-600 text-primary-300 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">{mentor.about}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs">Available</p>
                  <p className="text-white text-sm">{mentor.availability}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Hourly Rate</p>
                  <p className="text-primary-400 font-semibold">${mentor.hourlyRate}/hr</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
