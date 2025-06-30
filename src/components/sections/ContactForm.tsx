import Button from "../ui/Button";

function ContactForm() {
  return (
    <section className=" flex flex-col relative lg:flex-row testimonals-container max-w-[1467px] lg:h-[513px] mx-2 lg:mx-auto mt-[78px] lg:mt-[143px] px-4 md:px-0 mb-10  gap-[105px]">
      <div className=" hidden lg:block lg:w-[589px] relative ml-[15px]">
        <img
          className="absolute lg:top-[20px] lg:left-[70px] object-contain"
          src="./contact/7 (1).png"
          alt=""
        />
      </div>
      <div className="flex justify-center lg:hidden pl-14 ">
          <img
            className=" absolute max-w-[400px] h-auto object-contain top-[-50px]  mx-auto "
            src="./contact/7 (1).png"
            alt=""
          />
        </div>
      <div className="mt-[311px] mb-[115px]  lg:my-auto flex flex-col items-center">
        <h1 className="font-sans text-5xl text-white">
          Get exponential reach <br />
          via AI Marketing
        </h1>
        <div className="flex flex-col lg:flex-row gap-[14px] items-center mt-[57px] lg:mt-[18px]">
          <div className="relative w-full">
            <div className="absolute w-full inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full opacity-75 blur-sm animate-pulse"></div>
            <input
              type="email"
              placeholder="Enter your work email"
              className="relative w-full z-10 px-10 py-1 text-lg text-white placeholder-white/70 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
            />
          </div>
          <Button black={true} text="Get in touch" />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
