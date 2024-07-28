'use client'
import React, { useState, useRef, MutableRefObject } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const form = useRef() as MutableRefObject<HTMLFormElement> ;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true)
          form.current?.reset()
          
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true)
          
        },
      );
  };
  return (
    <div className='py-36' id='contact'>
        <h1 className='heading'>Contact {' '}
            <span className='text-purple'>Me</span>
        </h1>
        <form onSubmit={sendEmail} ref={form} className='h-1/2 lg:h-full lg:w-1/2 bg-violet-200  text-xl
        flex flex-col text-black gap-8 justify-center sm:p-24 p-7 mx-auto my-12'>
            <span>Dear Hafsa,</span>
            <textarea rows={3} className=' bg-transparent border-b-2 border-b-black outline-none resize-none text-black font-serif '
            name="user_message"/>
            <span>Your Email:</span>
            <input name='user_email'
            type='text' className='bg-transparent border-b-2 border-b-black outline-none  text-black '/>
            <span>Regards</span>
            <button className='bg-black hover:bg-violet-400 text-white p-4 rounded-lg sm:w-[300px] w-[100px] mx-auto '>Send</button>
            {success && <span className='text-green-700 bg-green-200 p-4 text-sm sm:text-lg rounded-xl sm:w-[360px] mt-4 text-center mx-auto'>Message Sent Successfully!</span>}
            {error && <span className='text-red-600 bg-rose-200 p-4 text-sm sm:text-lg rounded-xl sm:w-[360px] mt-4 text-center mx-auto'>Something Went Wrong!</span>}
        </form>
    </div>
  )
}

export default Contact