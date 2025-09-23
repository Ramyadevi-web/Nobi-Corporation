import { useEffect, useRef } from 'react';

function Contact() {
  const serviceFormRef = useRef(null);

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const observerOptions = {threshold:0.1}

  useEffect(()=>{
    if(serviceFormRef.current != null){
      const callback = ((entries)=>{
        entries.forEach((entry)=>{
          const target = entry.target;
          if(entry.isIntersecting){
             target.classList.add('animate-slideInRight')
          }else{
            target.classList.remove('animate-slideInRight')
          }
        })
      })

      const observer = new IntersectionObserver(callback,observerOptions);
      if(serviceFormRef.current)
        observer.observe(serviceFormRef.current)

      return () => observer.disconnect();
    }
  },[])

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const form = serviceFormRef.current;
    const formData = new FormData(form);
    const email = formData.get('email');
    const phone = formData.get('phone');

    if (!validateEmail(email)) return alert('Please enter a valid email.');
    if (!validatePhone(phone)) return alert('Please enter a valid 10-digit phone number.');
    
    // Use Netlify's form submission method
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => {
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      alert('Error submitting form. Please try again.');
      console.error('Form submission error:', error);
    });
  };

  const inputClasses = 'mb-3 p-2 border border-gray bg-transparent text-black placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]';

  return (
    <section id='contact' className='flex flex-col md:flex-row items-stretch gap-10 justify-center bg-radial-ellipse-even py-10 px-5'>
      
      {/* Service Form */}
      <form 
        ref={serviceFormRef} 
        name='contact' 
        method='POST' 
        netlify
        data-netlify-honeypot="bot-field"
        className='flex flex-col bg-transparent rounded p-6 w-full md:w-1/2' 
        onSubmit={handleServiceSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        
        <h3 className='text-2xl font-semibold mb-4 text-[#20576E] text-center'>Request Our Service</h3>
        <input type="text" name="name" placeholder="Full Name" required className={inputClasses} />
        <input type="email" name="email" placeholder="Email Address" required className={inputClasses} />
        <input type="text" name="phone" placeholder="Phone Number" required className={inputClasses} />
        <input type="text" name="companyName" placeholder="Company Name" required className={inputClasses} />
        <input type="text" name="services" placeholder="Services" required className={inputClasses} />
        <textarea name="requirement" placeholder="Brief Description of Requirement" required className={inputClasses + ' h-20'}></textarea>
        <input type="text" name="contactTime" placeholder="Preferred Contact Time" className={inputClasses} />
        <button type="submit" className='bg-[#20576E] mx-auto text-white p-2 w-1/4 flex justify-center rounded hover:bg-[#1b4451] transition'>Submit</button>
      </form>
    </section>
  );
}

export default Contact;