"use client"

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "src/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form"
import { Input } from "src/components/ui/input"

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

const Signin = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: ""
        },
    })

    const [emailSent, setEmailSent] = useState(false);
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        setEmailSent(!emailSent);
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-[18px] max-w-[400px] max-h-[472px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[25px] bg-white">
            <img className='block m-auto h-[33px]' src='https://images.squarespace-cdn.com/content/v1/64de73b86dca8e675513ad55/55ac52cd-0bd1-4728-b64f-d256beb280b6/flatpeak-logo-rounded-blue.png' alt='Flatpeak logo' />
            <div className="text-center text-xl font-normal text-[#0F172A]">
                Login to dashboard
            </div>
            
            <div className="text-center text-sm font-normal text-[#64748B]">
                {emailSent ? 'Please check your mailbox' : 'Enter your email to login or to create a new account'}
            </div>
            {!emailSent && 
                <div className="flex flex-col gap-[8px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Your email</FormLabel>
                            <FormControl>
                                <Input placeholder="emily@flatpeak.energy" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            }
            <Button type="submit">{emailSent ? 'Try again' : 'Submit'}</Button>
          </form>
        </Form>
      )
}

export default Signin;