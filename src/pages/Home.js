import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HighlightText } from "../components/core/homePage/HightlightText";
import { Button } from "../components/core/homePage/Button";
import Banner from "../assets/Images/banner.mp4";
import { CodeBlocks } from "../components/core/homePage/CodeBlocks";
import { TimelineSection } from "../components/core/homePage/TimelineSection";
import { LearningLanguageSection } from "../components/core/homePage/LearningLanguageSection";
import { InstructorSection } from "../components/core/homePage/InstructorSection";
import { Footer } from "../components/common/Footer";
import { ExploreMore } from "../components/core/homePage/ExploreMore";

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="text-richblack-900 flex flex-col relative mx-auto w-11/12 justify-between items-center max-w-screen-lg">
        <Link to="/blog">
          <div className="mx-auto rounded-full bg-pink-800 text-white font-bold transition-all duration-200 hover:scale-95 hover:shadow-xl mt-16 p-1 w-fit">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] hover:bg-richblack-500">
              <p>Check the blogs</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl text-blue-100 font-semibold mt-7">
          Stay Updated with the
          <HighlightText text={"Latest News & Blogs"} />
        </div>
        <div className="w-[80%] text-center text-sm font-bold text-blue-100 mt-4">
          Discover the most trending news, inspiring stories, and insightful blogs written by a diverse community of passionate contributors. Join us to explore, share, and grow.
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <Button active={true} linkto={"/signup"}>
            Explore Blogs
          </Button>
          <Button active={false} linkto={"/login"}>
            Share Your Story
          </Button>
        </div>
        <div className="mx-4 my-16 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video muted loop autoPlay className="rounded-lg">
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Block 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold text-blue-100">
                Unlock the World of
                <HighlightText text={"Knowledge & Ideas"} />
              </div>
            }
            subHeading={
              "Read, learn, and share your thoughts on trending topics with our vibrant community of writers and readers."
            }
            btn1={{
              text: "Start Reading",
              linkto: "/blog",
              active: true,
            }}
            btn2={{
              text: "Learn more",
              linkto: "/about",
              active: false,
            }}
            codeblock={`"Success is not final, failure is not fatal: 
            It is the courage to continue that counts. 
            Every challenge you face is an opportunity for growth, 
            a chance to redefine your limits. Stay curious, stay inspired,
            and remember that the power to create your own story lies within you.
            The world is a canvas, and your words are the brushstrokes.
            Embrace the journey, for every step you take shapes the masterpiece of your life. 
            Keep learning, keep growing, and keep sharing your unique perspective with the world."`}
            codeColor={"text-richblack-25"}
            backgroundGradient={"codeblock1"}
          />
        </div>

        {/* Code Block 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold text-blue-100">
                Share Your
                <HighlightText text={"Story in Seconds"} />
              </div>
            }
            subHeading={
              "Join our community of writers and start sharing your thoughts, stories, and insights instantly."
            }
            btn1={{
              text: "Create Your Blog",
              linkto: "/createBlog",
              active: true,
            }}
            btn2={{
              text: "Learn more",
              linkto: "/about",
              active: false,
            }}
            codeblock={`"Your story matters. Every experience, every triumph, every struggle shapes the narrative of who you are. Words hold the power to connect, heal, and inspire. Let your voice be heard, for it may be the spark that ignites change in someone else's life. The best stories are the ones that come from the heart, filled with authenticity and passion. Believe in the power of your words, and never underestimate the impact they can have on the world around you. Keep writing, keep dreaming, and keep inspiring."`}
            codeColor={"text-richblack-25"}
            backgroundGradient={"codeblock2"}
          />
        </div>
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="text-richblack-700 bg-pure-greys-5">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-screen-lg flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row text-white gap-7">
              <Button active={true} linkto={"/blog"}>
                <div className="flex flex-row gap-3">
                  Read the voice of others now
                  <FaArrowRight />
                </div>
              </Button>
              <Button active={false} linkto={"/signup"}>
                Start your Journey
              </Button>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-screen-lg flex flex-col gap-7">
          <div className="flex flex-row gap-5 justify-center mb-10 mt-[90px]">
            <div className="text-4xl text-blue-25 font-semibold w-[40%]">
              Get skills you need for a
              <HighlightText text={"Future in Writing"} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <p className="text-[16px] text-blue-100">
                Build your expertise in writing and blogging with the right guidance and resources. Stay ahead and share your voice with the world.
              </p>
              <Button active={true} linkto={"/blog"}>
                <div>Just go on a ride</div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-pure-greys-5 pb-16">
        <TimelineSection />
        <LearningLanguageSection />
      </div>

      <div className="w-11/12 mx-auto max-w-screen-lg flex flex-col items-center justify-between gap-8 text-white 
            bg-white/10 backdrop-blur-2xl shadow-2xl rounded-xl p-6">
        <InstructorSection />
      </div>

      {/* Section 4 */}
      <Footer />
    </div>
  );
};

export default Home;
