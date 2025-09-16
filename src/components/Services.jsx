import React,{useEffect, useRef} from 'react'

const serviceData = [
    {
        title: "Service One",
        item1 : "Storytelling websites",
        item2 : "Immersive web experiences",
        item3 : "Brand activation microsites",
        item4 : "Digital event experiences",
        item5 : "3D websites",
        item6 : "Brand activation campaigns",
    },
    {
        title: "Clients",
        item1 : "Salesforce",
        item2 : "AMD",
        item3 : "Coinbase",
        item4 : "Red Bull",
        item5 : "Intel | ai.io",
        item6 : "Yolo Federal Credit Union",
    },
    {
        title: "Industries",
        item1 : "Samsung",
        item2 : "Cadence Design",
        item3 : "Systems",
        item4 : "Space Needle",
        item5 : "OneLine Health",
        item6 : "Middle Finance",
    }
]

const animations = ['animate-slideInLeft', 'animate-fadeInUp', 'animate-slideInRight']

function Services() {

  const columnRefs = useRef([]);

  useEffect(() =>{
  const observerOptions = { threshold : 0.1 }

  const callback = (entries) => {

    entries.forEach((entry) => {
      const target = entry.target;
      const index = target.getAttribute('data-index')

      if(entry.isIntersecting){
        target.classList.add(animations[index])
      }else{
        target.classList.remove(animations[index])
      }
    })
  }  

    const observer = new IntersectionObserver(callback, observerOptions)

    columnRefs.current.forEach((ref, index) =>{
      if(ref){
        ref.setAttribute('data-index',index)
        observer.observe(ref)
      }
    })
    return () => observer.disconnect()

},[])

  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-radial-ellipse'>

        {
            serviceData.map((service, index) => (
              <div key={index} ref={(ele) => columnRefs.current[index] = ele} className='flex flex-col w-1/3 ms-[3em] my-5' >
                <h2 className='text-2xl font-bold my-4'>{service.title}</h2>
                <ul className={`list-style-none list-inside text-xl gap-3 flex flex-col`}>
                    <li>{service.item1}</li>
                    <li>{service.item2}</li>
                    <li>{service.item3}</li>
                    <li>{service.item4}</li>
                    <li>{service.item5}</li>
                    <li>{service.item6}</li>
                </ul>
              </div>
            ))
        }
      
    </div>
  )
}

export default Services
