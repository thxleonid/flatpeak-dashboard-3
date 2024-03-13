"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "src/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form"
import { Input } from "src/components/ui/input"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

const formSchema = z.object({
  username: z.string()
                .min(2, 'Username must be at least 2 characters long')
                .max(50, 'Username must be at most 50 characters long'),
  phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  company: z.string()
                .min(2, 'Company name must be at least 2 characters long')
                .max(50, 'Company name must be at most 50 characters long'),
})


const Signup = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "",
        phone: "",
        company: ""
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-[18px] max-w-[400px] max-h-[472px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[25px] bg-white">
            <img className='block m-auto h-[33px]' src='https://images.squarespace-cdn.com/content/v1/64de73b86dca8e675513ad55/55ac52cd-0bd1-4728-b64f-d256beb280b6/flatpeak-logo-rounded-blue.png' alt='Flatpeak logo' />
            <div className="text-center text-xl font-normal text-[#0F172A]">
                Please complete your profile
            </div>
            <div className="text-center text-sm font-normal text-[#64748B]">
                We need this information in case we have to get in touch about your account.
            </div>
            <div className="flex flex-col gap-[8px]">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                            <Input placeholder="Emily Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your phone</FormLabel>
                        <FormControl>
                            <Input placeholder="+44 7123 456 789" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company name</FormLabel>
                        <FormControl>
                            <Input placeholder="Timeshift Inc" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}

export default Signup;