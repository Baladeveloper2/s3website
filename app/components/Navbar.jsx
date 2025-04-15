"use client";
import 'font-awesome/css/font-awesome.min.css';

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/S3-logo.jpeg";
import hero from "../../public/hero-img.png";
import { motion } from "framer-motion"; // Import Framer Motion
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLocationDot, faPhone, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { X } from 'lucide-react';
import client1 from "../../public/client-1.png"
import client2 from "../../public/client-2.png"

import client3 from "../../public/client-3.png"

import client4 from "../../public/client-4.png"

import client5 from "../../public/client-5.png"

import client6 from "../../public/client-6.png"

import client7 from "../../public/client-7.png"

import client8 from "../../public/client-8.png"
import cta from "../../public/cta-bg.jpg"


import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white text-white px-6 py-4 md:w-auto" id="home">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo} // replace with your logo path
            alt="S3 Logo"
            width={150}
            height={100}
            className="mr-4"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} className='text-black' /> : <FontAwesomeIcon icon={faBars} className='text-black' />}
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="text-[#f36f12] hover:text-[#e55d00]">
              Home
            </Link>
          </li>
          <li><a href="#about" className="text-[#f36f12] hover:text-[#e55d00]" >About</a></li>
          <li><a href="#publications" className="text-[#f36f12] hover:text-[#e55d00]">Publications</a></li>
          <li><Link href="#connect" className=" text-[#f36f12] hover:text-[#e55d00]">Connect Us</Link></li>
          <li><Link href="#workshops" className="text-[#f36f12] hover:text-[#e55d00]">Workshop & Events</Link></li>
          <li><Link href="#collaborations" className="text-[#f36f12] hover:text-[#e55d00]">Collaborations</Link></li>
          <li><Link href="#technologies" className="text-[#f36f12] hover:text-[#e55d00]">Research & Development</Link></li>
          <li><Link href="#contact" className=" text-[#f36f12] hover:text-[#e55d00]">Contact</Link></li>
          <li><Link href="#payments" className="text-[#f36f12] hover:text-[#e55d00]">Payments</Link></li>
        </ul>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg text-black">
          <li><Link href="/" className="text-black font-semibold hover:text-white">Home</Link></li>
          <li><a href="#about" className=" text-black hover:text-blue-300">About</a></li>
          <li><a href="#publications" className=" text-black hover:text-blue-300">Publications</a></li>
          <li><Link href="#connect" className="text-black hover:text-blue-300">Connect Us</Link></li>
          <li><Link href="#workshops" className="text-black hover:text-blue-300">Workshop & Events</Link></li>
          <li><Link href="#collaborations" className=" text-black hover:text-blue-300">Collaborations</Link></li>
          <li><Link href="#technologies" className="text-black hover:text-blue-300">Research & Development</Link></li>
          <li><Link href="#contact" className=" text-black hover:text-blue-300">Contact</Link></li>
          <li><Link href="#payments" className=" text-black hover:text-blue-300">Payments</Link></li>
        </ul>
      )}
    </nav>


      {/* Content Below Navbar - Same BG Color */}
      <main className="bg-white text-white py-2 px-2">

        {/* Section with Image & Text */}
        <div className="mb-12 flex flex-col md:flex-row items-center px-4 md:px-10">
  {/* Left Side Text */}
  <div className="w-full md:w-1/2 p-4 md:p-5 text-center md:text-left">
    <h3 className="text-2xl md:text-3xl text-gray-400 font-semibold"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      ISO 9001:2015 Certified
    </h3>
    <h1 className="text-3xl md:text-5xl text-white font-semibold mt-3">
      Better Solutions For Your Research
    </h1>
    <h2 className="text-lg md:text-2xl font-bold text-gray-400 mt-4"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      We are a team of researchers helping in all directions of research.
    </h2>
    
    <ul className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-base md:text-lg mt-8">
      <li>
        <Link href="">
          <button  style={{ fontFamily: '"Times New Roman", Times, serif' }} className="bg-[#47b2e4] text-white px-6 py-3 rounded-full hover:bg-[#f36f12] transition-all duration-300 w-full sm:w-auto">
            Call for Chapters
          </button>
        </Link>
      </li>
      <li>
        <Link href="">
          <button  style={{ fontFamily: '"Times New Roman", Times, serif' }} className="bg-[#47b2e4] text-white px-6 py-3 rounded-full h hover:bg-[#f36f12]  transition-all duration-300 w-full sm:w-auto">
            Download Brochures
          </button>
        </Link>
      </li>
      <li>
        <Link href="">
          <button  style={{ fontFamily: '"Times New Roman", Times, serif' }} className="bg-[#47b2e4] text-white px-6 py-3 rounded-full hover:bg-[#f36f12] transition-all duration-300 w-full sm:w-auto">
            Plagiarism Checking
          </button>
        </Link>
      </li>
    </ul>
  </div>

  {/* Right Side Image with Animation */}
  <div className="flex justify-center mt-10 md:mt-0 w-full md:w-1/2">
    <motion.div
      className="w-full max-w-[400px] sm:max-w-[600px] flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: [0, -20, 0] }}
      transition={{ 
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }}
    >
      <Image 
        src={hero} 
        alt="Our Work"
        width={620}
        height={550}
        className="w-full h-auto object-contain"
      />
    </motion.div>
  </div>
