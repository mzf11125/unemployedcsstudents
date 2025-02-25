// src/app/mentors/page.tsx
import MentorList from "@/components/mentors/MentorList";

// This data would normally come from an API
const mentors = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Senior Software Engineer at Google",
    expertise: ["React", "TypeScript", "System Design"],
    rating: 4.9,
    totalSessions: 124,
    imageUrl: "/images/mentors/mentor1.jpg",
    availability: "Weekends",
    hourlyRate: 60,
    about:
      "I help new CS grads navigate the tech industry and prepare for technical interviews. Specialized in frontend development and system design.",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Engineering Manager at Microsoft",
    expertise: ["Career Coaching", "Leadership", "Backend Development"],
    rating: 4.8,
    totalSessions: 87,
    imageUrl: "/images/mentors/mentor2.jpg",
    availability: "Evenings",
    hourlyRate: 75,
    about:
      "With 10+ years of experience at top tech companies, I help students transition from academia to industry with practical advice and coaching.",
  },
  {
    id: "3",
    name: "Miguel Hernandez",
    role: "Full Stack Developer at Airbnb",
    expertise: ["JavaScript", "Node.js", "AWS"],
    rating: 4.7,
    totalSessions: 56,
    imageUrl: "/images/mentors/mentor3.jpg",
    availability: "Flexible",
    hourlyRate: 50,
    about:
      "Self-taught developer who broke into tech without a CS degree. I help students build impressive portfolios and master modern web technologies.",
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "Data Scientist at Netflix",
    expertise: ["Python", "Machine Learning", "Data Structures"],
    rating: 4.9,
    totalSessions: 93,
    imageUrl: "/images/mentors/mentor4.jpg",
    availability: "Weekdays",
    hourlyRate: 65,
    about:
      "Passionate about algorithms and data science. I help students master technical interviews and build strong foundations in CS fundamentals.",
  },
  {
    id: "5",
    name: "David Kim",
    role: "iOS Developer at Apple",
    expertise: ["Swift", "Mobile Development", "UI/UX"],
    rating: 4.6,
    totalSessions: 42,
    imageUrl: "/images/mentors/mentor5.jpg",
    availability: "Weekends",
    hourlyRate: 55,
    about:
      "Specialized in mobile app development. I help students understand the mobile ecosystem and build impressive portfolio apps.",
  },
  {
    id: "6",
    name: "Olivia Wilson",
    role: "Security Engineer at Amazon",
    expertise: ["Cybersecurity", "Ethical Hacking", "Cloud Security"],
    rating: 4.8,
    totalSessions: 63,
    imageUrl: "/images/mentors/mentor6.jpg",
    availability: "Evenings, Weekends",
    hourlyRate: 70,
    about:
      "Cybersecurity expert helping students navigate the specialized field of security engineering and secure cloud architecture.",
  },
];

export default function MentorsPage() {
  return (
    <div className="bg-dark-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Find Your Tech Mentor
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with experienced professionals who can guide you through
            your CS career journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-dark-700 rounded-xl p-6 border border-dark-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Search mentors
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or expertise"
                className="w-full px-3 py-2 bg-dark-800 border border-dark-500 rounded-md text-white focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label
                htmlFor="expertise"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Expertise
              </label>
              <select
                id="expertise"
                className="w-full px-3 py-2 bg-dark-800 border border-dark-500 rounded-md text-white focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All expertise</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="system-design">System Design</option>
                <option value="algorithms">Algorithms</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Availability
              </label>
              <select
                id="availability"
                className="w-full px-3 py-2 bg-dark-800 border border-dark-500 rounded-md text-white focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Any time</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
        </div>

        <MentorList mentors={mentors} />
      </div>
    </div>
  );
}
