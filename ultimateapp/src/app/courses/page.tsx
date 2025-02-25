import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const courses = [
  {
    category: "Core CS",
    items: [
      { title: "Data Structures", href: "#" },
      { title: "Algorithms", href: "#" },
      { title: "Operating Systems", href: "#" },
    ]
  },
  {
    category: "Web Development",
    items: [
      { title: "React & Next.js", href: "#" },
      { title: "Node.js", href: "#" },
      { title: "Database Design", href: "#" },
    ]
  },
  {
    category: "Interview Prep",
    items: [
      { title: "Coding Challenges", href: "#" },
      { title: "System Design", href: "#" },
      { title: "Behavioral Interviews", href: "#" },
    ]
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-100 mb-8">Course Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((section) => (
            <Card key={section.category} className="bg-slate-800/50 border-slate-700/30">
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-slate-200">
                  {section.category}
                </h2>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <Button 
                      key={item.title}
                      asChild
                      variant="ghost"
                      className="w-full justify-start text-slate-300 hover:bg-slate-700/50"
                    >
                      <Link href={item.href}>
                        {item.title}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
