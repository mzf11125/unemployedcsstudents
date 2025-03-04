"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
})

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/30">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-slate-100">Welcome Back</h1>
          <p className="text-slate-400">Sign in to continue to your account</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="email@example.com" 
                      className="bg-slate-700/50 border-slate-600/50 focus:ring-2 focus:ring-blue-500/50 text-slate-100"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="bg-slate-700/50 border-slate-600/50 focus:ring-2 focus:ring-blue-500/50 text-slate-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-slate-50 font-semibold transition-colors"
            >
              Sign In
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link 
            href="/signup" 
            className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Create one
          </Link>
        </div>
      </div>
    </div>
  )
}