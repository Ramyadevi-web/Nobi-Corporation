import React, { useRef, useState } from 'react';

function Contact() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('No file selected');

  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('No file selected');
    }
  };

  return (
    <section id='contact' className='flex flex-col md:flex-row items-stretch gap-10 justify-center bg-radial-ellipse-even py-10 px-5'>
      
      {/* ... Service Form ... */}
      <form className='flex flex-col bg-transparent rounded p-6 w-full md:w-1/2'> 
         <h3 className='text-2xl font-semibold mb-4 text-[#20576E] text-center'>Request Our Service</h3>
       <input type="text" name="name" placeholder="Full Name" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' />
        <input type="email" name="email" placeholder="Email Address" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' /> 
        <input type="text" name="phone" placeholder="Phone Number" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' /> 
        <input type="text" name="company" placeholder="Company Name" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' /> 
        <select name="service" required className='mb-3 p-3 border border-gray bg-[#20576E] text-white w-1/3 rounded focus:outline-none focus:ring-2 focus:ring-[#1b4451]'> 
        <option value="" className='text-gray' disabled selected>Select Service</option> 
        <option value="web">Web Development</option> 
        <option value="app">App Development</option> 
        <option value="marketing">Digital Marketing</option> 
        <option value="other">Other</option> 
        </select> 
        <textarea name="description" placeholder="Brief Description of Requirement" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E] h-24'></textarea>
         <input type="text" name="contact_time" placeholder="Preferred Contact Time" className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' /> 
         <button type="submit" className='bg-[#20576E] mx-auto text-white p-3 w-1/4 flex justify-center rounded hover:bg-[#1b4451] transition'>Submit</button> 
      </form>

      {/* Job Application Form */}
      <form className='flex flex-col bg-transparent rounded p-6 w-full md:w-1/2'>
        <h3 className='text-2xl font-semibold mb-4 text-[#20576E] text-center'>Join Our Team</h3>

        <input type="text" name="name" placeholder="Full Name" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' />

        <input type="email" name="email" placeholder="Email Address" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' />

        <input type="text" name="phone" placeholder="Phone Number" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' />

        <input type="text" name="position" placeholder="Position Applied For" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' />

        {/* Hidden file input */}
        <input 
          type="file" 
          name="resume" 
          accept=".pdf,.docx" 
          ref={fileInputRef} 
          onChange={handleFileChange}
          className='hidden'
          required
        />

        <textarea name="cover_letter" placeholder="Cover Letter" required className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E] h-24'></textarea>

        <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" className='mb-3 p-3 border border-gray bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]' />

        <div className='flex items-center mb-3'>
         {/* Custom button */}
            <button 
              type="button" 
              onClick={handleCustomButtonClick}
              className='bg-gray-400 text-gray-200 px-4 py-2 hover:scale-105 transition-transform duration-300 rounded hover:font-thinner'
            >
              Upload Resume
            </button>

         {/* Display selected file name */}
          <span className='ml-2 text-gray-700'>{fileName}</span> 
        </div>

        <button type="submit" className='bg-[#20576E] text-white p-3 w-1/4 mx-auto flex items-center justify-center rounded hover:bg-[#1b4451] transition'>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
