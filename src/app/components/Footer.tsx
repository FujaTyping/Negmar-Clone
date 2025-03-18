import React from "react";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="LogoOverlay bg-blue-900 py-12 text-white flex items-start flex-col md:flex-row p-10 justify-center gap-10 md:gap-16">
        <img
          className="h-18"
          src="https://negmar.com/wp-content/uploads/elementor/thumbs/negmar-footer-logo-q5ar03fumwlzjf0rnxtyrlajng71i4p2aog2kzyy1k.png"
          alt="Negmar Logo"
        />
        <div>
          <h1 className="mb-5 font-bold text-lg">About Us</h1>
          <div className="flex flex-col">
            <a href="#">Founder</a>
            <a href="#">Vision & Mission</a>
            <a href="#">Negmar Community</a>
          </div>
        </div>
        <div>
          <h1 className="mb-5 font-bold text-lg">Headquarters</h1>
          <div className="flex flex-col">
            <a href="#">Altunizade Mah</a>
            <a href="#">Ord Prof. Fahrettin Kerim Gökay Cad</a>
            <a href="#">No:35/1 Üsküdar, İstanbul</a>
            <a href="#">negmar@negmar.com</a>
          </div>
        </div>
        <div>
          <h1 className="mb-5 font-bold text-lg">Contact</h1>
          <div className="flex flex-col">
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">PDPL</a>
            <a href="#">Career</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center py-3 gap-4 md:gap-8 p-5">
        <div className="font-bold text-blue-900">Follow us</div>
        <div className="flex gap-4">
          <a href="#">
            <FaFacebookSquare className="text-blue-900 hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href="#">
            <FaYoutube className="text-blue-900 hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href="#">
            <FaInstagram className="text-blue-900 hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href="#">
            <FaTwitter className="text-blue-900 hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href="#">
            <FaLinkedinIn className="text-blue-900 hover:text-blue-400 transition-all duration-300" />
          </a>
        </div>
        <div className="ml-5 text-blue-900">
          Copyright © 2023 Negmar Denizcilik ve Yatırım A.Ş.
        </div>
      </div>
    </>
  );
}

export default Footer;
