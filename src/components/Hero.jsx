import React from 'react'
import Header from '../common/Header.'
import CustomButton from '../common/CommonButton'

const Hero = () => {
    return (
        <div className='bg-hero bg-cover bg-no-repeat bg-center max-xl:h-[840.23px] relative'>
            <img src="./assets/images/png/side-img.png" alt="side-img" className='absolute left-0 top-[13%] pointer-events-none' />
            <Header />
            <div className='container relative'>
                <div className='flex lg:flex-row flex-col gap-5 max-lg:pt-12'>
                    <div className='lg:w-[705px] w-full flex flex-col justify-center items-center xl:pt-[166px] xl:pb-[250.23px]'>
                        <h1 className='xl:text-7xl xl:leading-custom-6xl text-white text-center lg:text-6xl md:text-5xl text-3xl font-bold'>Innovate, Automate, Accelerate </h1>
                        <p className='sm:text-xl sm:leading-custom-3xl text-base font-normal text-center text-white sm:pt-6 pt-5'>Next Gen AI Automation to Scale Your Business.</p>
                        <CustomButton text={'Book A Call Now!'} classStyle={'sm:py-[19.5px] sm:px-[38.5px] py-4 px-7 sm:mt-6 mt-5'} />
                    </div>
                    <div className='absolute right-[-57px] top-[60px] xl:block hidden'>
                        <img className='max-w-[470px] h-[559px] w-full pointer-events-none move-x duration-500' src="./assets/images/png/robot.png" alt="hero-image" />
                    </div>
                    <div className='xl:hidden flex justify-center'>
                        <img className='w-full max-w-[470px] pointer-events-none move-x duration-700  ' src="./assets/images/png/robot.png" alt="hero-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero