"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const FormSchema = z.object({
  resume: z.string().min(10, "Resume must be at least 10 characters"),
})

export default function ResumePage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Analyzing your resume...", {
      description: "Your resume submission is being processed",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-100 mb-8">Resume Optimizer</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Paste Your Resume</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste your resume content here..."
                          className="min-h-[400px] bg-slate-800/50 border-slate-700 text-slate-100"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-slate-500">
                        We'll analyze and suggest improvements
                      </FormDescription>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <Button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-slate-50"
                  >
                    Analyze Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800/50"
                  >
                    Auto-Optimize
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/30">
            <h2 className="text-xl font-semibold text-slate-200 mb-4">Analysis Results</h2>
            <div className="space-y-4 text-slate-400">
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <h3 className="font-medium text-slate-300">🚀 Optimization Suggestions</h3>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Add more quantifiable achievements</li>
                  <li>Improve action verb usage</li>
                  <li>Include relevant keywords from job description</li>
                </ul>
              </div>
              
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <h3 className="font-medium text-slate-300">📊 ATS Score: 78/100</h3>
                <div className="mt-2 h-2 bg-slate-600 rounded-full">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" 
                    style={{ width: '78%' }}
                  />
                </div>
              </div>

              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-slate-50 mt-4"
                disabled
              >
                Download Optimized Resume (Pro)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}