// src/app/mentors/[mentorId]/page.tsx
import Link from 'next/link'
import Image from 'next/image'

// This would usually come from an API based on the mentorId
const getMentorData = (id: string) => {
  return {
    id,
    name: 'Alex Johnson',
    role: 'Senior Software Engineer at Google',
    expertise: ['React', 'TypeScript', 'System Design', 'Algorithms', 'Frontend Development'],
    rating: 4.9,
    totalSessions: 124,
    imageUrl: '/images/mentors/mentor1.jpg',
    availability: 'Weekends',
    hourlyRate: 60,
    about: 'I help new CS grads navigate the tech industry and prepare for technical interviews. With 8 years of experience at Google, I can provide insights into what top companies look for in candidates and how to position yourself for success.',
    bio: `After graduating with a CS degree in 2015, I started my career at a small startup before joining Google in 2017. I've been mentoring CS students for over 5 years, helping them prepare for technical interviews, build impressive portfolios, and navigate the job search process.

I'm passionate about frontend development, particularly React and TypeScript, and I enjoy teaching system design principles that are often overlooked in traditional CS education.

My mentoring style is practical and focused on real-world skills. We'll work together on concrete problems, review your code, practice interview questions, and develop strategies tailored to your career goals.`,
    education: [
      {
        degree: 'M.S. in Computer Science',
        institution: 'Stanford University',
        year: '2015'
      },
      {
        degree: 'B.S. in Computer Science',
        institution: 'University of Washington',
        year: '2013'
      }
    ],
    experience: [
      {
        role: 'Senior Software Engineer',
        company: 'Google',
        duration: '2017 - Present'
      },
      {
        role: 'Software Engineer',
        company: 'TechStart Inc.',
        duration: '2015 - 2017'
      }
    ],
    reviews: [
      {
        id: '1',
        name: 'Jordan T.',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Alex was instrumental in helping me prepare for my Google interview. His system design tips and mock interviews were incredibly helpful.'
      },
      {
        id: '2',
        name: 'Mia K.',
        rating: 5,
        date: '1 month ago',
        comment: 'I was struggling with React concepts, and Alex broke things down in a way that finally made sense. After our sessions, I built a portfolio project that landed me my first dev job!'
      },
      {
        id: '3',
        name: 'Tyler R.',
        rating: 4,
        date: '3 months ago',
        comment: 'Great mentor with practical insights. Helped me understand what to focus on for interviews and gave detailed feedback on my projects.'
      }
    ],
    upcomingSlots: [
      { id: '1', day: 'Saturday', date: 'March 2', time: '10:00 AM - 11:00 AM' },
      { id: '2', day: 'Saturday', date: 'March 2', time: '3:00 PM - 4:00 PM' },
      { id: '3', day: 'Sunday', date: 'March 3', time: '2:00 PM - 3:00 PM' },
      { id: '4', day: 'Saturday', date: 'March 9', time: '11:00 AM - 12:00 PM' },
    ]
  }
}

export default function MentorProfilePage({ params }: { params: { mentorId: string } }) {
  const mentor = getMentorData(params.mentorId)
  
  return (
    <div className="bg-dark-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/mentors" className="text-gray-400 hover:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to mentors
          </Link>
        </div>
        
        {/* Profile header */}
        <div className="bg-dark-700 rounded-xl overflow-hidden border border-dark-600 mb-8">
          <div className="p-6 sm:p-8 md:flex">
            <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl bg-gradient-to-br from-primary-600/30 to-dark-900 relative flex items-center justify-center mx-auto md:mx-0">
                <div className="text-8xl font-bold text-white/30">{mentor.name.charAt(0)}</div>
              </div>
              
              <div className="mt-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-white font-semibold">{mentor.rating}</span>
                  <span className="ml-1 text-gray-400">({mentor.totalSessions} sessions)</span>
                </div>
                <p className="text-primary-400 font-semibold mt-1">${mentor.hourlyRate}/hr</p>
              </div>
            </div>
            
            <div className="md:ml-8 flex-1">
              <h1 className="text-3xl font-bold text-white">{mentor.name}</h1>
              <p className="text-gray-400 mt-1">{mentor.role}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {mentor.expertise.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-dark-600 text-primary-300 text-sm rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
              
              <p className="mt-4 text-gray-300">{mentor.about}</p>
              
              <div className="mt-6">
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors font-medium">
                  Book a session
                </button>
                <button className="ml-4 px-6 py-3 bg-dark-600 hover:bg-dark-500 text-white rounded-md transition-colors font-medium">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About section */}
            <div className="bg-dark-700 rounded-xl border border-dark-600 p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">About</h2>
              <div className="text-gray-300 whitespace-pre-line">
                {mentor.bio}
              </div>
            </div>
            
            {/* Experience and Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-dark-700 rounded-xl border border-dark-600 p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Experience</h2>
                <div className="space-y-4">
                  {mentor.experience.map((exp, index) => (
                    <div key={index}></div>