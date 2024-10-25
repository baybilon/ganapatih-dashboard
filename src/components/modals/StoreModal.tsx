'use client'
import React, { useState } from 'react'

import * as z from 'zod'

import Modal from '../ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import axios from "axios"
import { toast } from "react-hot-toast"

const formSchema = z.object({
  name:z.string().min(3),
})

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name: "",
    },
  })


const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try{
    setLoading(true);

    const response = await axios.post('/api/stores', values)
    // const response = await axios.post('/api/stores', JSON.stringify(values), { headers: {'Content-Type': 'application/json',}, });
    // toast.success("Store created")
    // console.log(response.data);

    window.location.assign(`/${response.data.id}`)
  }
  catch (error){
    toast.error("Something went wrong")
    // console.log(error);
  }
  finally{
    setLoading(false)
  }
}



  return (
    <Modal 
    title='Create Store'
    description='Create a new store to add product and categories'
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
      <div>
        <div className='space-y-4 py-4 pb-4'>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name='name'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="E - Commerce"
                            {...field}
                          />
                      </FormControl>
                      <FormMessage/>

                    </FormItem>
                  )}
                />
                <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                  <Button disabled={loading} type="submit">Continue</Button>
                  <Button
                  disabled={loading}
                  variant='outline'
                  onClick={storeModal.onClose}
                  >Cancel</Button>
                </div>
              </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