</div>

<section id="brandlogos" className="bg-gray-100 py-10">
  <div className="max-w-6xl mx-auto px-4">
  
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
      {[client1, client2, client3, client4, client5, client6, client7, client8].map((logo, index) => (
        <div key={index} className="bg-white p-4 rounded shadow transform transition-transform duration-300 hover:scale-130">
          <Image src={logo} alt={`Client ${index + 1}`} width={80} height={50} />
        </div>
      ))}
    </div>
  </div>
</section>



  <section id="about" className="py-16 px-6 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    
<h2
  style={{ fontFamily: '"Times New Roman", Times, serif' }}
  className="text-4xl font-bold text-gray-900 md:font-medium"
>
  About S3 Research & Support
</h2>

    <div className="w-full border-b-4 border-blue-400 mx-auto mt-2"></div>

    {/* Description */}
    <p className="text-lg leading-relaxed text-gray-700 mt-6">
    S3 is a Research & Development venture and was built-in as S3 Technologies in 2007. The journey started with limited technical experts;
    but our strive work and dedication has made us reach an impressive success and tech giant for past 14 years in our field.We have expanded ourselves with clients in an surroundings.
    Our organization has now enhanced our services in other education fields like Funded Projects,Software Guidance Division, and more.
    </p>
  </div>

  {/* What We Do Section */}
  <div className="max-w-4xl mx-auto mt-10"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
    <h3 className="text-2xl font-bold text-gray-900">What We Do:</h3>

    {/* Publications */}
    <div className="mt-6">
    <h2
  className="text-xl font-semibold"
  style={{ fontFamily: '"Times New Roman", Times, serif' }}
>📚 Publications:</h2>
      <ul className="mt-2 space-y-2 text-gray-700"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">📘</span> Journals
        </li>
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">📅</span> Conference
        </li>
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">📖</span> Book Publication
        </li>
      </ul>
    </div>

    {/* Workshops & Events */}
    <div className="mt-6">
      <h4 className="text-xl font-semibold">🎤 Workshop & Events:</h4>
      <ul className="mt-2 space-y-2 text-gray-700">
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">💻</span> Online Training
        </li>
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">🌐</span> Webinar
        </li>
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">📅</span> Online Conference
        </li>
      </ul>
    </div>

    {/* Research & Development */}
    <div className="mt-6">
      <h4 className="text-xl font-semibold">🔬 Research & Development:</h4>
      <ul className="mt-2 space-y-2 text-gray-700">
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">🖥️</span> Software Development
        </li>
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">🌍</span> Website Development
        </li>
        <li className="flex items-center">
          <span className="text-blue-400 mr-2">📱</span> Mobile Application Development
        </li>
      </ul>
    </div>
  </div>
