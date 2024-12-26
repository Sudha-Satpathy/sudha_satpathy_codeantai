import React from 'react'
import FixStats from './FixStats'

const Stat = () => {
  return (
    <div  className="h-screen bg-white md:w-1/2 p-10 ">
        <div className="border rounded-3xl shadow-xl md:flex flex-col items-center md:relative">
        <div className="flex p-4 gap-3 bg-white">
            <img src="/images/codeAntAI.png" />
            <div className="text-xl font-semibold">AI to Detect & Autofix Bad Code</div>
        </div>
        <div className='flex justify-evenly p-8 border-t-2 w-full'>
            <div className='text-center'>
                <div className='text-2xl font-bold'>30+</div>
                <div className='text-gray-600'>Language Support</div>
            </div>
            <div className='text-center'>
            <div className='text-2xl font-bold'>10K+</div>
            <div className='text-gray-600'>Developers</div>
            </div>
            <div className='text-center'>
            <div className='text-2xl font-bold'>100K+</div>
            <div className='text-gray-600'>Hours Saved</div>
            </div>
        </div>
        </div>
        <div className='md:absolute md:w-2/5 sm:top-48 md:top-52 lg:top-52 sm:right-96 md:right-1/3'>
        <FixStats/>
        </div>
       <div className='mt-16 flex items-end'>
       <img className='h-1/2 w-1/2' src="/images/Subtract.png" />
       </div>
    </div>
  )
}

export default Stat