// src/components/mentors/MentorCard.tsx
import Link from "next/link";
import Image from "next/image";

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
    <div className="bg-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-primary-500 transition-all hover:shadow-lg hover:shadow-primary-900/20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-40 h-40 md:h-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-dark-900"></div>
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white opacity-30">
            {mentor.name.charAt(0)}
          </div>
        </div>

        <div className="p-6 flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {mentor.name}
              </h3>
              <p className="text-gray-400">{mentor.role}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-white font-semibold">
                  {mentor.rating}
                </span>
                <span className="ml-1 text-gray-400">
                  ({mentor.totalSessions} sessions)
                </span>
              </div>
              <p className="text-primary-400 font-semibold">
                ${mentor.hourlyRate}/hr
              </p>
            </div>
          </div>

          <p className="mt-2 text-gray-300 line-clamp-2">{mentor.about}</p>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-dark-600 text-primary-300 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-400 text-sm">
              Available:{" "}
              <span className="text-gray-300">{mentor.availability}</span>
            </span>

            <Link
              href={`/mentors/${mentor.id}`}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors text-sm font-medium"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/components/mentors/MentorList.tsx
import MentorCard from "./MentorCard";

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
    <div className="grid grid-cols-1 gap-6">
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}

      {mentors.length === 0 && (
        <div className="text-center py-12 bg-dark-700 rounded-xl border border-dark-600">
          <p className="text-gray-400">
            No mentors found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
