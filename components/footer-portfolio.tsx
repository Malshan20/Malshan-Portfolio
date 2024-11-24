// components/Footer.js
"use client"; // Required for GSAP animations in Next.js

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.2 }
    );

    gsap.fromTo(
      ".social-icon",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.3 }
    );
  }, []);

  return (
    <footer className="bg-white text-gray-800 py-12 px-6 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Footer Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 footer-text">
          Ready to take <span className="text-purple-600">your</span> digital
          presence to the next level?
        </h2>
        {/* Footer Subheading */}
        <p className="text-lg mb-8 footer-text">
          Reach out to me today and let’s discuss how I can help you achieve
          your goals.
        </p>
        {/* CTA Button */}
        <a
          href="mailto:malshandissanayaka246@gmail.com"
          className="footer-text inline-block bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
        >
          Let’s get in touch <span>→</span>
        </a>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-8">
          <a
            href="https://github.com/Malshan20"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-md hover:bg-purple-100 hover:shadow-lg transition-all duration-300"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://x.com/Ma_malshan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-md hover:bg-purple-100 hover:shadow-lg transition-all duration-300"
          >
            <img
              src="/twitter-x.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-md hover:bg-purple-100 hover:shadow-lg transition-all duration-300"
          >
            <img
              src="/linkdin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Footer Copyright */}
        <p className="mt-8 text-sm text-gray-500 footer-text">
          Copyright © 2024 Malshan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
