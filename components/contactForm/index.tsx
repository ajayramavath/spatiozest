"use client";
import React from "react";
import {Modal, useModal} from "../ui/contactModal";
import {FieldValues, useForm, useFormContext} from 'react-hook-form'
import PrimaryButton from "../ui/primary-button";
import {sendContact} from '@/lib/apiClient'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";


const schema = z.object({
    email: z.string().email({ message: 'Invalid email address!' }),
    name: z.string().min(3,{message:"Name must be atleast 3 characters!"}),
    jobDetails: z.string().optional(),
    phoneNumber: z.string().optional(),
})



type Schema = Zod.infer<typeof schema>

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
        if (issue.expected === "string") {
            return { message: "bad type!" };
        }
    }
    if (issue.code === z.ZodIssueCode.custom) {
        return { message: `less-than-${(issue.params || {}).minimum}` };
    }
    return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

const ContactForm = () => {


    const {setOpen} = useModal()
    const { register, handleSubmit, formState: { errors,isSubmitting } , reset  } = useForm<Schema>({
        resolver: zodResolver(schema),
    })

    const onSubmit = async (data: FieldValues) => {
        reset()
        setOpen(false)
        const res = await sendContact(data)
        if(res.success){
            toast.success(res.message)
        }else{
            toast.error("Oops! Something went wrong. Please try again!")
        }
    } 

    console.log(errors)
    return(
      <div className="py-40 flex items-center justify-center">
        <Modal>
            <div className="text-3xl font-bold mb-6">
                Let's Talk, Get in touch with us!
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
                        <input
                            {...register("name")}
                            placeholder="Name (or) Organisation"
                            className={cn("flex h-10 w-full bg-gray-50 mt-6 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400",
                                errors.name ? " border-solid border-[2px] border-red-500" :"border-none"
                            )}
                        />
                        {errors.name && (
                            <div className="text-xs text-red-500 ">
                                {errors.name.message}
                            </div>
                        )}
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className={cn("flex h-10 w-full bg-gray-50 mt-6 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400",
                                errors.email ? " border-solid border-[2px] border-red-500" : "border-none"
                            )}
                        />
                        {errors.email && (
                            <div className="text-xs text-red-500 ">
                                {errors.email.message}
                            </div>
                        )}
                        <input
                            {...register("phoneNumber")}
                            placeholder="Phone Number"
                            className={cn("flex h-10 w-full bg-gray-50 mt-6 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400",
                                errors.phoneNumber ? " border-solid border-[2px] border-red-500" : "border-none"
                            )}
                        />
                        <input
                            {...register("jobDetails")}
                            placeholder="Tell us how can we help you?"
                            className={cn("flex h-10 w-full bg-gray-50 mt-6 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400",
                                errors.jobDetails ? " border-solid border-[2px] border-red-500" : "border-none"
                            )}
                        />
                    <div className="w-full flex flex-col gap-y-4 mt-4 items-center text-center">
                        <div>
                            <PrimaryButton disabled={isSubmitting} title="Submit" otherClasses="w-[250px]" />
                        </div>
                        <p className="text-center">
                            Or mail us at
                            <a href="mailto:hello@spatiozest.com"  className="mx-2 text-blue-600">hello@spatiozest.com</a>
                        </p>
                    </div>
                </form>
            </div>
        </Modal>
      </div>
  )
}

export default ContactForm