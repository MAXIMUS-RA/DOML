import { useAppSelector } from "../../store/hooks";
import Button from "../ui/Button";

function Benefits3() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center px-2 xl:px-0 lg:gap-[135px] overflow-hidden h-auto mt-[157px] ">
      <div className=" w full order-2 lg:order-1">
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
          DOML is a digital media agency powered by AI technology providing real
          time,
          <span className="font-bold text-blue-600">
            {" "}
            data-driven insights
          </span>{" "}
          on your business and audience. The mission of DOML is to create the
          best experiences for companies through intelligent insights, powerful
          analytics and{" "}
          <span className="font-bold text-blue-600">strategic execution</span>.
        </h3>
        <div className="p-2.5 ">
          <hr className=" bg-gradient-to-r from-purple-600 to-blue-500 w-full md:w-[615px] my-[23px] h-0.5 border-0 mx-auto lg:mx-0" />
        </div>{" "}
        <Button black={false} text={"Learn more"} />
      </div>
      <div className="w-full md:w-auto flex justify-center order-1">
        <img
          className="max-w-full h-auto md:w-[531px] md:h-[531px] object-contain xl:object-cover"
          src="./benefits3/50.png"
          alt="Benefits illustration"
        />
      </div>
    </section>
  );
}

export default Benefits3;
