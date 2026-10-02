import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';

import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-900 border-t border-slate-200">

      {/* Footer Links */}
      <div className="px-6 md:px-12 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-1">

            <a
              href="/"
              className="inline-flex items-center group mb-5"
            >
              <span className="text-sm font-black tracking-widest text-slate-900 uppercase">
                Novelty
              </span>

              <span className="text-sm font-black tracking-widest text-[#16A34A] uppercase">
                &nbsp;Works LTD
              </span>
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Practical technology, built around real organizations,
              real challenges, and real goals.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#16A34A] hover:border-green-200 transition-all duration-200"
              >
                <FaFacebook size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#16A34A] hover:border-green-200 transition-all duration-200"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#16A34A] hover:border-green-200 transition-all duration-200"
              >
                <FaTiktok size={15} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#16A34A] hover:border-green-200 transition-all duration-200"
              >
                <FaWhatsapp size={15} />
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">

              <li>
                <a
                  href="/about"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/our-projects"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Our Projects
                </a>
              </li>

              <li>
                <a
                  href="/insights"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Insights
                </a>
              </li>

              <li>
                <a
                  href="/reach-us"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Careers & Internship
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">

              <li>
                <a
                  href="/services"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Software Development
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Cloud Services
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  IT Consultancy
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Digital Marketing
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Technology Support
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-5">
              Reach Us
            </h3>

            <ul className="space-y-4 text-sm text-slate-500">

              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.7}
                  className="text-[#16A34A] mt-0.5 shrink-0"
                />

                <a
                  href="tel:+25079459000"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  +250 794 590 000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.7}
                  className="text-[#16A34A] mt-0.5 shrink-0"
                />

                <a
                  href="mailto:info@noveltyworks.rw"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  info@noveltyworks.rw
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.7}
                  className="text-[#16A34A] mt-0.5 shrink-0"
                />

                <span>
                  Kigali, Rwanda
                  <br />
                  East Africa
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-t border-slate-200 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">

          <p>
            © 2019–2026 Novelty Works LTD. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="/policies"
              className="hover:text-[#16A34A] transition-colors"
            >
              Privacy
            </a>

            <a
              href="/policies"
              className="hover:text-[#16A34A] transition-colors"
            >
              Terms
            </a>

            <a
              href="/policies"
              className="hover:text-[#16A34A] transition-colors"
            >
              Policies
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}