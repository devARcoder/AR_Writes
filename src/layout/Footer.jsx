import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import FooterSection from "../components/footer/FooterSection";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row bg-[#222] px-4 pt-6 pb-6 lg:pt-20">
        <div className="side text-white md:w-1/2">
            <div className="flex items-center space-x-3 ">
          <Link to="/">
            <div className="side1 shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-0 py-0 rounded-lg w-fit">
              <img
                className="w-13 h-13 object-fit letter-spacing-6"
                src="/images/arb.png"
                alt=""
                />
            </div>
          </Link>
          <h1 className="text-white text-2xl font-bold">AR BLOGS</h1>
                </div>
          <p className="text-sm w-[80%] pt-3">Crafted with passion and precision to deliver modern, user-friendly web experiences. Let's build something amazing together.</p>

          <div className="flex items-center space-x-3 my-4">
            <Linkedin className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg"/>
            <Github className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg"/>
            <Facebook className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg"/>
            <Twitter className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg"/>
            
          </div>
          <h1 className="hidden md:block text-sm">© 2025 AR BLOGS | devARcoder | All Rights Reserved</h1>
        </div>


        <FooterSection/>
      </div>

      <div className=" block md:hidden bg-[#222] text-white text-xs sm:text-sm text-center py-4 border-t border-gray-700">
        <h1 className="block md:hidden">© 2025 AR BLOGS | devARcoder | All Rights Reserved</h1>
      </div>
    </>
  );
};

export default Footer;
