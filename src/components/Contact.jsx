import React from 'react'


const contactData = [
    {
        item1 : "Work",
        item2 : "Our Story",
        item3 : "Services",
        item4 : "Contact"
    },
    {
        item1 : "Follow Us",
        item2 : "LinkedIn",
        item3 : "Instagram",
        item4 : "Twitter"
    },
    {
        item1: "Let's grab some coffee",
        item2 : "We are always open to discuss your project,"
    }
]
function Contact() {
  return (
     <section id='contact' className='flex flex-col md:flex-row items-center justify-center bg-radial-ellipse-even'>

              <div className='flex flex-col w-1/3 items-center justify-center my-5' >
                <img src='/images/logo.png' alt='Nobi Logo' className='h-[100px] object-contain mb-4' />
              </div>

               {
            contactData.map((data, index) => (
              <div key={index} className='flex flex-col w-1/3 items-center justify-center my-5' > 
                <ul className='list-style-none list-inside flex flex-col text-xl gap-3'>
                    <li>{data.item1}</li>
                    <li>{data.item2}</li>
                    <li>{data.item3}</li>
                    <li>{data.item4}</li>
                </ul>
              </div>
            ))
        }
        
      
    </section>
  )
}

export default Contact
