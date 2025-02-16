import React from 'react'
import { HighlightText } from '../components/core/homePage/HightlightText'
import aboutus1 from "../assets/Images/aboutus1.jpg";
import aboutus2 from "../assets/Images/aboutus2.jpg";
import aboutus3 from "../assets/Images/aboutus3.jpg";
import { Quote } from "../components/core/AboutPage/Quote"
import FoundingStory from "../assets/Images/FoundationStory.jpg";
import { Stats } from "../components/core/AboutPage/Stats"
import ContactFormSection from '../components/core/AboutPage/ContactFormSection';
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import { Footer } from '../components/common/Footer';

export const About = () => {
  return (
    <div className='text-richblack-5 flex flex-col text-center w-full'>
       <div className='bg-yellow-600 mb-32'>
       <section className='flex w-11/12 justify-center items-center mx-auto max-w-screen-lg relative'>
            <div className='flex flex-col gap-y-10 w-[70%] mx-auto'>
                <header className='font-bold text-4xl mt-20'>
                    Empowering Writers & Readers for a  
                    <HighlightText text={"Better Blogging Experience"} />
                </header>
                <p className='text-richblack-200 text-sm mb-10'>
                    Welcome to our blogging platform—a space where passionate writers share their insights, experiences, and expertise across various topics. 
                    Whether you are a beginner looking to start your blogging journey or a seasoned writer aiming to reach a broader audience, our platform 
                    provides the tools and resources to help you grow.  
                </p>
                <div className='flex mb-10 gap-x-4 -ml-[10%]'>
                    <img src={aboutus1} className='w-[300px] h-[300px] object-cover rounded-lg'/>
                    <img src={aboutus2} className='w-[300px] h-[300px] object-cover rounded-lg'/>
                    <img src={aboutus3} className='w-[300px] h-[300px] object-cover rounded-lg'/>
                </div>
            </div>
        </section>
       </div>

        <section>
            <Quote/>
        </section>

        <section>
            <div className='flex flex-col gap-y-10 text-start w-11/12 max-w-screen-lg mx-auto'>
                <div className='flex flex-row '>

                    <div className='flex flex-col w-[45%] py-10 gap-y-5 text-sm text-richblack-300 pr-12'>
                        <h1 className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent font-semibold text-2xl mb-3">Our Story</h1>
                        
                        <p>Our blog platform was built with the vision of providing a dedicated space for writers to express themselves, share knowledge, and connect with an engaged audience. 
                        Whether you’re an individual writer, a business, or a hobbyist, we offer tools to publish, grow, and monetize your content.</p>
                        
                        <p>We understand the power of words and how they can educate, inspire, and build communities. Our platform bridges the gap between writers and readers, 
                        ensuring that quality content gets the visibility it deserves.</p>
                    </div>

                    <div className='w-[75%] flex justify-center items-center pl-6 py-10'>
                        <img src={FoundingStory} className='w-[700px] h-[400px] object-cover rounded-lg'/>
                    </div>

                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col w-[45%] py-10 gap-y-5 text-sm text-richblack-300 pr-12'>
                        <h1 className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent font-semibold text-2xl mb-3">Our Vision</h1>
                        <p>Our goal is to create an ecosystem where writers can thrive. We believe in providing a platform that encourages creativity, knowledge-sharing, 
                        and engagement. Our vision is to make blogging accessible to everyone, enabling writers to build meaningful connections and readers to discover 
                        valuable content effortlessly.</p>
                    </div>

                    <div className='flex flex-col w-[45%] py-10 gap-y-5 text-sm text-richblack-300'>
                        <h1 className="bg-gradient-to-r from-blue-300 to-richblack-300-400 bg-clip-text text-transparent font-semibold text-2xl mb-3">Our Mission</h1>
                        <p>We aim to provide a seamless blogging experience with easy-to-use writing tools, SEO optimization, and audience engagement features. 
                        Our mission is to empower bloggers with the right resources, whether it's writing guides, monetization strategies, or community support. 
                        We strive to foster a culture of knowledge exchange through insightful blogs, discussions, and collaborations.</p>
                    </div>
                </div>
            </div>
        </section>

        <Stats/>

        <LearningGrid/>

        <ContactFormSection/>

        <Footer/>
        
    </div>
  )
}
