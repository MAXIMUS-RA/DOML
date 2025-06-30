import { useAppSelector } from "../../store/hooks";
import Button from "../ui/Button";

function Benefits2() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row  lg:items-center px-2 xl:px-0 lg:gap-[139px] overflow-hidden h-auto mt-[101px]  lg:mt-[182px] ">
      <div className=" w full order-2 lg:order-2">
        <h1 className="text-center text-5xl lg:text-start w-full bg-gradient-to-r  from-purple-600 to-blue-500 bg-clip-text text-transparent lg:text-4xl  lg:max-w-[645px] leading-tight">
          AI Marketing.
          <span
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            }  block`}
          >
            Optimized Reach.
          </span>
        </h1>
        <h3 className=" leading-10 text-center text-5xl lg:text-start w-full md:px-10 lg:px-0 line lg:max-w-[562px] p-2.5 mt-6 text-[20px] font-[Montserrat] ">
          It's all about getting your message in front of the right audience and
          creating those valuable
          <span className="font-bold text-blue-600"> relationships</span> Learn
          More about how DOML can help you do just that - all with a simple,
          easy-to-use platform.
        </h3>
        <div className="p-2.5 ">
          <hr className=" bg-gradient-to-r from-purple-600 to-blue-500 w-full md:w-[615px] my-[23px] h-0.5 border-0 mx-auto lg:mx-0" />
        </div>{" "}
        <Button black={false} text={"Learn more!"} />
      </div>
      <div className="w-full md:w-auto flex justify-center order-1">
        <img
          className="max-w-full h-auto md:w-[575px] md:h-[575px] object-contain xl:object-cover"
          src="./benefits2/18.png"
          alt="Benefits illustration"
        />
      </div>
    </section>
  );
}

export default Benefits2;
