"use client"
import * as React from 'react';
import PageBanner from '../Components/PageBanner';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { email, phoneNumber, location, facebook, twitter, instagram } from '../globalvar';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const formSchema = z.object({
    fullname: z.string().min(2, {
        message: "Fullname must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }).max(15, {
        message: "Phone number must be at most 15 digits.",
    }).optional(),
    message: z.string().min(1, {
        message: "Message is required.",
    }),
});

const contactUsItems = [
    {
        itemName: "Email",
        itemValue: email,
        shortDescription: "Email us At",
        icon: <MdOutlineEmail color='#bc2e30' fontSize={24} />
    },
    {
        itemName: "Phone",
        itemValue: phoneNumber,
        shortDescription: "Call on",
        icon: <FaPhoneAlt color='#bc2e30' fontSize={24} />
    },
    {
        itemName: "Location",
        itemValue: location,
        shortDescription: "Address",
        icon: <FaLocationDot color='#bc2e30' fontSize={24} />
    }
]

const socialMedia = [
    {
        itemName: "Facebook",
        itemLink: facebook,
        icon: <FaFacebookF />
    },
    {
        itemName: "Twitter",
        itemLink: twitter,
        icon: <FaXTwitter />
    },
    {
        itemName: "instagram",
        itemLink: instagram,
        icon: <FaInstagram />
    }
]

const faqs = [
    {
        "ques": "What is the primary purpose of a temple?",
        "ans": "The primary purpose of a temple is to serve as a place of worship and a spiritual center for devotees. Temples are dedicated to various deities and are used for conducting religious rituals, ceremonies, and prayers."
    },
    {
        "ques": "What are some common architectural features of Hindu temples?",
        "ans": "Common architectural features of Hindu temples include a central shrine (garbhagriha), a tower (shikhara or vimana), a hall for devotees (mandapa), and often a water tank or pond. The walls and pillars are typically adorned with intricate carvings and sculptures depicting deities, myths, and various aspects of life."
    },
    {
        "ques": "What is the significance of the shikhara in Hindu temple architecture?",
        "ans": "The shikhara, or spire, is a prominent feature of Hindu temple architecture that represents the mythical Mount Meru, the axis of the universe. It signifies the temple as a cosmic mountain and a point of connection between the heavens and the earth."
    },
    {
        "ques": "What activities typically take place in a temple?",
        "ans": "Activities in a temple typically include daily worship (puja), rituals, festivals, prayers, meditation, and community gatherings. Temples also often host educational and cultural programs, as well as social services for the community."
    },
    {
        "ques": "What role do festivals play in temple life?",
        "ans": "Festivals play a significant role in temple life, as they are times of heightened religious activity and community involvement. Temples become centers of celebration, with special prayers, rituals, processions, music, dance, and feasting. Festivals honor various deities and commemorate important events in religious traditions."
    }
]


const Page = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
            message: ""
        },
    });

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <div className='min-h-[90vh] space-y-4'>
            <PageBanner title={"Contact us"} />
            <div className='p-2 md:px-16 md:py-8  flex justify-center w-full'>
                <div className='lg:w-[60%] w-full md:p-4 rounded-lg mt-[-100px] md:mt-[-150px] '>
                    <div className='flex flex-col h-full md:flex-row justify-between rounded-lg w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white'>
                        <div className='h-full md:border-r border-b md:w-[30%] w-full '>
                            <div className='grid gap-2 h-full md:grid-cols-1 grid-cols-2 md:p-4 p-2'>
                                {
                                    contactUsItems.map((item,idx) => {
                                        return (
                                            <div key={idx} className='border space-y-4 p-2 h-full rounded-lg hover:bg-gray-100'>
                                                <div>{item.icon}</div>
                                                <p className='text-xs'>{item.shortDescription}</p>
                                                <a className='text-[#bc2e30] text-sm hover:underline cursor-pointer' href={item.itemLink}>{item.itemValue}</a>
                                            </div>
                                        )
                                    })
                                }
                                <div className='border p-2 md:h-fit h-fit rounded-lg flex justify-start space-x-4'>
                                    {
                                        socialMedia.map((media,idx) => {
                                            return (
                                                <div key={idx} className='text-[16px] text-[#bc2e30] p-2 flex justify-between border rounded-[100%] cursor-pointer h-fit hover:bg-gray-100'>
                                                    <a href={media.itemLink}>{media.icon}</a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="max-w-lg mx-auto p-4 space-y-4 md:w-[70%] w-full">
                            <h1 className='text-[#bc2e30] text-xl sm:text-2xl md:text-3xl font-bold'>Send a Message</h1>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        name="fullname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Fullname<sup>*</sup></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Fullname" {...field} />
                                                </FormControl>
                                                <FormMessage>
                                                    {form.formState.errors.fullname?.message}
                                                </FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email<sup>*</sup></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Email" {...field} />
                                                </FormControl>
                                                <FormMessage>
                                                    {form.formState.errors.email?.message}
                                                </FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Phone" {...field} />
                                                </FormControl>
                                                <FormMessage>
                                                    {form.formState.errors.phone?.message}
                                                </FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message<sup>*</sup></FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Message" {...field} />
                                                </FormControl>
                                                <FormMessage>
                                                    {form.formState.errors.message?.message}
                                                </FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="mt-4 bg-[#bc2e30] hover:bg-[#bc2e30]">
                                        Submit
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:p-4 p-2'>
                <div className='md:w-[70%] w-full mx-auto p-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg'>
                    <h1 className='text-[#bc2e30] text-xl font-bold'> Frequently Asked Questions </h1>
                    <Accordion collapsible>
                        {
                            faqs.map((faq,idx) => {
                                return (
                                    <AccordionItem key={idx + 1} value={idx + 1}>
                                        <AccordionTrigger>{faq.ques}</AccordionTrigger>
                                        <AccordionContent>
                                            {faq.ans}
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }

                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Page;
