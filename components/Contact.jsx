import React, { useEffect } from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const SocialLink = ({ name, url, icon, style }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-between p-3 max-sm:p-2 bg-foreground/15 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 group ${style}`}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-white/10">{icon}</div>
        <span className="font-medium sm:text-base">{name}</span>
      </div>
      <ArrowUpRight className="size-5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
    </Link>
  );
};

const ContactPage = () => {
  const socialLinks = [
    {
      name: "saifanees11@gmail.com",
      url: "mailto:saifanees11@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      style: "bg-red-800/70 hover:bg-red-600/30",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923283490764",
      icon: <MessageCircle className="w-5 h-5" />,
      style: "bg-green-800/70 hover:bg-green-600/30",
    },
    // {
    //   name: "Instagram",
    //   url: "https://www.instagram.com/saifullah_anees/",
    //   icon: <Instagram className="w-5 h-5" />,
    // },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saif-anees",
      icon: <Linkedin className="w-5 h-5" />,
      style: "bg-blue-800/70 hover:bg-blue-600/30",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen lg:h-screen bg-black text-sky-50 overflow-hidden relative z-50 flex justify-center items-center px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 py-12">
      <div className="grid lg:grid-cols-4 gap-8 items-center w-full mb-8 max-sm:mb-4">
        <div className="lg:col-span-2">
          <div className="border-b border-dashed border-sky-50/30 pb-8 max-sm:pb-4 mb-8 max-sm:mb-0">
            <h1 className="text-2xl font-semibold text-white contact-section">
              Let&apos;s Talk
            </h1>
            <p className="text-sm text-sky-50/70 sm:max-w-2xl tracking-wide">
              Schedule a meeting or connect with me through any of the channels
              below.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-y-4 max-sm:gap-2 max-sm:hidden">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.name}
                name={link.name}
                url={link.url}
                icon={link.icon}
                style={link.style}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 rounded-lg relative overflow-hidden border border-white/10 shadow-xl h-[70vh]">
          <iframe
            src="https://calendly.com/saifanees11/saifanees"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Select a Date & Time - Calendly"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-y-4 max-sm:gap-2 sm:hidden">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.name}
              name={link.name}
              url={link.url}
              icon={link.icon}
              style={link.style}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-fit py-2 text-center absolute bottom-0 left-0 bg-neutral-900 italic">
        Saif Anees
      </div>
    </div>
  );
};

export default ContactPage;
