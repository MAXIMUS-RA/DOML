
function Footer() {

  return (
    <footer className="w-full border-t border-gray-300 ">
      <div className="w-full h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400  to-cyan-300"></div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-600 text-sm font-[Montserrat]">
            Copyright © 2022 DOML. All rights reserved.
          </div>

          {/* Terms and Privacy */}
          <div className="text-gray-600 text-sm font-[Montserrat]">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Use & Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
