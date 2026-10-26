import React from "react";
import heroImage from "../../assets/Images/hero1.avif";
import Container from "../../Container";
import Navbar from "../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center">
      <img
        src={heroImage}
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
      />
      <Navbar />

      <Container>
        <div className="relative z-10 lg:flex lg:items-center lg:justify-between text-white">
          {/* left */}
          <div>
            <div>
              <p className="text-6xl">Train smarter.</p>
              <p>Get stronger. </p>
              <p className="text-[#afff38]">See results.</p>
            </div>
            <div className="flex items-center gap-x-4 ">
              <div className="flex text-sm text-[#afff38]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <p>4.9/5 stars from 230+ reviews</p>
              </div>
            </div>
          </div>
          {/* right */}
          <div>
            <p>
              A proven system to improve <br /> performance, build discipline,
              <br /> and deliver measurable results.
            </p>
            <div>
              <button>START THE PROGRAM</button>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
