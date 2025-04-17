"use client";
import 'font-awesome/css/font-awesome.min.css';
import payment from "../../public/payments1.jpeg"
import Image from "next/image";
import Link from "next/link"; // for Next.js routing
import { Link as ScrollLink } from "react-scroll"; // for smooth scroll
import logo from "../../public/S3-logo.jpeg";
import hero from "../../public/hero-img.png";
import banner from "../../public/rnd.jpg"
import { motion } from "framer-motion"; // Import Framer Motion
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLocationDot, faPhone, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { X } from 'lucide-react';
import client1 from "../../public/client-1.png"
import client2 from "../../public/client-2.jpg"
import client3 from "../../public/client-3.png"
import client4 from "../../public/client-4.png"
import client5 from "../../public/client-5.png"
import client6 from "../../public/client-6.png"
import client7 from "../../public/client-7.png"
import client8 from "../../public/client-8.png"
import cta from "../../public/cta-bg.jpg"
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {FaArrowUp,FaUsers,FaFileAlt,FaGlobe,FaChalkboardTeacher,FaProjectDiagram,FaSearch} from "react-icons/fa"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const[show,setshow] = useState(false);

  useEffect(()=>{
    const checkScroll =()=>{
      if(window.scroll > 300) setshow(true);
      else 
        setshow(false)
    }

    window.addEventListener("scroll",checkScroll);
    return ()=> window.removeEventListener('scroll',checkScroll)
  })
const ScrolltoTop = ()=>{
  window.scrollTo({top:0,behavior: 'smooth'})
}





const Achievments = [
{icon: <FaFileAlt/>, value:"2450+",label:"Scopus Publications"},
{icon: <FaGlobe/>, value:"210+",label:"Web of Science Publications"},
{icon:<FaChalkboardTeacher/>, value:"20+",label: "Webinars"},
{icon:<FaUsers/>,value:"2000+",label:"Members"},
{icon:<FaSearch/>,value:"190+",label:"Research Proposals"},
{icon:<FaProjectDiagram/>, value:"25+",label:"Projects Implemented"}
]



const phrases = [
  "Helping All Researchers",
  "Supporting Your Innovations",
  "Guiding Scientific Discoveries",
  "Your Research, Our Mission"
];

