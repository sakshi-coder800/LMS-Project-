import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterestP } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-7 px-4">
      <h2 className="text-4xl text-center p-4 capitalize ">these are our companies {'{"'} {'"}'}</h2>

      <div className="box2 flex justify-between  flex-col md:flex-row  items-start">
      <ul>
            <li className="head-sec uppercase text-xl"><a href="#">Getting started</a></li>
            <li><a href="#">Installation</a></li>
            <li><a href="#">Release Notes</a></li>
            <li><a href="#">Upgrade Guide</a></li>
            <li><a href="#">Using with Preprocessors</a></li>
            <li><a href="#">Optimizing for Production</a></li>
            <li><a href="#">Browser Support</a></li>
            <li><a href="#">IntelliSense</a></li>
          </ul>
          <ul>
            <li className="head-sec uppercase text-xl">Core Concepts</li>
            <li><a href="#">Utility-First</a></li>
            <li><a href="#">Responsive Design</a></li>
            <li><a href="#">Hover, Focus, & Other States</a></li>
            <li><a href="#">Dark Mode</a></li>
            <li><a href="#">Adding Base Styles</a></li>
            <li><a href="#">Extracting Components</a></li>
            <li><a href="#">Adding New Utilities</a></li>
          </ul>

          <ul>
            <li className="head-sec uppercase text-xl">Customization</li>
            <li><a href="#">Configuration</a></li>
            <li><a href="#">Theme Configuration</a></li>
            <li><a href="#">Breakpoints</a></li>
            <li><a href="#">Customizing Colors</a></li>
            <li><a href="#">Customizing Spacing</a></li>
            <li><a href="#">Configuring Variants</a></li>
            <li><a href="#">Plugins</a></li>
          </ul>


          <ul>
            <li className="head-sec uppercase text-xl">Community</li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>



      </div>




<div className="copyright-section text-center mt-5">
<ul className="flex justify-center gap-5 text-2xl mb-3">
          <li className="hover:text-red-500 hover:rotate-180 transition-all  duration-75 ease-linear">
            <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
          </li>
          <li className="hover:text-red-500 hover:rotate-180 transition-all  duration-75 ease-linear">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </li>
          <li className="hover:text-red-500 hover:rotate-180 transition-all  duration-75 ease-linear">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
          </li>
          <li className="hover:text-red-500 hover:rotate-180 transition-all  duration-75 ease-linear">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </li>
          <li className="hover:text-red-500 hover:rotate-180 transition-all  duration-75 ease-linear">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </li>
        </ul>
        <p>&copy; 1986. All Rights Reserved.</p>
</div>

    </footer>
  );
};

export default Footer;
