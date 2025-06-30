
interface ButtonProps {
  text: string;
  black:boolean;
}

function Button(props: ButtonProps) {
  return (
     <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-[1px] rounded-3xl text-center flex-none  w-3xs md:w-[324px] lg:w-fit  mx-auto lg:mx-0">
      <a href="#" className={`py-2.5 px-8 rounded-3xl block hover:bg-transparent hover:text-white transition-all duration-300 ${props.black ? 'bg-black text-white':'bg-white text-black'}`}>
        {props.text}
      </a>
    </div>
  );
}

export default Button;
