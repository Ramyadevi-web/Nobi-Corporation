import React, { useRef, useState } from 'react';

function Contact() {
  const serviceFormRef = useRef(null);
  const jobFormRef = useRef(null);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('No file selected');

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('No file selected');
    }
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const form = serviceFormRef.current;
    const formData = new FormData(form);
    const email = formData.get('email');
    const phone = formData.get('phone');

    if (!validateEmail(email)) return alert('Please enter a valid email.');
    if (!validatePhone(phone)) return alert('Please enter a valid 10-digit phone number.');

    console.log('Service Form Data:', Object.fromEntries(formData.entries()));
    form.reset();
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    const form = jobFormRef.current;
    const formData = new FormData(form);
    const email = formData.get('email');
    const phone = formData.get('phone');
    const resumeFile = formData.get('resume');

    if (!validateEmail(email)) return alert('Please enter a valid email.');
    if (!validatePhone(phone)) return alert('Please enter a valid 10-digit phone number.');
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(resumeFile.type)) return alert('Please upload a PDF or DOCX file.');

    console.log('Job Form Data:', Object.fromEntries(formData.entries()));
    form.reset();
    setFileName('No file selected');
  };

  const inputClasses = 'mb-3 p-2 border border-gray bg-transparent text-black placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-[#20576E]';

  return (
    <section id='contact' className='flex flex-col md:flex-row items-stretch gap-10 justify-center bg-radial-ellipse-even py-10 px-5'>
      
      {/* Service Form */}
      <form ref={serviceFormRef} className='flex flex-col bg-transparent rounded p-6 w-full md:w-1/2' onSubmit={handleServiceSubmit}>
        <h3 className='text-2xl font-semibold mb-4 text-[#20576E] text-center'>Request Our Service</h3>
        <input type="text" name="name" placeholder="Full Name" required className={inputClasses} />
        <input type="email" name="email" placeholder="Email Address" required className={inputClasses} />
        <input type="text" name="phone" placeholder="Phone Number" required className={inputClasses} />
        <input type="text" name="company" placeholder="Company Name" required className={inputClasses} />
        <select name="service" required className='mb-3 w-1/2 p-2 border border-gray bg-[#20576E] text-white   rounded focus:outline-none focus:ring-2 focus:ring-[#1b4451]'>
          <option value="" disabled>Select Service</option>
          <option value="web">Web Development</option>
          <option value="app">App Development</option>
          <option value="marketing">Digital Marketing</option>
          <option value="other">Other</option>
        </select>
        <textarea name="description" placeholder="Brief Description of Requirement" required className={inputClasses + ' h-20'}></textarea>
        <input type="text" name="contact_time" placeholder="Preferred Contact Time" className={inputClasses} />
        <button type="submit" className='bg-[#20576E] mx-auto text-white p-2 w-1/4 flex justify-center rounded hover:bg-[#1b4451] transition'>Submit</button>
      </form>

      {/* Job Form */}
      {/* <form ref={jobFormRef} className='flex flex-col bg-transparent rounded p-6 w-full md:w-1/2' onSubmit={handleJobSubmit}>
        <h3 className='text-2xl font-semibold mb-4 text-[#20576E] text-center'>Join Our Team</h3>
        <input type="text" name="name" placeholder="Full Name" required className={inputClasses} />
        <input type="email" name="email" placeholder="Email Address" required className={inputClasses} />
        <input type="text" name="phone" placeholder="Phone Number" required className={inputClasses} />
        <input type="text" name="position" placeholder="Position Applied For" required className={inputClasses} />
        <textarea name="cover_letter" placeholder="Cover Letter" required className={inputClasses + ' h-20'}></textarea>
        <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" className={inputClasses} />

        <div className='flex items-center mb-3'>
          <button type="button" onClick={handleFileClick} className='bg-gray-400 text-white px-4 py-2 rounded hover:bg-[#1b4451] transition'>
            Upload Resume (PDF/DOCX)
          </button>
          <span className='ml-3 text-gray-500'>{fileName}</span>
          <input type="file" name="resume" ref={fileInputRef} accept=".pdf,.docx" onChange={handleFileChange} className='hidden' required />
        </div>

        <button type="submit" className='bg-[#20576E] text-white p-2 w-1/4 mx-auto flex items-center justify-center rounded hover:bg-[#1b4451] transition'>
          Submit
        </button>
      </form> */}

    </section>
  );
}

export default Contact;
