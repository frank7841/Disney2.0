'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'
const formSchema = z.object({
    input:z.string().min(2).max(50),
})


function SearchInput() {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          input: "",
        },
      })
       // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    router.push(`/search/${values.input}`)
    form.reset()
  }
  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control}
                    name='input'
                    render={({field})=> (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='search ...'{...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>

        </Form>
    </div>
  )
}

export default SearchInput