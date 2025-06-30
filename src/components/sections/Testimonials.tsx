import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "./testimonials/1.png",
    text: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    name: "Amaka Micheal",
    position: "Media Executive, Buying & Control",
    company: "./testimonials/discord.png",
  },
  {
    id: 2,
    image: "./testimonials/2.png",
    text: "DOML has revolutionized our marketing approach with AI-driven insights that deliver real results.",
    name: "John Smith",
    position: "Marketing Director",
    company: "./testimonials/facebook.png",
  },
  {
    id: 3,
    image: "./testimonials/3.png",
    text: "The platform's analytics capabilities have transformed how we understand our audience.",
    name: "Sarah Johnson",
    position: "Digital Marketing Manager",
    company: "./testimonials/google.png",
  },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative testimonals-container max-w-[1467px] min-h-[513px] mx-2 lg:mx-auto mt-[78px] lg:mt-[143px] px-4 md:px-0">
      <div className="block md:hidden ">
        <div className=" rounded-3xl  p-6 max-w-sm mx-auto min-h-[600px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center h-full"
            >
              <motion.div 
                className="w-100 h-100 rounded-3xl overflow-hidden mb-8 mt-4 ml-12 "
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <img
                  className="w-full h-full object-center"
                  src={testimonials[currentSlide].image}
                  alt=""
                />
              </motion.div>

              <motion.h3 
                className="font-[Montserrat] text-white leading-[200%] text-xl mb-8 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {testimonials[currentSlide].text}
              </motion.h3>

              <motion.div 
                className="mt-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <h1 className="font-[Montserrat] font-semibold text-white text-[25px]  mb-1">
                  {testimonials[currentSlide].name}
                </h1>
                <h2 className="font-[Montserrat] font-light text-white text-xl mb-3">
                  {testimonials[currentSlide].position}
                </h2>
                <motion.img 
                  className="mx-auto" 
                  src={testimonials[currentSlide].company} 
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <motion.button
              onClick={prevSlide}
              className="p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path
                  d="M13.4255 6.43617H1M6.43618 1L1 6.43617L6.43618 11.8723"
                  stroke="white"
                  strokeWidth="1.55319"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  animate={{ scale: index === currentSlide ? 1.3 : 1 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path
                  d="M1 6.43617H13.4255M7.98936 1L13.4255 6.43617L7.98936 11.8723"
                  stroke="white"
                  strokeWidth="1.55319"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:pt-[100px] md:pl-[60px] lg:pl-[113px] ">
        <div className="w-[200px] h-[200px] md:w-[257px] md:h-[257px] flex-shrink-0 overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover block"
              src={testimonials[currentSlide].image}
              alt=""
            />
          </AnimatePresence>
        </div>

        <div className="max-w-[600px] md:max-w-[952px] ml-[40px] md:ml-[66px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.h3
                className="font-[Montserrat] text-white leading-[150%] md:leading-[200%] font-semibold text-[16px] md:text-[20px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {testimonials[currentSlide].text}
              </motion.h3>

              <motion.div
                className="mt-4 md:mt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <h1 className="font-[Montserrat] font-semibold text-white text-[20px] md:text-[25px]">
                  {testimonials[currentSlide].name}
                </h1>
                <h2 className="font-[Montserrat] font-light text-white text-[16px] md:text-[20px] mt-1">
                  {testimonials[currentSlide].position}
                </h2>
                <motion.img
                  className="mt-[7px]"
                  src={testimonials[currentSlide].company}
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute  md:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <motion.button
            onClick={prevSlide}
            className="p-2 text-white hover:text-blue-300 transition-colors"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4255 6.43617H1M6.43618 1L1 6.43617L6.43618 11.8723"
                stroke="white"
                strokeWidth="1.55319"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.svg
                key={index}
                onClick={() => goToSlide(index)}
                className="w-3 h-3 cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  scale: index === currentSlide ? 1.3 : 1,
                }}
                transition={{ duration: 0.3 }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill={
                  index === currentSlide
                    ? "#FFFFFF"
                    : "#171717"
                } />
              </motion.svg>
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            className="p-2 text-white hover:text-blue-300 transition-colors"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.43617H13.4255M7.98936 1L13.4255 6.43617L7.98936 11.8723"
                stroke="white"
                strokeWidth="1.55319"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;