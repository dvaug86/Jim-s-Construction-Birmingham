import React from 'react'
import { useForm } from 'react-hook-form';

const contact = () => {
    const inputStyles = `w-full px-5 py-3 placeholder-grey`

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault
        }
    };


    return (
        <section id='contact' className='bg-gray-100 w-full lg:h-full py-12 md:pt-24 md:pb-32'>
            <div className="max-w-[1400px] m-auto px-6 w-full">
                <p className='text-3xl tracking-widest uppercase my-5 pt-8 md:pt-2 text-center font-bold'>CONTACT US</p>
                <p className='text-xl tracking-widest uppercase my-5 text-center'>GET A QUOTE</p>
                <div className='w-full h-auto shadow-gray-400'>
                    <div>
                        <form
                            target='_blank'
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/29d84377024a9c28ed398a076ffe0b48"
                            method="POST"
                        >
                            <div className='flex flex-col shadow-xl'>
                                <input
                                    className={inputStyles}
                                    type="text"
                                    placeholder="NAME"
                                    {...register("name", {
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {errors.name && (
                                    <p className="text-red-600">
                                        {errors.name.type === "required" && "This field is required."}
                                        {errors.name.type === "maxLength" && "This length is 100 characters."}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col py-2">
                                <input
                                    className={`${inputStyles} shadow-xl mt-5`}
                                    type="text"
                                    placeholder="EMAIL"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    })}
                                />
                                {errors.email && (
                                    <p className='mt-1 text-red-600'>
                                        {errors.email.type === "required" && "This field is required."}
                                        {errors.email.type === "pattern" && "Invalid email address."}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col py-2">
                                <textarea
                                    className={`${inputStyles} shadow-xl mt-5`}
                                    placeholder="MESSAGE"
                                    rows={15}
                                    cols={50}
                                    {...register("message", {
                                        required: true,
                                        maxLength: 2000,
                                    })}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-red-600">
                                        {errors.message.type === "required" && "This field is required."}
                                        {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="shadow-xl border-b-4 border-r-4 border-gray-500 hover:border-blue-500 bg-[#3482Ad] hover:bg-blue-400 font-bold px-20 py-3 w-full hover:scale-105 ease-in duration-300 text-white mt-5"
                            >
                                SUBMIT
                            </button>
                            <p className='text-base tracking-widest uppercase mt-5 text-center'>Send us a message, or call for a <span className="font-bold">free</span> quote. Use our contact form to tell us more about your project, and we will connect you with the services to fit your needs.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact