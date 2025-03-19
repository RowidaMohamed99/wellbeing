import React from 'react'
import mypic from '../../pic/pic.jpg'
export default function MeetExperts() {
return <>
<div className="meetExperts">
    <div className="container mx-auto  max-w-screen-lg p-4 mt-5">
        <header>
        <h1 className='font-bold text-[36px] leading-[100%] tracking-[0%] text-center text-[#19649E]'>Meet our qualified experts</h1>
        <p className='font-bold p-4 text-[25px] leading-[100%] tracking-[0%] text-center text-[#616161]'>Over 50 Arabic and English-speaking experts with therapy and counseling expertise</p>
        </header>
        <div className="experts pt-4">
            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card gap-[20px]">
                <img src={mypic} alt="" className='rounded-[20px]'/>
                <div className="cardInfo gap-[6px] ">
                    <h2 className='font-bold pt-4 text-[25px] leading-[100%] tracking-[0%] text-center text-[#19649E]'>Dr.Doha Mohamed</h2>
                    <p className='font-bold pt-3 text-[20px] leading-[100%] tracking-[0%]  text-[#616161] text-center'>Clinical Psychologist</p>
                </div>
                </div>

                <div className="card  gap-[20px]">
                <img src={mypic} alt="" className='rounded-[20px]'/>
                <div className="cardInfo gap-[6px] ">
                    <h2 className='font-bold pt-4 text-[25px] leading-[100%] tracking-[0%] text-center text-[#19649E]'>Dr.Doha Mohamed</h2>
                    <p className='font-bold pt-3 text-[20px] leading-[100%] tracking-[0%]  text-[#616161] text-center'>Clinical Psychologist</p>
                </div>
                </div>
                
                <div className="card  gap-[20px]">
                <img src={mypic} alt="" className='rounded-[20px]'/>
                <div className="cardInfo gap-[6px] ">
                    <h2 className='font-bold pt-4 text-[25px] leading-[100%] tracking-[0%] text-center text-[#19649E]'>Dr.Doha Mohamed</h2>
                    <p className='font-bold pt-3 text-[20px] leading-[100%] tracking-[0%]  text-[#616161] text-center'>Clinical Psychologist</p>
                </div>
                </div>

                <div className="card  gap-[20px]">
                <img src={mypic} alt="" className='rounded-[20px]'/>
                <div className="cardInfo gap-[6px] ">
                    <h2 className='font-bold pt-4 text-[25px] leading-[100%] tracking-[0%] text-center text-[#19649E]'>Dr.Doha Mohamed</h2>
                    <p className='font-bold pt-3 text-[20px] leading-[100%] tracking-[0%]  text-[#616161] text-center'>Clinical Psychologist</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</>
}
