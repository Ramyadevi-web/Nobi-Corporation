import React, {useRef} from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function About() {

  const leftAnimationRef1 = useRef()
  const leftAnimationRef2 = useRef()
  const rightAnimationRef = useRef()

  useScrollAnimation({
    ref: leftAnimationRef1,
    animationClass: 'animate-slideInLeft',
    threshold:0.1
  })

   useScrollAnimation({
    ref: leftAnimationRef2,
    animationClass: 'animate-slideInLeft',
    threshold:0.1
  })

   useScrollAnimation({
    ref: rightAnimationRef,
    animationClass: 'animate-slideInRight',
    threshold:0.1
  }) 

  return (
    <section id='about' className='flex flex-col md:flex-row items-center justify-center bg-radial-ellipse'>
      
      {/* Left Column */}
      <div  className='flex flex-col slideLeft items-center uppercase justify-center w-full md:w-1/2 px-5 py-5'>
        <div ref = {leftAnimationRef1} className='mx-5 my-5 px-5 py-5 flex flex-wrap text-2xl'>
           Years of expertise, passion and whole-heartedness put together. Nobi Corporation has been working tirelessly to ensure that your brand’s story is communicated perfectly
        </div>
        <div ref = {leftAnimationRef2} className='mx-5 my-5 px-5 py-5 text-2xl'>
            From organizing corporate events, chalking out strategy for business, developing good relationships with trade partners, website designing, marketing, interior designing and professionally implementing all strategies. We, at Nobi Corporation become your one-stop destination for all your business requirements.
        </div>
      </div>


      {/* Right Column */}
      <div ref = {rightAnimationRef} className='flex items-center slideRight justify-center w-full md:w-1/2 px-5 py-5'>
         <p className='flex justify-center'>
            Noomo creates interactive websites,<br/>
            WebGL storytelling, and AI-powered<br/>
            digital experiences that connect with<br/>
            modern audiences
         </p>
      </div>
    </section>
  )
}

export default About
