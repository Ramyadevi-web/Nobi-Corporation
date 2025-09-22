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
      <div  className='flex flex-col slideLeft items-center justify-center w-full md:w-1/2 px-5 py-5'>
        <div ref = {leftAnimationRef1} className='mx-5 my-5 px-5 py-5 flex flex-wrap text-2xl'>
           Nobi Corporation brings to you integrated solutions for your business, ranging from business development, interior designing, exhibitions to branding. 
        </div>
        <div ref = {leftAnimationRef2} className='mx-5 my-5 px-5 py-5 text-2xl'>
          A coming together of dedication, expertise, & passion. We work round the clock to ensure that your brand’s story is communicated perfectly. Our expertise lies in an array of domains from interior designing, website designing, digital marketing & film production.
        </div>
      </div>


      {/* Right Column */}
      <div ref = {rightAnimationRef} className='flex items-center slideRight justify-center w-full md:w-1/2 px-5 py-5'>
         <p className='flex justify-center'>
          We, at Nobi Corporation<br/>
          become your one-stop destination<br/>
          for all your business requirements.
         </p>
      </div>
    </section>
  )
}

export default About
