import { Link } from 'react-router-dom';
import "./Footer.css"; 

export function Footer() {
  return (
    <>
    <div className="footer-tree">
     <img
              src="/tree.png"
              alt="tree"
              className="h-12 md:h-[100px] w-auto object-contain"
            />
    </div>
    <footer className="bg-black text-white relative">
      {/* Wave Pattern */}
      <div className="absolute top-0 left-0 w-full h-24">
        <svg
          className="w-full h-full text-black"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-58,14.73-114.16,30.13-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      <div className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
    
        <div className="footer-content-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-20">
            {/* About Section */}
            <div className="footer-content">
              <h3 className="text-red-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                About
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Nabi Shakar is a wondrous city of songs, poems and conversations from Balkhi, Sufi and Baul oral traditions from India and beyond.
              </p>
              <h4 className="text-red-400 text-sm font-semibold mb-3 uppercase tracking-wider mt-8">
                Support
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                If you have found joy and value here, consider supporting this work.
              </p>
            </div>

            {/* Stay Connected Section */}
            <div className="footer-content">
              <h3 className="text-red-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                Stay Connected
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Hear from us quarterly with news, inspirations and more...
              </p>

              {/* Email Subscription */}
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm border border-gray-700 rounded-l focus:outline-none focus:border-red-400"
                />
                <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-r hover:bg-red-600 transition-colors">
                  Subscribe
                </button>
              </div>

              <p className="text-gray-400 text-xs mb-2">
                Write to us at{' '}
                <a href="mailto:nabi@shahsha.gmail.com" className="text-red-400 hover:text-red-300">
                  nabi@shahsha.gmail.com
                </a>
              </p>
              <p className="text-gray-400 text-xs">
                Follow us on{' '}
                <a href="#" className="text-red-400 hover:text-red-300">
                  Instagram
                </a>{' '}
                |{' '}
                <a href="#" className="text-red-400 hover:text-red-300">
                  Facebook
                </a>
              </p>
            </div>

            {/* Navigation Menu */}
            <div className="footer-content">
              <div className="space-y-2">
                <Link to="/songs" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  Songs
                </Link>
                <Link to="/poems" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  Poems
                </Link>
                <Link to="/reflections" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  Reflections
                </Link>
                <Link to="/people" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  People
                </Link>
                <Link to="/films" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  Films
                </Link>
                <Link to="/radio" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  Radio
                </Link>
                <Link to="/glossary" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  Glossary
                </Link>
                <Link to="/arab-news" className="block text-red-400 hover:text-red-300 text-sm uppercase tracking-wider">
                  Arab News
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
        <div className="mt-0 sm:mt-12 pt-0 sm:pt-8 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6 footer-border-top">
              <div className=" rounded-full flex items-center justify-center">
                 <img
              src="footer-logo.svg"
              alt="Logo"
              className=" object-contain"
            />
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500 max-w-3xl mx-auto">
              <p className='footer-text'>
              <span>Website Design</span> Smriti Chanchani <span>| Created by the</span> Kabir Project <span>at</span> Shabad Dhun Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