</section>


         {/* Below Hero Section - Page Content with Navigation */}
         <section id="publications" className="py-16 px-6 bg-gray-100 text-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-gray-900 md:text-4xl">Publications</h2>
    <div className="w-full border-b-4 border-blue-400 mx-auto mt-2"></div>

    {/* Description */}
    <p className="text-lg leading-relaxed text-gray-700 mt-6">
    A researcher's principal responsibility is to communicate technical findings to the rest of the scientific
     community. Scientific communication, whether written or spoken, is a vital stage in the scientific
      process and the primary engine of progress within a scientific discipline. As a result, 
      putting together a written scientific article should not be done lightly. We felt it could 
      be useful to highlight some of the common elements of a well-constructed scientific article 
      as part of our contribution to the larger scientific community.
    </p>
  </div>

  {/* Publication Services - Card Layout */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
    
    {/* Article Writing */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">📝</span>
      <h4 className="text-xl font-semibold mt-4">Article Writing</h4>
      <p className="text-gray-600 mt-2">
      The term "high-quality article" refers to the publishing of a 
      high-quality journal article. As a result, we take great attention while producing research papers. We assist with the submission of new research papers in the fields of CSE, IT, ECE, and management to a variety of journals, including IEEE, Elsevier, Springer, IET, SCI, Scopus, and any other UGC-approved publications. The cost and time it takes to prepare a 
      journal are determined by the kind of publication.
      </p>
    </div>

    {/* Thesis Writing */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">📄</span>
      <h4 className="text-xl font-semibold mt-4">Thesis Writing</h4>
      <p className="text-gray-600 mt-2">
      Thesis writing is the process of documenting one's study. 
      This is the most important aspect of research. We encourage you to write 
      a research thesis in CSE, IT, ECE, or Management that adheres to the 
      notions presented in the scholar's research publications. In less time, detailed 
      documentation of the research activity may be completed.
      </p>
    </div>

    {/* Implementation */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">⚙️</span>
      <h4 className="text-xl font-semibold mt-4">Implementation</h4>
      <p className="text-gray-600 mt-2">
      Finding a research gap, generating a solution, assessing the feasibility, 
      and implementing the answer are all steps in the research work implementation process.
       For the implementation, any programming languages such as Python, Java, Dotnet, MATLAB, 
       and any tools like as Hadoop, NS2, and NS3 may be utilized. The cost of implementation is
       determined by the solution's complexity.
      </p>
    </div>

    {/* Proposal Writing */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">📑</span>
      <h4 className="text-xl font-semibold mt-4">Proposal Writing</h4>
      <p className="text-gray-600 mt-2">
      A research proposal is required to apply for a research program at any university. 
      It's a synopsis of the planned study. It defines the subject that the scholar will 
      address and elaborates on his or her field of research. It should justify the research's
       purpose and strategy. We assist in the preparation of proposals to numerous universities 
       throughout the world in the fields of CSE, IT, ECE, and management.
      </p>
    </div>
  </div>
</section>

<section
  style={{
    backgroundImage: `linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(${cta.src})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
  className="text-white"
>
  <div className="p-10">
    <h1 className='text-4xl font-extrabold flex items-center justify-center mt-5 mb-8' style={{ fontFamily: '"Times New Roman", Times, serif' }}>Connect us on WhatsApp group</h1>
    <p className='text-center text-2xl mb-18'style={{ fontFamily: '"Times New Roman", Times, serif' }} >
      On WhatsApp group you will find all updates related to Research, Publication, International and National Conferences, Workshop, Seminars, Webinars, Trainings and Research Guidance
    </p>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10'>
<button className="px-15 py-2 border hover:bg-[#f36f12] border-white rounded-full  transition">WhatsApp Group-1 Full</button>
<button className='px-15 py-2 border hover:bg-[#f36f12] border-white rounded-full transition'>WhatsApp group-2</button>
<button className='px-15 py-2 border border-white rounded-full hover:bg-[#f36f12] transition'>WhatsApp group-3</button>
<button className='px-15 py-2 border border-white rounded-full hover:bg-[#f36f12] transition'>WhatsApp group-4</button>
<button className='px-15 py-2 border border-white rounded-full hover:bg-[#f36f12] transition'>WhatsApp group-5</button>
</div>
  </div>
</section>




<section id="workshops" className="py-16 px-6 bg-gray-100 text-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-gray-900"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Workshops & Events</h2>
    <div className="w-full border-b-4 border-blue-400 mx-auto mt-2"></div>

    {/* Description */}
    <p className="text-lg leading-relaxed text-gray-700 mt-6" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      Join our research training programs, academic workshops, and international conferences to expand your expertise.
    </p>
  </div>

  {/* Event Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
    
    {/* International Conference 2021 */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">🎤</span>
      <h4 className="text-xl font-semibold mt-4"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>International Conference 2021 (ICT-SGS-1)</h4>
      <p className="text-gray-600 mt-2">
        A global platform for researchers to present and publish their work in esteemed journals.
      </p>
      <a href="#" className="text-blue-600 font-bold mt-4 inline-block">Learn More →</a>
    </div>

    {/* Research Reading Skill Exam */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">📚</span>
      <h4 className="text-xl font-semibold mt-4"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>International Research Reading Skill Exam-1 (IRRSE-1)</h4>
      <p className="text-gray-600 mt-2">
        Evaluate and enhance your research reading skills with our structured exam program.
      </p>
      <a href="#" className="text-blue-600 font-bold mt-4 inline-block">Download Exam Brochure →</a>
    </div>

    {/* MOU Collaborations */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">🤝</span>
      <h4 className="text-xl font-semibold mt-4"style={{ fontFamily: '"Times New Roman", Times, serif' }} >MOU Collaborations</h4>
      <p className="text-gray-600 mt-2">
        We invite international organizations to collaborate in research events, sponsorship, and promotion.
      </p>
      <a href="#" className="text-blue-600 font-bold mt-4 inline-block">Collaborate with Us →</a>
    </div>

    {/* Appointment */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">📅</span>
      <h4 className="text-xl font-semibold mt-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Schedule an Appointment</h4>
      <p className="text-gray-600 mt-2">
        Want to conduct a conference, workshop, or seminar? Get in touch with us today.
      </p>
      <a href="mailto:care@creppvtltd.com" className="text-blue-600 font-bold mt-4 inline-block">Contact Us →</a>
    </div>

    {/* Call for Paper */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">📄</span>
      <h4 className="text-xl font-semibold mt-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Call for Papers</h4>
      <p className="text-gray-600 mt-2">
        Submit your abstracts or full papers to SCOPUS, Web of Science, and IEEE-indexed journals.
      </p>
      <a href="#" className="text-blue-600 font-bold mt-4 inline-block">Submit Paper →</a>
    </div>

    {/* Be a Speaker, Reviewer & Editor */}
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <span className="text-blue-500 text-4xl">🎓</span>
      <h4 className="text-xl font-semibold mt-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Be a Speaker, Reviewer & Editor</h4>
      <p className="text-gray-600 mt-2">
        Join as a world-class speaker, reviewer, or editor in top international research events.
      </p>
      <a href="#" className="text-blue-600 font-bold mt-4 inline-block">Join Us →</a>
    </div>

  </div>
</section>

<section id="collaborations" className="py-5 px-3  text-black">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Our Collaborations</h2>
    <p className="text-lg mb-12"style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      We are proud to collaborate with leading organizations and institutions to bring innovative technologies to the forefront.
    </p>
    
    {/* Conference Collaboration */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg mb-8">
      <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>International Conference on Technologies for Smart Green Connected Society 2021 (ICT-SGS-1)</h3>
      <p className="text-lg mb-6" >
        A remarkable event that brings together experts from around the globe to discuss the future of smart and sustainable societies, and the role of technology in achieving greener, more connected communities.
      </p>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block text-indigo-600 hover:text-indigo-800 font-semibold">
        Learn More about ICT-SGS-1
      </a>
    </div>

    {/* Journals Collaboration */}
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-4"style={{ fontFamily: '"Times New Roman", Times, serif' }}>A2Z Journals: Scholarly Publishing</h3>
      <p className="text-lg mb-6">
        A2Z Journals is dedicated to publishing open-access, scholarly, peer-reviewed, interdisciplinary, and fully refereed international journals. We aim to provide a platform for scientific research and innovative ideas to reach a global audience.
      </p>
      <a href="https://a2zjournals.com" target="_blank" rel="noopener noreferrer" className="inline-block text-indigo-600 hover:text-indigo-800 font-semibold">
        Explore A2Z Journals
      </a>
    </div>
  </div>
</section>


<section id="technologies" className="py-20 px-8 bg-gray-50 text-gray-800">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold leading-tight mb-12"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Our Expertise in Software, Web, and Mobile Development</h2>

    {/* Java */}
    <div className="bg-white p-5 rounded-3xl shadow-xl mb-12">
      <h3 className="text-3xl font-semibold text-indigo-600 mb-4">Java Development</h3>
      <p className="text-lg text-gray-700 mb-4">
        Java is a robust, object-oriented programming language known for its scalability, portability, and security.
      </p>
      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
      <ul className="text-gray-600 mb-4">
        <li>- Platform Independence ("Write Once, Run Anywhere")</li>
        <li>- Enterprise-Grade Applications for large-scale systems</li>
        <li>- Rich Ecosystem with libraries and frameworks</li>
        <li>- Security features for safe development</li>
      </ul>
      <h4 className="font-semibold text-gray-800 mb-2">Specialty:</h4>
      <p className="text-gray-600 mb-4">
        Ideal for handling large volumes of data and concurrent users in enterprise systems, big data platforms, and cloud apps.
      </p>
      <a href="https://www.oracle.com/java/" target="_blank" className="text-indigo-600 font-semibold">Learn More about Java</a>
    </div>

    {/* Node.js */}
    <div className="bg-white p-8 rounded-xl shadow-xl mb-12">
      <h3 className="text-3xl font-semibold text-green-600 mb-4">Node.js Development</h3>
      <p className="text-lg text-gray-700 mb-4">
        Node.js is a fast, scalable, server-side runtime built on Chrome's V8 JavaScript engine, ideal for real-time applications.
      </p>
      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
      <ul className="text-gray-600 mb-4">
        <li>- High performance with event-driven, non-blocking architecture</li>
        <li>- Unified codebase with JavaScript on both client and server</li>
        <li>- Perfect for real-time applications like chat and dashboards</li>
        <li>- Vast npm ecosystem with over 1 million libraries</li>
      </ul>
      <h4 className="font-semibold text-gray-800 mb-2">Specialty:</h4>
      <p className="text-gray-600 mb-4">
        Ideal for microservices, APIs, and applications requiring real-time data exchange.
      </p>
      <a href="https://nodejs.org/" target="_blank" className="text-green-600 font-semibold">Learn More about Node.js</a>
    </div>

    {/* React.js */}
    <div className="bg-white p-8 rounded-xl shadow-xl mb-12">
      <h3 className="text-3xl font-semibold text-blue-600 mb-4">React.js Development</h3>
      <p className="text-lg text-gray-700 mb-4">
        React.js is a JavaScript library for building interactive and dynamic UIs with a component-based architecture.
      </p>
      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
      <ul className="text-gray-600 mb-4">
        <li>- Component-based architecture for modular development</li>
        <li>- Virtual DOM for enhanced performance</li>
        <li>- Backed by Facebook with a strong developer community</li>
        <li>- SEO-friendly with server-side rendering</li>
      </ul>
      <h4 className="font-semibold text-gray-800 mb-2">Specialty:</h4>
      <p className="text-gray-600 mb-4">
        Best for single-page applications (SPAs) and complex web apps with rich UIs.
      </p>
      <a href="https://reactjs.org/" target="_blank" className="text-blue-600 font-semibold">Learn More about React.js</a>
    </div>

    {/* Next.js */}
    <div className="bg-white p-8 rounded-xl shadow-xl mb-12">
      <h3 className="text-3xl font-semibold text-teal-600 mb-4">Next.js Development</h3>
      <p className="text-lg text-gray-700 mb-4">
        Next.js is a React-based framework for server-side rendering (SSR) and static site generation (SSG) with a focus on performance.
      </p>
      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
      <ul className="text-gray-600 mb-4">
        <li>- Improved performance with SSR and SSG</li>
        <li>- Automatic code splitting for optimal load times</li>
        <li>- Built-in API routes for serverless functions</li>
        <li>- Developer-friendly with TypeScript support</li>
      </ul>
      <h4 className="font-semibold text-gray-800 mb-2">Specialty:</h4>
      <p className="text-gray-600 mb-4">
        Ideal for high-performance platforms like e-commerce sites and blogs.
      </p>
      <a href="https://nextjs.org/" target="_blank" className="text-teal-600 font-semibold">Learn More about Next.js</a>
    </div>

    {/* Flutter */}
    <div className="bg-white p-8 rounded-xl shadow-xl mb-12">
      <h3 className="text-3xl font-semibold text-purple-600 mb-4">Flutter Development</h3>
      <p className="text-lg text-gray-700 mb-4">
        Flutter is a cross-platform toolkit from Google for building mobile, web, and desktop apps with a single codebase.
      </p>
      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
      <ul className="text-gray-600 mb-4">
        <li>- Cross-platform development for mobile, web, and desktop</li>
        <li>- Rich UI with customizable widgets</li>
        <li>- Hot reload for fast development</li>
        <li>- Native performance across platforms</li>
      </ul>
      <h4 className="font-semibold text-gray-800 mb-2">Specialty:</h4>
      <p className="text-gray-600 mb-4">
        Perfect for visually appealing, high-performance apps on tight deadlines.
      </p>
      <a href="https://flutter.dev/" target="_blank" className="text-purple-600 font-semibold">Learn More about Flutter</a>
    </div>

    {/* AI */}
    <div className="bg-white p-8 rounded-xl shadow-xl mb-12">
      <h3 className="text-3xl font-semibold text-red-600 mb-4">Artificial Intelligence (AI)</h3>
      <p className="text-lg text-gray-700 mb-4">
        AI empowers businesses with systems capable of learning, reasoning, and problem-solving for optimized decision-making.
      </p>
      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
      <ul className="text-gray-600 mb-4">
        <li>- Data-driven insights using machine learning models</li>
        <li>- Automation for repetitive tasks to improve efficiency</li>
        <li>- Personalization through tailored recommendations</li>
        <li>- Predictive analytics for forecasting trends</li>
      </ul>
      <h4 className="font-semibold text-gray-800 mb-2">Specialty:</h4>
      <p className="text-gray-600 mb-4">
        Expertise in natural language processing, computer vision, chatbots, predictive modeling, and AI-driven analytics.
      </p>
      <a href="https://www.ibm.com/artificial-intelligence" target="_blank" className="text-red-600 font-semibold">Learn More about AI</a>
    </div>
  </div>
</section>



<section className="max-w-6xl mx-auto p-4 sm:p-6 md:p-10" id="contact">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
    CONTACT
  </h2>
  <div className="border-b-2 border-blue-400 w-full mx-auto mb-10" />

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Left: Info & Map */}
    <div className="bg-white shadow-md p-6 sm:p-8 md:p-10 rounded">
      {/* Location */}
      <div className="flex items-start mb-6">
        <FontAwesomeIcon icon={faLocationDot} className="mt-1 text-black w-5 h-5 mr-3" />
        <div>
        <strong  style={{ fontFamily: '"Times New Roman", Times, serif' }} className='text-black'>Location:</strong> 
          <p className="text-black mt-1" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            109, Vakkil New Street, Opposite of Bus stop, Simmakkal, Madurai-625002
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start mb-6">
        <FontAwesomeIcon icon={faSquareEnvelope} className="text-black mt-1 w-5 h-5 mr-3" />
        <div>
        <strong  style={{ fontFamily: '"Times New Roman", Times, serif' }} className='text-black'>Email:</strong> 
        <a href="mailto:mohankumar@s3techindia.com" className="text-black"  style={{ fontFamily: '"Times New Roman", Times, serif' }}> mohankumar@s3techindia.com</a>
        </div>
      </div>

      {/* Call */}
      <div className="flex items-start mb-6">
        <FontAwesomeIcon icon={faPhone} className="text-black mt-1 w-5 h-5 mr-3" />
        <strong  style={{ fontFamily: '"Times New Roman", Times, serif' }} className='mr-2 text-black'>Call:</strong> 
        <p className="text-black ">+91 8299178291</p>
        <div>
       
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-6 border-t pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1167880296052!2d78.1211658!3d9.9242306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58ff69d8c77%3A0xd02a932c77e712e6!2s109%2C%20Vakkil%20New%20St%2C%20Simmakkal%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu%20625001!5e0!3m2!1sen!2sin!4v1744672357723!5m2!1sen!2sin"
          width="100%"
          height="200"
          loading="lazy"
          allowFullScreen=""
          className="rounded w-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    {/* Right: Form */}
    <form className="bg-white shadow-md p-6 sm:p-8 md:p-10 rounded space-y-6 text-black max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
       

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Enter your message"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-[#36b3ec] text-white px-6 py-2 rounded-md hover:bg-[#f36f12] transition-colors"
        >
          Apply Now
        </button>
      </div>
    </form>
  </div>
</section>





{/* <section id="contact" className="py-16 px-8  text-black">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    <div className="space-y-6">
      <h2 className="text-4xl font-bold leading-tight text-center mb-6"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Contact Us</h2>
      <p className="text-lg text-center mb-6">Have questions? Get in touch with us.</p>

      <div>
        <h3 className="text-xl font-semibold text-black"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Our Office Location</h3>
        <p className="text-lg  mb-4 text-black">
        109, Vakkil New Street, Opposite of Bus stop, Simmakkal, Madurai
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-black"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Contact Details</h3>
        <p className="text-lg text-black mb-4">
          <strong  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Email:</strong> 
          <a href="mailto:mohankumar@s3techindia.com" className="text-black"  style={{ fontFamily: '"Times New Roman", Times, serif' }}> mohankumar@s3techindia.com</a>
        </p>
        <p className="text-lg text-gray-200 mb-4">
          <strong className='text-black' style={{ fontFamily: '"Times New Roman", Times, serif' }}>Call:</strong> 
          <a href="tel:+919789339435" className="text-black"  style={{ fontFamily: '"Times New Roman", Times, serif' }}> +91 9789339435</a>
        </p>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-black text-center mb-10 mr-5 md:w-auto w-full"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Our Office on Map</h3>
      <div className="h-64 px-5">
      <div className="w-full h-[450px]">
      <div className="w-full h-[450px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1167880296052!2d78.1211658!3d9.9242306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58ff69d8c77%3A0xd02a932c77e712e6!2s109%2C%20Vakkil%20New%20St%2C%20Simmakkal%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu%20625001!5e0!3m2!1sen!2sin!4v1744672357723!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
</div>
</div>
      </div>
    </div>

  </div>
</section> */}


{/* <section id="apply" className="py-14 md:px-4 px-0  text-black">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mt-30"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Apply Now</h2>
    <p className="text-lg text-center mb-10 mt-8"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Fill out the form below to apply for our services.</p>

    <div className="bg-white p-6 rounded-xl shadow-xl">
      <form className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-gray-700 font-semibold">Mobile Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your mobile number"
            className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-gray-700 font-semibold">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-gray-700 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#f36f12] transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  </div>
</section> */}
<section id="footer" className="bg-[#2B4B77] text-white py-16">
  <div className="max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-12">

      {/* Logo Section */}
      <div className="flex items-center flex-col">
        <Image src={logo}  width={80} height={50} alt="Company Logo" className="h-12 w-auto" />
        <p className="text-xl  font-bold ml-12 mt-3"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>S3-PRZ RESEARCH & PUBLICATION</p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-xl font-semibold mb-4"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        Quick Links</h4>
        <ul className="space-y-2">
    <li><a href="#home" className="hover:text-[#f36f12]">Home</a></li>
    <li><a href="#about" className="hover:text-[#f36f12]">About</a></li>
    <li><a href="#publications" className="hover:text-[#f36f12]">Publications</a></li>
    {/* <li><a href="#connect" className="hover:underline">Connect Us</a></li> */}
    {/* <li><a href="#workshops" className="hover:underline">Workshop & Events</a></li> */}
    {/* <li><a href="#collaborations" className="hover:underline">Collaborations</a></li> */}
    {/* <li><a href="#technologies" className="hover:underline">Research & Development</a></li> */}
    <li><a href="#contact" className="hover:text-[#f36f12]">Contact</a></li>
        </ul>
      </div>

      {/* Contact Information */}
      <div>
        <h4 className="text-xl font-semibold mb-4"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Contact Information</h4>
        <p className="mb-2"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>109, Vakkil New Street, Opposite of Bus stop, Simmakkal, Madurai</p>
        <p className="mb-2"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <a href="mailto:mohankumar@s3techindia.com" className="hover:text-[#f36f12]">mohankumar@s3techindia.com</a>
        </p>
        <p className="mb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <a href="tel:+919789339435" className="hover:text-[#f36f12]">+919789339435</a>
        </p>
      </div>

      {/* Social Media Links */}
      <div>
      <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Follow Us</h4>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f36f12]">
          <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f36f12]">
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f36f12]">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f36f12]">
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
      </div>
    </div>
    </div>

    {/* Copyright Section */}
    <div className="text-center text-sm mt-20" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <p>&copy; {new Date().getFullYear()} S3-PRZ RESEARCH & PUBLICATION. All Rights Reserved.</p>
    </div>
  </div>
</section>
      </main>   
    </div>
  );
}


