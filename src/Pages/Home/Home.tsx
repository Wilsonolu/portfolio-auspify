import { useState, } from 'react';
import './Home.css'



const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [bar, setBar] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

 const toggleDarkMode = () => {
  setDarkMode(prev => !prev);               // state
  document.documentElement.classList.toggle('dark');  // Tailwind
}

  
  const handleBar = () => {
    setBar(prev => !prev)
  }
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async() => {
   // e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission from Portfolio'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Your message has been delivered');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pl-0 pr-7 relative m-0 dark:bg-black">
        <nav className="flex justify-between pt-4 pb-4 fixed w-full shadow-md pr-6 top-0 right-0 z-50 pl-4 mb-0 dark:text-white">
            <div className="font-[600] text-[17px] cursor-pointer dark:text-white ">Wilson Emmanuel</div>
              <div className="hidden lg:flex items-center gap-8 dark:text-white">
      <a href="#about" className="hover:text-gray-500">About</a>
      <a href="#skills" className="hover:text-gray-500">Skills</a>
      <a href="#projects" className="hover:text-gray-500">Projects</a>
      <a href="#resume" className="hover:text-gray-500">Resume</a>
      <a href="#contact" className="hover:text-gray-500">Contact</a>
    </div>
            <div className='flex items-center gap-5'>
            {bar ? <i className="fa-solid fa-bars cursor-pointer lg:hidden" onClick={handleBar}></i> : <i className="fa-solid fa-xmark cursor-pointer lg:hidden" onClick={handleBar}></i>  }
            <i
                className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} cursor-pointer`}
                onClick={toggleDarkMode}
                ></i>

            </div>
        </nav>
               {!bar && (
                <div className="fixed gap-[30px] pt-0 bg-white w-full text-center nav-list top-[64px] left-0 right-0 z-40 mt-0 dark:bg-black">
                            <p className="cursor-pointer mb-3 dark:text-white" onClick={() => setBar(true)}>
                <a href="#about">About</a>
                </p>

                <p className="cursor-pointer mb-3 dark:text-white" onClick={() => setBar(true)}>
                <a href="#skills">Skills</a>
                </p>

                <p className="cursor-pointer mb-3 dark:text-white" onClick={() => setBar(true)}>
                <a href="#projects">Projects</a>
                </p>

                <p className="cursor-pointer mb-3 dark:text-white" onClick={() => setBar(true)}>
                <a href="#resume">Resume</a>
                </p>

                <p className="cursor-pointer pb-3 dark:text-white" onClick={() => setBar(true)}>
                <a href="#contact">Contact</a>
                </p>

            </div>
            )}
        

       
        <div className='text-center'>
         <h1 className='pt-[130px] text-[30px] font-[700] mb-2 lg:text-[40px]'>
  <span className='typing-effect dark:text-white'>Hi, I'm Wilson Emmanuel</span>
</h1>
            <p className='text-[17px] max-w-[680px] m-auto title-sub'>Front-end Engineer specializing in building exceptional digital experiences with React, Next.js, and Tailwind CSS.</p>
            <div className='flex items-center justify-center gap-10 mt-10 mb-10'>
                <p className='text-white bg-black py-2 px-3 rounded-[8px] cursor-pointer  dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>View My Work <i className="ml-2 fa-solid fa-arrow-right-from-bracket"></i></p>
                <p className='border-[1px] border-black py-2 px-3 rounded-[10px] cursor-pointer dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'>Get in touch <i className="fa-solid fa-envelope ml-2"></i></p>
            </div>
            <div>
                <i className="fa-solid fa-arrow-down mt-14 animate-bounce-fade-large dark:text-white"></i>
            </div>

              <div id='about' className='text-center mt-16'>
                <h1 className='text-[26px] font-[700] dark:text-white'>About Me</h1>
                <p className='text-[14px] about-sub mt-6'>I'm a passionate Front-end Engineer with expertise in creating responsive, user-friendly web applications. With a strong foundation in modern JavaScript frameworks and libraries, I specialize in building performant and accessible web experiences.</p>

<p className='text-[14px] about-sub mt-2'>My approach combines technical excellence with creative problem-solving, ensuring that the applications I build not only function flawlessly but also provide an exceptional user experience.</p>

<p className='text-[14px] about-sub mt-2 mb-6'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
                    </p>
              </div>
        </div>
        
        
        <div id='skills' className='mt-10 bg-pink stack py-10 px-4 dark:bg-neutral-950'>
            <h1 className='text-center text-[25px] font-[700] dark:text-white'>My Tech Stack</h1>
 <div className="grid grid-cols-2 gap-14 grido mt-8 lg:grid-cols-4">
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-14 h-14"  />
        <p className="mt-2 dark:text-white">React JS</p>
    </div>
    
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800 ">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-14 h-14" />
        <p className="mt-2 dark:text-white">NextJs</p>
    </div>
    
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-14 h-14" />
        <p className="mt-2 dark:text-white">Tailwind CSS</p>
    </div>
    
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-14 h-14" />
        <p className="mt-2 dark:text-white">Javascript</p>
    </div>
    
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-14 h-14" />
        <p className="mt-2 dark:text-white">Typescript</p>
    </div>
    
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-14 h-14" />
        <p className="mt-2 dark:text-white">HTML</p>
    </div>
    
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-14 h-14" />
        <p className="mt-2 dark:text-white">CSS</p>
    </div>
    
    <div className="flex flex-col items-center bg-white py-6 rounded-[8px] shadow-md griddy dark:bg-neutral-800">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-14 h-14" />
        <p className="mt-2 dark:text-white">GIT</p>
    </div>
</div>
        </div>

        
        <div id='project' className='text-center mt-16'>
            <p className='text-[30px] font-[700] mb-14 dark:text-white'>My Projects</p>
            <div className='flex items-start justify-center gap-10 flex-col lg:flex-row px-6 py-4'>
                <div className='py-6 shadow-md rounded-[8px] bg-white pro dark:bg-neutral-900'>
                    <img src='/Images/trackimg.png' alt="" />
                    <div className='py-4 px-5'>
                                            <p className='text-[20px] font-[700] text-start dark:text-white'>CryptoTrack</p>
                    <p className='text-start pro-sub py-4'>A Next-based crypto tracking app that uses the CoinGecko API to display real-time cryptocurrency prices, price changes, and market trends in a clean, dashboard-style interface.
                    </p>
                    <div className='pro-comp mt-4 flex gap-2'>
                        <p className='px-1 py-1'>Next Js</p>
                        <p className='px-1 py-1'>Typescript</p>
                        <p className='px-1 py-1'>Tailwind</p>
                        <p className='px-1 py-1'>firebase</p>
                    </div>
                     <div className='mt-4'>
                     <a href="https://track-silk-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <p className='bg-black text-white px-2 py-2 live cursor-pointer hover:bg-gray-800 rounded-[10px] dark:bg-white dark:text-black'>
                            Live Demo <i className="fa-solid fa-arrow-trend-up"></i>
                        </p>
                        </a>
                    </div>                      
                    </div>
                     
                </div>
                                   <div className='py-6 shadow-md rounded-[8px] bg-white pro dark:bg-neutral-900 '>
                    <img src='/Images/chowimg.png' alt="" />
                    <div className='py-4 px-5'>
                                            <p className='text-[20px] font-[700] text-start dark:text-white'>Tomatoe</p>
                    <p className='text-start pro-sub py-4'> An e-commerce food ordering app that allows users to browse meals, add items to a cart, and place orders through a simple, user-friendly interface.
                    </p>
                    <div className='pro-comp mt-4 flex gap-2'>
                        <p className='px-1 py-1'>Next Js</p>
                        <p className='px-1 py-1'>Typescript</p>
                        <p className='px-1 py-1'>CSS</p>
                    </div>
                                         <div className='mt-4'>
                    <a href="https://wil-chow-i4g2.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <p className='bg-black text-white px-2 py-2 live cursor-pointer hover:bg-gray-800 rounded-[10px] dark:bg-white dark:text-black'>
                            Live Demo <i className="fa-solid fa-arrow-trend-up"></i>
                        </p>
                        </a>                    
                    </div>   
                    </div>
 
                </div>
                <div className='py-6 shadow-md rounded-[8px] bg-white pro dark:bg-neutral-900'>
                    <img src='/Images/flagimg.png' alt="" />
                    <div className='py-4 px-5'>
                                            <p className='text-[20px] font-[700] text-start dark:text-white'>FlagAi</p>
                    <p className='text-start pro-sub py-4'>A modern, interactive chat interface built with React, TypeScript, and Tailwind CSS that allows users to have conversations with an AI assistant (powered by Google Gemini API) and share files within the chat.
                    </p>
                    <div className='pro-comp mt-4 flex gap-2'>
                        <p className='px-1 py-1'>React</p>
                        <p className='px-1 py-1'>Typescript</p>
                        <p className='px-1 py-1'>Tailwind</p>
                    </div>
                     <div className='mt-4'>
                    <a href="https://flag-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <p className='bg-black text-white px-2 py-2 live cursor-pointer hover:bg-gray-800 rounded-[10px] dark:bg-white dark:text-black'>
                            Live Demo <i className="fa-solid fa-arrow-trend-up"></i>
                        </p>
                        </a>
                    </div>                      
                    </div>
                     
                </div>
            </div>
        </div>
        

        
        <div id='resume' className='text-center mt-20'>
            <p className='text-[30px] font-[700] dark:text-white '>My Resume</p>
            <p className='resum-sub mt-6 text-[16px] mb-8'>Download my resume to learn more about my experience, skills and qualifications.</p>
                <a
      href="/Resume/WilsonResume.docx"
      download
      className="px-4 py-3 rounded-[8px] bg-black text-white mt-8 flex justify-center re-a gap-6 dark:bg-white dark:text-black"
    >
      Download Resume
      <i className="fa-solid fa-download"></i>
    </a>
        </div>
        
        
        <div id='contact' className=' mt-[70px]'>
            <p className='text-[30px] font-[700] text-center mb-8 dark:text-white'>Get In Touch</p>
            <div className='ml-[auto] mr-[auto] contact mt-10 shadow-md rounded-[10px] px-7 py-8 overflow-visible dark:bg-neutral-900'>
                <p className='text-start flex items-start text-[20px] font-[600] dark:text-white'>Contact Me</p>
                <p className='fill mt-2'>Fill out the form below and I'll get back to you as soon as possible</p>

                <div className='flex flex-col'>
                    <label htmlFor="name" className='mt-4 dark:text-white'>Name</label>
                    <input 
                      className='rounded-[10px] px-3 py-3 input' 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your name'
                      required
                    />

                    <label htmlFor="email" className='mt-4 dark:text-white'>Email</label>
                    <input 
                      className='rounded-[10px] px-3 py-3 input' 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Your Email'
                      required
                    />

                    <label htmlFor="message" className='mt-4 dark:text-white'>Message</label>
                    <textarea 
                      className='rounded-[10px] px-3 py-3 input' 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Your message'
                      required
                    />
                    
                    <button 
                      onClick={handleSubmit}
                      disabled={loading}
                      className='text-center bg-black text-white border-[0px] py-2 mt-4 rounded-[7px] cursor-pointer hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-neutral-800 text-white'
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {status && (
                      <p className={`mt-4 text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                        {status}
                      </p>
                    )}
                </div>
            </div>

            <div className='mt-20 icon iconic flex justify-between items-center'>
                <div>
                    <p className='text-[14px] dark:text-white'>© 2025 Wilson Emmanuel. All rights reserved.</p>
                </div>
                <div className='flex items-center gap-4 dark:text-white'>
                    
          <a href='https://x.com/kingwilson123' target='_blank'>  <i className="fa-brands fa-x-twitter"></i>   </a>
          
         <a href='https://www.linkedin.com/in/wilson-gbenga-7ba722245/' target='_blank'>   <i className="fa-brands fa-linkedin"></i> </a>
          
          <a href='https://github.com/Wilsonolu' target='_blank'> <i className="fa-brands fa-github"></i>  </a>
          
                </div>
            </div>
        </div>
        


    </div>
  )
}

export default Home