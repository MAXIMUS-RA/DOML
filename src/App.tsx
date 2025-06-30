import { useEffect } from "react";
import { useAppSelector } from "./store/hooks";
import Benefits1 from "./components/sections/Benefits1";
import Benefits2 from "./components/sections/Benefits2";
import Benefits3 from "./components/sections/Benefits3";
import Clients from "./components/sections/Clients";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Testimonials from "./components/sections/Testimonials";

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    console.log("Current theme:", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className={`min-h-screen w-full mx-auto overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#000000] text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <Hero />
      <Clients />
      <Benefits1 />
      <Benefits2 />
      <Testimonials />
      <Benefits3 />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