const [text, setText] = useState('');
const [phraseIndex, setPhraseIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  const currentPhrase = phrases[phraseIndex];

  if (charIndex < currentPhrase.length) {
    const timeout = setTimeout(() => {
      setText((prev) => prev + currentPhrase[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100);
    return () => clearTimeout(timeout);
  } else {
    const pause = setTimeout(() => {
      setText('');
      setCharIndex(0);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000); // Show full phrase for 2s before switching
    return () => clearTimeout(pause);
  }
}, [charIndex, phraseIndex]);

  return (
    <div>
      {/* Navbar */}

      <nav className="bg-white sticky top-0 z-50 shadow-md p-5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="S3 Logo"
              width={150}
              height={60}
              className="mr-4"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-black" />
            )}
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex flex-wrap gap-4 text-base lg:text-xl font-medium">
            <li><Link href="/" className="text-black hover:text-[#e55d00]">Home</Link></li>
            <li><ScrollLink to="about" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">About Us</ScrollLink></li>
            <li><ScrollLink to="publications" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">Services</ScrollLink></li>
            <li><ScrollLink to="connect" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">Connect Us</ScrollLink></li>
            <li><ScrollLink to="workshops" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">Events & Workshops</ScrollLink></li>
            <li><ScrollLink to="collaborations" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">Collaborate With Us</ScrollLink></li>
            <li><ScrollLink to="technologies" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">Research & Development</ScrollLink></li>
            <li><ScrollLink to="contact" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">Contact Us</ScrollLink></li>
            <li><ScrollLink to="payments" smooth duration={300} offset={-80} className="text-black hover:text-[#e55d00] cursor-pointer">Payments</ScrollLink></li>
          </ul>
        </div>

        {/* Mobile Nav Links */}
        {/* {menuOpen && (
          <ul className="md:hidden mt-4 space-y-3 text-base text-black font-medium">
            <li><Link href="/" className="hover:text-[#e55d00]">Home</Link></li>
            <li><ScrollLink to="about" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">About Us</ScrollLink></li>
            <li><ScrollLink to="publications" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">Services</ScrollLink></li>
            <li><ScrollLink to="connect" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">Connect Us</ScrollLink></li>
            <li><ScrollLink to="workshops" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">Events & Workshops</ScrollLink></li>
            <li><ScrollLink to="collaborations" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">Collaborate With Us</ScrollLink></li>
            <li><ScrollLink to="technologies" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">Research & Development</ScrollLink></li>
            <li><ScrollLink to="contact" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">Contact Us</ScrollLink></li>
            <li><ScrollLink to="payments" smooth duration={300} offset={-80} className="hover:text-[#e55d00] cursor-pointer">Payments</ScrollLink></li>
          </ul>
        )} */}
      </div>
      {menuOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 overflow-y-auto">
    <div className="flex justify-between items-center mb-6">
      <Image src={logo} alt="Logo" width={150} height={40} />
      <button onClick={() => setMenuOpen(false)}>
        <X size={28} className="text-black" />
      </button>
    </div>
    <ul className="space-y-6 text-lg text-black">
      <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
      <li><ScrollLink to="about" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">About Us</ScrollLink></li>
      <li><ScrollLink to="publications" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">Services</ScrollLink></li>
      <li><ScrollLink to="connect" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">Connect Us</ScrollLink></li>
      <li><ScrollLink to="workshops" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">Events & Workshops</ScrollLink></li>
      <li><ScrollLink to="collaborations" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">Collaborate With Us</ScrollLink></li>
      <li><ScrollLink to="technologies" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">Research & Development</ScrollLink></li>
      <li><ScrollLink to="contact" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">Contact Us</ScrollLink></li>
      <li><ScrollLink to="payments" smooth duration={300} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer">Payments</ScrollLink></li>
    </ul>
  </div>
)}
    </nav>


      {/* Content Below Navbar - Same BG Color */}
      <main className="bg-white text-white py-2 px-0">

        {/* Section with Image & Text */}
        <div className="mb-0 flex flex-col md:flex-row items-center px-4 md:px-10">
  {/* Left Side Text */}
  <div className="w-full md:w-1/2 p-0 md:p-5 text-center md:text-left">
    {/* <h3 className="text-2xl md:text-3xl text-gray-500 font-semibold" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      ISO 9001:2015 Certified
    </h3> */}
    {/* <h1 className="text-2xl md:text-4xl text-black font-bold mb-10 mt-5">
      Better Solutions For Your Research
    </h1> */}
     <div className="h-18 mb-10 mt-12 text-black text-4xl md:text-4xl ">
          <span>{text}</span>
          <span className="animate-blink">|</span>
        </div>
    <h2 className="text-3xl md:text-2xl font-bold text-gray-600 mb-10" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      We are a team of researchers helping in all directions of research.
    </h2>
     
    <ul className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-base md:text-lg mt-5 mb-5">
     
      <li>
        <Link href="">
          <button style={{ fontFamily: '"Times New Roman", Times, serif' }} className="bg-[#47b2e4] text-white px-6 py-3 rounded-full h hover:bg-[#f36f12]  transition-all duration-300 w-full sm:w-auto">
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
      className="w-full max-w-[700px] sm:max-w-[400px] flex justify-center"
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
        src={banner} 
        alt="Our Work"
        width={700}
        height={400}
        className="w-full h-auto object-contain"
      />
    </motion.div>
  </div>
</div>

<section id="brandlogos" className="bg-gray-100 py-10">
  <div className="max-w-6xl mx-auto px-4">
  
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
      {[client1, client2, client3, client4, client5, client6, client7, client8].map((logo, index) => (
        <div key={index} className="bg-white p-4 rounded shadow transform transition-transform duration-300 hover:scale-120">
          <Image src={logo} alt={`Client ${index + 1}`} width={180} height={140} />
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
  About S3 PRZ
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

<section id='connect'
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

<section id="collaborations" className="py-5 px-3 bg-gray-100  text-black">
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


<section id="technologies" className="py-20 px-8 bg-gray-100 text-gray-800">
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



<section className="max-w-8xl bg-[#f8f9fc] mx-auto p-4 sm:p-6 md:p-10" id="contact">
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
        <FontAwesomeIcon icon={faSquareEnvelope} className="text-black mt-1 w-5 h-5 mr-3 " />
        <div>
        <strong  style={{ fontFamily: '"Times New Roman", Times, serif' }} className='text-black mr-2'>Email:</strong> 
        <a href="mailto:s3research4@gmail.com" className="text-black mr-3"  style={{ fontFamily: '"Times New Roman", Times, serif' }}>s3research4@gmail.com</a>
        </div>
      </div>

      {/* Call */}
      <div className="flex items-start mb-6">
        <FontAwesomeIcon icon={faPhone} className="text-black mt-1 w-5 h-5 mr-3" />
        <strong  style={{ fontFamily: '"Times New Roman", Times, serif' }} className='mr-2 text-black'>Call:</strong> 
        <p className="text-black "><a href="tel:+919789339435">+91 9789339435</a></p>
      </div>
     
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1167880296052!2d78.1211658!3d9.9242306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58ff69d8c77%3A0xd02a932c77e712e6!2s109%2C%20Vakkil%20New%20St%2C%20Simmakkal%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu%20625001!5e0!3m2!1sen!2sin!4v1744672357723!5m2!1sen!2sin"
          width="100%"
          height="67%"
          loading="lazy"
          allowFullScreen=""
        />
    </div>

    {/* Right: Form */}
    <form className="bg-white shadow-md p-6 sm:p-8 md:p-10 rounded space-y-6 text-black max-w-5xl">
      <div className="grid grid-cols-1  gap-4">
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

<section className='Achievements bg-white shadow-md px-10 py-6 max-w-8xl mx-auto' id='achievements'>
<div>
  <h1 className='font-bold text-3xl text-center text-black mb-10'style={{ fontFamily: '"Times New Roman", Times, serif' }} >Our Achievements</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
{Achievments.map((item,index)=>(
  <div key={index} className='border-2 border-[#f36f12] p-6 rounded-md hover:shadow-lg transition duration-300'>
    <div className='text-[#f36f12] text-5xl mb-4'>{item.icon}</div>
    <div className='text-black text-3xl font-bold'>{item.value}</div>
    <div className='text-sm text-gray-700'>{item.label}</div>

    </div>
))}

</div>
</div>
</section>

{/* <section
  id="newsletter"
  className="flex items-center justify-center bg-[#f8f9fc] py-15 px-4"
>
  <div className="w-full max-w-xl text-center ">
    <h2 className="text-[#37517e] font-bold text-2xl sm:text-3xl mb-2">
      Join Our Newsletter
    </h2>
    <p className="text-gray-600 mb-6 text-sm sm:text-base">
      For latest information
    </p>

    <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-md px-2 py-2">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full sm:flex-grow px-4 py-2 rounded-full text-gray-700 focus:outline-none mb-2 sm:mb-0 sm:mr-2"
      />
      <button className="w-full sm:w-auto bg-gradient-to-r from-[#36d1dc] to-[#5b86e5] text-white px-6 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-all duration-300">
        Subscribe
      </button>
    </div>
  </div>
</section> */}

show && (
  <button
    onClick={ScrolltoTop}
    className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#36b3e0] hover:bg-[#1a78a5] text-white shadow-lg transition-all duration-300"
    aria-label="Scroll to top"
  >
    <FaArrowUp width={20} height={20}/>
  </button>
)
<section id='payments' className='bg-[#f8f9fc] relative px-10 py-10'>
  <h1 className='text-black text-4xl font-bold absolute top-[80px] md:left-[160px] left[0px]'>Payments</h1>
  <center>
    <Image src={payment} width={280} height={100} className="mt-25 " alt="" />
  </center>
  <h1 className='text-black text-3xl lg:ml-30 mt-20 ml-0'>Ethical Policies</h1>
  <div className="ml-4 md:ml-30 gap-5 mt-5 text-black text-lg md:text-xl"> 


  <p className='mb-5'>The publication of an article in a peer-reviewed journal is an essential building block in the development of a coherent and respected network of knowledge.</p>

<p className='mb-5'>It is a direct reflection of the quality of work of the author and the institutions that support them. Peer-reviewed articles support and embody the scientific method. It is therefore important to agree upon standards of expected ethical behavior.</p>

<p className='mb-5'>Submit a paper .doc/.docx/ latex Format should be in the format strictly specified on the journal or conference website.</p>

<p className='mb-5'>Only the selected papers will get the intimation that will be accepted for publication. Kindly do not submit the paper multiple times; it may lead to cancellation of an article/paper.</p>

<p className='mb-5'>All the papers will be checked with advanced plagiarism detection tools like Turnitin or iThenticate.</p>

<p className='mb-5'>Submitted paper cannot be withdrawn at any condition once it is paid or accepted.</p>

<p className='mb-5'>CREP assists only for the publication of papers in journals or conference, Not for review, comment, correction, Indexing, withdrawn, any other correction in papers etc.</p>

<p className='mb-5'>CREP is responsible up to online or published the papers in the journal link.</p>

<p className='mb-5'>Submitted papers will accept or proceed for publication in the journal or conference after the payment only.</p>

<p className='mb-5'>After the payment, all the copyright of your article will be transferred & reserved to publish in a respective journal or conferences.</p>

<p className='mb-5'>Accepted papers are asked to intimate about the Article Processing Charge(APC) or Conference registration immediately.</p>

<p className='mb-5'>After completion of the Article Processing Charge(APC) or Conference registration fee process, Authors are required to send the scan copy of the registration fee receipt or transaction proof with Remitter’s (Participant/Author) name, Paper-ID and the Purpose of remittance through an email.</p>

<p className='mb-5'>Any modification or changes in the paper will be not accepted after the final submission.</p>

<p className='mb-5'>Authors or conference participants MUST bear all banking charges.</p>

<p className='mb-5'>Conference registration fees do not include accommodation and travel.</p>

<p className='mb-5'>All the communication and latest information or notifications through email or website only.</p>

<p className='mb-5'>Do not send the papers with plagiarism, a plagiarized paper will not be considered for publication in the journal as well as in conference. If found the plagiarism in papers and rejecting from journal and conference, there is no refund and necessary action as per required.</p>

<h3 className='text-3xl mb-5 mt-5'>Cancellation & Refund Policy</h3>

<p className='mb-5'>Wrongly deposit money or extra deposit money will be returned back within 03 weeks if the respective candidate informs us within 02 days after the date of money deposit or transaction.</p>

<p className='mb-5'>In case if an author wishes to withdraw their papers from the journal or cancel the registration from the conference, the full amount will not be refunded. Refunds will be subjected to an administrative charge to be borne by the registrant. Bank charges that occur will also have to be borne by the registrant.</p>

<p className='mb-5'>Approved Charge, once received by CREP, will not be refunded at any circumstances. If any paper is cancelled (by either side) due to duplicate publication, plagiarism, author misconduct, authorship dispute, ethical issue, etc, no refund of Publication charge will be done.</p>

<p className='mb-5'>No refund will be made for cancellation after the paper being scheduled in the conference (technical session)</p>

<p className='mb-5'>If the paper does not reach the reviewing stage. Or not accepted, it will publish in another journal by confirming with authors.</p>

<p className='mb-5'>There are no refunds or cancellation of debts, if the author withdraws his or her paper from consideration; or if he or she declines to revise and resubmit.</p>

<p className='mb-5'>There are no refunds or cancellation of debts, once the paper is published or online in the journal link.</p>

<p className='mb-5'>There are no refunds or cancellation of debts if the published paper is removed due to Copyright Infringement Claims or any other issue.</p>

<p className='mb-5'>After Publish Issue / Indexing, the author can’t make any correction in the article.</p>

<p className='mb-5'>After publishing Issue/Indexing, If the author wants to correction in the article he/she has to pay extra as per changes in the article depending on the possibility.</p>

<p className='mb-5'>There are no refunds or cancellation of debts, if Publications may be delayed sometimes as it depends upon the publisher based on upcoming issues.</p>

<h3 className='mb-5 text-3xl mt-4'>Instructions For Payment</h3>

<p className='mb-5'>If you are making payment by NEFT/ RTGS/ IMPS, please inform us of the NEFT/ RTGS/ IMPS acknowledgement number (UTR) by email. A manuscript will not be processed if UTR number is not sent. Receipt of payment will be given by email only after receiving the money to our account (Please give us 24-48 hrs for acknowledgement).</p>

<p className='mb-5'>Please do not make any cash deposit to our account, only online IMPS/ NEFT/ RTGS is strongly recommended. If you want to do cash deposit to our account, kindly add extra INR100/- as cash deposit charge.</p>

<p className='mb-5 mt-10'>You can make payment through Google pay, Paytm, BHIM app, UPI etc. After the payment completion, you have to go to your Bank statement where you will get a payment reference number related to your particular payment. Please send us that particular payment reference no. from your Bank account statement by taking a screenshot or photo by email or WhatsApp.</p>
</div>
</section>


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
          <a href="mailto:s3research4@gmail.com" className="hover:text-[#f36f12]">s3research4@gmail.com</a>
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


