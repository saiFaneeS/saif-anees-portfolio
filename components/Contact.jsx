import React, { useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRightFromCircle,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { useNavbar } from "@/context/Navbar";

const Contact = () => {
  const { isActive, pageChanged, setPageChanged } = useNavbar();

  const socialLinks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/saif-anees/?originalSubdomain=pk",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/saifullah_anees/",
      icon: <Instagram size={20} />,
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+9203283490764",
      icon: <MessageCircle size={20} />,
    },
  ];

  useEffect(() => {
    setPageChanged(false);
  }, []);

  return (
    <div
      className={`min-h-screen bg-foreground text-sky-50 flex items-center relative w-full px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 py-24 max-sm:py-16`}
    >
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-2 border-b-2 border-dashed border-b-sky-50 pb-4">
          Contact
        </h2>

        <div className="space-y-12">
          <div className="group">
            <p className="text-sm font-semibold text-sky-600 mb-2 tracking-wider pt-6">
              MAIL
            </p>
            <Link
              href="mailto:saifanees11@gmail.com"
              className="inline-flex items-center gap-3 text-base font-medium hover:text-sky-100 transition-colors"
            >
              <Mail
                size={24}
                className="group-hover:rotate-12 transition-transform"
              />
              saifanees11@gmail.com
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold text-sky-600 mb-4 tracking-wider">
              SOCIAL MEDIA
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={link.url}
                  className="group flex items-center gap-3 p-4 rounded-sm border border-neutral-800/10 bg-sky-100/20 hover:bg-sky-800/80 hover:text-sky-50 transition-all"
                >
                  <span className="group-hover:text-sky-100 transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </span>
                  <ArrowUpRightFromCircle
                    size={16}
                    className="ml-auto text-sky-50 group-hover:text-sky-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
