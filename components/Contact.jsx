import React, { useEffect } from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SocialLink = ({ name, url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4  bg-black/5 backdrop-blur-sm border border-white/10 hover:bg-black/10 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-white/10">{icon}</div>
        <span className="font-medium">{name}</span>
      </div>
      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
    </a>
  );
};

const ContactPage = () => {
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:saifanees11@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+9203283490764",
      icon: <MessageCircle className="w-5 h-5" />,
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
    <div className="min-h-screen lg:h-screen bg-sky-950 text-sky-50 overflow-hidden relative z-50 flex justify-center items-center px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 py-12">
      <div className="grid lg:grid-cols-5 gap-8 items-center w-full">
        <div className="lg:col-span-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 mb-8">
          <div className="border-b border-dashed border-sky-100 pb-8 mb-8">
            <span className="contact-section inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-sky-50/80 mb-2">
              Contact
            </span>
            <h1 className="text-2xl font-semibold animate-in fade-in slide-in-from-bottom-8 duration-700 text-white">
              Let&apos;s Talk
            </h1>
            <p className="text-sm text-sky-50/70 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Schedule a meeting or connect with me through any of the channels
              below.
            </p>
          </div>
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.name}
                name={link.name}
                url={link.url}
                icon={link.icon}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 rounded-lg relative overflow-hidden border border-white/10 shadow-xl h-[80vh] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 backdropinvert">
          <iframe
            src="https://calendly.com/saifanees11/saifanees"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Select a Date & Time - Calendly"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
