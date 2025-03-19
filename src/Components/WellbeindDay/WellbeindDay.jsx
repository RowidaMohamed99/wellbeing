import React from 'react'
import mypic from '../../pic/pic.jpg'

export default function WellbeindDay() {
return <>
<div className='w-full max-w-screen-lg mx-auto mt-5'>
    <header className='text-center'>
        <h2 className='font-bold text-[36px] leading-[100%] tracking-[0%] text-[#19649E]'>Why Wellbeing Day?</h2>
        <p className='font-medium p-4 text-[20px] leading-[100%] tracking-[0%] text-[#616161]'>This platform and this application are a true achievement, as we have made the most of technology to serve humanity.We have transferred the clinic's work as it is to the application, with its components and conditions</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] p-6">
            <div className="img relative p-4">
            <img src={mypic} alt="" className='w-full h-64 rounded-[20px] object-cover'/>
            <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3   rounded-[10px] border-[0.6px] border-[#19649E]">
                <h2 className='font-bold text-sm leading-[100%] text-[#19649E]'>Individual or family treatment</h2>
                <p className='font-medium text-xs leading-[100%]  text-[#616161]'>It is a type of psychotherapy that takes place between the therapist and the individual, as it helps the person..</p>
            </div>
            </div>

            <div className="img relative p-4">
            <img src={mypic} alt="" className='w-full h-64 rounded-[20px] object-cover'/>
            <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3   rounded-[10px] border-[0.6px] border-[#19649E]">
                <h2 className='font-bold text-sm leading-[100%] text-[#19649E]'>Individual or family treatment</h2>
                <p className='font-medium text-xs leading-[100%]  text-[#616161]'>It is a type of psychotherapy that takes place between the therapist and the individual, as it helps the person..</p>
            </div>
            </div>

            <div className="img relative p-4">
            <img src={mypic} alt="" className='w-full h-64 rounded-[20px] object-cover'/>
            <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3   rounded-[10px] border-[0.6px] border-[#19649E]">
                <h2 className='font-bold text-sm leading-[100%] text-[#19649E]'>Individual or family treatment</h2>
                <p className='font-medium text-xs leading-[100%]  text-[#616161]'>It is a type of psychotherapy that takes place between the therapist and the individual, as it helps the person..</p>
            </div>
            </div>

            <div className="img relative p-4">
            <img src={mypic} alt="" className='w-full h-64 rounded-[20px] object-cover'/>
            <div className="absolute bottom-[-30px] left-4 right-4 text-center bg-white p-3   rounded-[10px] border-[0.6px] border-[#19649E]">
                <h2 className='font-bold text-sm leading-[100%] text-[#19649E]'>Individual or family treatment</h2>
                <p className='font-medium text-xs leading-[100%]  text-[#616161]'>It is a type of psychotherapy that takes place between the therapist and the individual, as it helps the person..</p>
            </div>
            </div>
            

        

    </div>

</div>
</>
}
