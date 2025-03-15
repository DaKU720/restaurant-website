import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedDiv from "../../AnimatedDiv/AnimatedDiv";

export default function HeroSection() {
  return (
    <AnimatedDiv>
      <section id="preview" className="relative flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-screen md:mt-14 mt-20 md:p-0 bg-white">
        
        {/* Left Part */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:p-10 gap-6 md:gap-10">
          <div>
            <h1 className="font-bold mb-4 md:mb-6" style={{ fontSize: "var(--text-5xl)" }}>
              We provide the <br /> best food for you
            </h1>
            <p style={{ fontSize: "var(--text-xl)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
  
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-start w-full space-y-4 md:space-y-0 md:space-x-4">
            <button className="w-full md:w-auto bg-gray-800 text-white px-6 py-3 rounded-lg text-base">
              Menu
            </button>
            <button className="w-full md:w-auto bg-[#f6651c] hover:bg-[#d65414] text-white px-6 py-3 rounded-lg text-base">
              Book a Table
            </button>
          </div>
  
          {/* Social network */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook">
              <img src="https://i.imgur.com/hAgNZzz.png" alt="Facebook" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="https://i.imgur.com/hRzlbqu.png" alt="Instagram" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="https://i.imgur.com/mKluEZj.png" alt="Twitter" className="w-10 h-10 object-contain" />
            </a>
          </div>
        </div>
  
        {/* Right part */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          {/* Restaurant */}
          <div className="w-full max-w-[800px] h-auto rounded-2xl overflow-hidden shadow-lg">
            <img src="https://i.imgur.com/NVLv0Uf.png" alt="Restaurant" className="w-full h-full object-cover" />
          </div>
  
          {/* Dish */}
          <div className="absolute -bottom-12 -left-16">
  <img src="https://i.imgur.com/ZrgS53o.png" alt="Dish" className="w-[50vw] max-w-[364px] h-auto object-cover" />
</div>

        </div>
      </section>
    </AnimatedDiv>
  );      
}
 