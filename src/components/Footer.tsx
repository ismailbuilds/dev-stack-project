import { FaRegCopyright } from 'react-icons/fa';
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
    <footer className="border-t border-gray-100 bg-white">
      <div className=" container mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-5 gap-10">

          {/* Brand Section */}
          <div className="col-span-2 space-y-3">
            <img src={logo} alt="" />
            <p className="text-gray-500 text-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-sm font-medium text-gray-700">
              <a>GitHub</a>
              <a>Twitter</a>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase text-gray-800">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Technologies</a>
              </li>

              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase text-gray-800">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a>About</a>
              </li>

              <li>
                <a>Contact</a>
              </li>

              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase text-gray-800">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a>Privacy Policy</a>
              </li>

              <li>
                <a>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex justify-between border-t border-gray-100 pt-8 text-[16px] text-gray-400">
          <p className='flex items-center gap-1'>
            <FaRegCopyright /> 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a>Privacy</a>
            <a>Terms</a>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;