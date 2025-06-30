import { useAppSelector } from "../../store/hooks";
import Button from "../ui/Button";

function Hero() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className="mt-8 md:mt-[93px] px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-7 items-center">
        <div className="w-full md:w-[715px] order-2 lg:order-1 ">
          <h1 className="bg-gradient-to-r text-center lg:text-start from-purple-600 to-blue-500 bg-clip-text text-transparent text-4xl md:text-7xl w-full md:w-[645px] leading-tight">
            AI Marketing.
            <span
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              }  block`}
            >
              Optimized Reach.
            </span>
          </h1>
          <h2 className="my-8 md:my-12 text-lg md:text-2xl text-center lg:text-start font-[Montserrat]">
            Our vision is to revolutionize the way brands and
            <br className="hidden md:block" /> advertisers target, reach
          </h2>
          <hr className="bg-gradient-to-r from-purple-600 to-blue-500 w-full md:w-[615px] mb-8 md:mb-[50px] h-0.5 border-0 mx-auto lg:mx-0" />
          <Button black={false} text="Get Started" />
        </div>

        <div className="order-1 lg:order-2 w-full md:w-auto  flex justify-center">
          <img
            src="./hero/globus.png"
            className="w-full max-w-sm md:max-w-lg  h-auto"
            alt="AI Marketing Globe"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
