import React from "react";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  FileText,
} from "lucide-react";
import { SavvyLogo } from "../ui/logo";

const Footer = () => {
  return (
    <footer className="bg-savvy-light border-t border-primary/10">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <SavvyLogo />
            <p className="mt-4 text-gray-400 text-sm">
              The modern banking app that lets you open an account, save
              automatically, invest ethically, and manage money securely – all
              from your phone.
            </p>

            <p className="mt-4 text-gray-400 text-sm">
              {/* suggest a funny address */}
              1234 Savvy St, Finance City, Moneyland
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Contact Us", "FAQs", "Community"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
                "Licenses",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-gray-400" />
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Savvy. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {[Mail, Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={`Social media link ${i + 1}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
