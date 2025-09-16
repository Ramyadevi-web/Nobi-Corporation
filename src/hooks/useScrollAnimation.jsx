import React, { useEffect, useRef} from 'react'

function useScrollAnimation({ref = [], animationClass, threshold = 0.1} = {}) {


  const animatedElement = useRef(new Set())

  useEffect(()=>{


  if(!ref.current) return;

    const callback = (entries) =>{
    entries.forEach((entry) => {
       const target = entry.target;

      if(entry.isIntersecting){
        target.classList.add(animationClass)
        animatedElement.current.add(target)
      }else{
        target.classList.remove(animationClass)
        animatedElement.current.delete(target)
      }
    })
  }

  const observer = new IntersectionObserver(callback,{threshold})

  observer.observe(ref.current)

  return () => observer.disconnect();
  },[ref,animationClass,threshold])

  
}

export default useScrollAnimation
