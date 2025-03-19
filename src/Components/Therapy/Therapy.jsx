import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";



export default function Therapy() {
return <>
{/* third section */}
<div className='w-full max-w-screen-lg mx-auto mt-5'>
    <div className='cointainer md:h-[349px]  rounded-[20px] bg-[#19649E] '>
        <h2 className='text-center font-bold text-[35px] leading-[100%] text-white p-5'>Start therapy in 3 easy steps</h2>
        <h5 className='text-center text-white font-medium text-[20px] leading-[100%]'>On theWellbeing Day app and website</h5>
        <div className='md:h-[198px] left-[116px] gap-[92px] '>
            <div className='grid md:grid-cols-3  text-center mt-8 mx-auto text-white '>
                {/* first div */}
                <div className='md:border-r-[4px] border-0  border-[#FFFFFF] p-6 flex flex-col items-center text-center'>
                <FaMagnifyingGlass className=' w-[60px] h-[60px]'/>
                <h2 className='ont-bold text-[20px] leading-[100%] tracking-[0%] text-center'>1. Find an expert</h2>
                <p className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center'>Choose your expert from 50+ qualified, bilingual professionals</p>
                </div>
                {/* second div */}
                <div className='md:border-r-[4px] border-0 border-[#FFFFFF] p-6 flex flex-col items-center text-center'>
                <IoBagCheckOutline className=' w-[60px] h-[60px]'/>
                <h2 className='ont-bold text-[20px] leading-[100%] tracking-[0%] text-center'>2. Book appointment</h2>
                <p className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center'>
                    Select the date and time that work best for your schedule.</p>
                </div>
                {/* third div */}
                <div className='p-6  flex flex-col items-center text-center'>
                <FaUser className=' w-[60px] h-[60px]' />
                <h2 className='ont-bold text-[20px] leading-[100%] tracking-[0%] text-center'>3. Join session</h2>
                <p className='font-bold text-[20px] leading-[100%] tracking-[0%] text-center'>
                Use your laptop or download our app for the best experience.</p>
                </div>

            </div>

        </div>
    </div>
</div>
</>
}
