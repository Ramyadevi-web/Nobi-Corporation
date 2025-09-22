  import { useState,useEffect, useRef } from 'react'
  import { Canvas } from '@react-three/fiber'
  import { businessData } from '../data/business';
  import useScrollAnimation  from '../hooks/useScrollAnimation';
  import Jellyfish from './JellyFish';
import Tower from './Tower';
import Ball from './Ball';
 

  function BusinessSection({heading, topics, image, type, category, index}) {

    const bgClass = index % 2 === 0 ? 'bg-radial-ellipse-even' : 'bg-radial-ellipse';
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDesc, setSelectedDesc] = useState('');
    const [activeTopicIndex, setActiveTopicIndex] = useState(null);

  const triggerRef = useRef(null);
  const modalRef = useRef(null);

  const topicRefs = useRef([]);
  const typeCategoryRef = useRef(null)


  useScrollAnimation({ref:typeCategoryRef,
                      animationClass:'animate-slideInLeft',
                      threshold:0.1
                    })


useEffect(() => {
  if (topicRefs.current.every(ref => ref !== null)) {
    const callback = (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add('animate-slideInRight');
        } else {
          target.classList.remove('animate-slideInRight');
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    topicRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }
}, [topics]);

  // 👇 CLICK OUTSIDE HANDLER (FIXED)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isModalOpen) return;

      const target = e.target;

      // Check if click is outside BOTH the trigger link and modal container
      if (
        (triggerRef.current && !triggerRef.current.contains(target)) &&
        (modalRef.current && !modalRef.current.contains(target))
      ) {
        setIsModalOpen(false);
        setActiveTopicIndex(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isModalOpen]); // Only depend on isModalOpen now


    return (
      <section id='business' className={`${bgClass} w-full`}>
  
          <div className="flex relative flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl md:text-8xl font-bold mb-6 tracking-[0.3em] text-black w-full mt-[150px] text-center relative">
              {heading}  
            </h1>   
           
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full h-full">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 35 }}
            style={{ background: 'transparent' }}
            className="w-full h-full"
          >
            {/* 👇 JELLYFISH — Top Left */}
            {/* <Jellyfish src="./images/img2.png" size={220} /> */}

            {/* 👇 TOWER — Center Right */}
            {/* <Tower src="./images/img2.png" size={200} /> */}

            {/* 👇 BALL — Bottom Left */}
            {/* <Ball src="./images/img3.png" size={180} /> */}

            {/* Optional: Add ambient light for softness */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[1, 1, 1]} intensity={0.6} />
          </Canvas>
        </div>

      
        </div>

        <div className="flex flex-col md:flex-row items-center items-stretch justify-center">
          <div className='w-1/2 flex items-end justify-center'>
          <div ref={typeCategoryRef} className='flex gap-4 mb-4 slideLeft'>
            <span>{type}</span>
            <span>{category}</span>
          </div>
          </div>

          <div className='w-1/2 flex flex-col items-start justify-start mb-4'> 
            <ul className='list-style-none text-xl gap-3 flex flex-col'>
              {
                topics.map((topic, index) => (  
                  <li key={index} ref={(ele) => topicRefs.current[index] = ele}
                  className='slideRight'>
                  <a href='#'
                  onClick={(e) =>{
                    e.preventDefault();
                    setIsModalOpen(true);
                    setActiveTopicIndex(index);
                    setSelectedDesc(topic.desc)
                    
                  }}>{topic.topic}</a>

                {((activeTopicIndex === index) && isModalOpen) ? (
                 <div ref={modalRef} className="mt-3 p-2 animate-fadeInUp bg-[#ebdfe1] rounded shadow-lg w-full max-w-lg mx-auto">
            <button
              id={`closeModalButton${index}`}
              onClick={() => {
                setIsModalOpen(false);
                setActiveTopicIndex(null);
              }}
              className="flex absolute top-2 right-4 justify-end bg-transparent border-none text-black font-bold text-lg cursor-pointer hover:text-#ffffff-500"
            >
              ×
            </button>
            <p className="mt-8">{selectedDesc}</p>
          </div>) : null}
                  </li>
                ))
              }
            </ul>
          </div> 
        </div>

      </section >
    )
  }

  export default BusinessSection
