import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Asterisk,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactUs from "@/components/Contact";
import { useRouter } from "next/router";
import { ImageCarousel } from "../ImageCarousel";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CaseStudy = () => {
  const [project, setProject] = useState(null);
  const router = useRouter();

  const projects = [
    // Ohghad
    {
      projectName: "Ohghad - Fundraiser Web Design & Development",
      projectCover: "/ohghad/cover.png",
      client: {
        name: "Ohghad.org",
        location: "Ghana",
      },
      businessType: "Non-profit",
      platform: {
        frontend: ["WordPress"],
        backend: [],
      },
      year: 2024,
      description:
        "Designed and developed a new website for Ohghad.org, a non-profit organization based in Ghana.",
      features: [
        "User-friendly donation interface",
        "Event management system",
        "Volunteer sign-up and management",
        "Content management system (CMS)",
        "Blog for updates and news",
        "Social media integration",
      ],
      technologies: {
        frontend: ["WordPress", "Elementor", "CSS"],
        backend: ["WordPress"],
      },
      nextSteps: [
        "Implement a newsletter sign-up",
        "Add an online store for merchandise",
      ],
      slug: "ohghad-non-profit",
      objectives: [
        "Enhance user engagement and streamline operations",
        "Modernize the look and functionality to align with current trends",
      ],
      challenges: [
        "Creating a modern and functional website for a non-profit with limited resources",
        "Ensuring user-friendly donation and volunteer sign-up processes",
        "Integrating various features like event management and social media while maintaining simplicity",
      ],
      solutions: [
        "Developed a website using WordPress to meet the client's requirements for design, functionality, and ease of management.",
        "Leveraged Elementor for easy customization and a responsive design.",
      ],
      projectImages: ["/ohghad/cover.png"],
      projectTitle: "Ohghad Fundraiser",
    },
    // MS Real Estate
    {
      projectName: "MS Real Estate Website Redesign",
      projectCover: "/msre/cover.png",
      client: {
        name: "MS Real Estate Company",
        location: "UAE",
      },
      originalPlatform: "WordPress",
      redesignPlatform: "React with Next.js",
      designTool: "Figma",
      developmentTools: ["Tailwind CSS", "Sanity CMS"],
      year: 2023,
      description:
        "Redesigned the MS Real Estate website to modernize its look and user experience. The aim was to create a visually appealing website that sets it apart from competitors.",
      features: [
        "Minimalist design with modern aesthetics",
        "Integration with Property Finder XML for property listings",
        "Search filter functionality for easy property discovery",
        "Property comparison feature",
        "Direct WhatsApp contact for agents",
        "Agent profile cards",
        "Retention modal for user engagement",
        "Responsive design for all devices",
        "CMS-managed blogs for agents",
      ],
      slug: "ms-real-estate",
      projectImages: [
        "/msre/1.jpg",
        "/msre/2.jpg",
        "/msre/3.jpg",
        "/msre/4.jpg",
        "/msre/5.jpg",
        "/msre/6.jpg",
      ],
      projectTitle: "MS Real Estate Redesign",
      objectives: [
        "Enhance visual appeal and usability",
        "Modernize the look and functionality",
      ],
      challenges: [
        "Overhauling an outdated design to meet contemporary aesthetics and functionality",
        "Ensuring seamless integration with existing property listing systems",
        "Balancing modern design with functional improvements for user engagement",
      ],
      solutions: [
        "Complete redesign with a focus on modern aesthetics and improved usability",
        "Integrated Property Finder XML for property listings and added advanced search filters",
      ],
    },
    // Idan
    {
      projectName: "Idan Shmulevich Branding",
      projectCover: "/idan/cover.jpeg",
      client: {
        name: "Idan Shmulevich",
        location: "-",
      },
      businessType: "Martial Artist",
      year: 2023,
      description:
        "Provided complete branding for Idan Shmulevich, a young Ji Jitsu martial artist, including multiple logo concepts and finalizing one for various products.",
      features: [
        "Multiple logo concepts",
        "Finalized logo design",
        "Branding for various products",
      ],
      toolsUsed: ["Photoshop", "Figma"],
      slug: "idan-shmulevich-branding",
      projectImages: ["/idan/1.jpeg", "/idan/cover.jpeg"],
      projectTitle: "Idan Shmulevich Branding",
      objectives: [
        "Establish a unique and recognizable brand identity",
        "Create versatile branding materials",
      ],
      challenges: [
        "Developing a distinctive brand identity for a niche market (martial arts)",
        "Designing versatile branding materials that work across various media",
        "Capturing the essence of the client’s personal brand in the logo and other materials",
      ],
      solutions: [
        "Developed multiple logo concepts and finalized one that captured the essence of the client's brand",
        "Created branding materials tailored for various products",
      ],
    },
    // Alfalah
    {
      projectName: "Facebook Ads for Alfalah Int Traders",
      projectCover: "/alfalah/cover.jpeg",
      client: {
        name: "Alfalah Int Traders",
        location: "Pakistan",
      },
      businessType: "Trading Company",
      year: 2024,
      description:
        "Created social media ad designs for Alfalah Int Traders to enhance their online presence and marketing efforts.",
      features: [
        "Engaging and visually appealing ad designs",
        "Consistency with brand identity",
        "Targeted for social media platforms",
      ],
      toolsUsed: ["Photoshop", "Figma"],
      slug: "alfalah-int-traders",
      projectImages: ["/alfalah/cover.jpeg"],
      projectTitle: "Facebook Ads for Alfalah Int Traders",
      objectives: ["Enhance online presence", "Improve marketing efforts"],
      challenges: [
        "Increasing online engagement and presence through visually appealing ads",
        "Aligning ad designs with the brand's identity",
        "Ensuring targeted reach on social media platforms",
      ],
      solutions: [
        "Designed a series of engaging social media ads that align with the brand's identity",
        "Maintained consistency in design to reflect the brand's values and message",
      ],
    },
    // IGT
    {
      projectName: "Social Media Designs for IGT",
      projectCover: "/igt/cover.jpeg",
      client: {
        name: "Interlink Global Traders",
        location: "Malaysia",
      },
      businessType: "Trading Company",
      year: 2024,
      description:
        "Developed comprehensive branding materials for Interlink Global Traders, including logo design, cover design, and Facebook ad designs.",
      features: [
        "Logo design",
        "Cover design",
        "Facebook ad designs",
        "Consistency with brand identity",
      ],
      toolsUsed: ["Photoshop", "Figma"],
      slug: "interlink-global-traders",
      projectImages: ["/igt/cover.jpeg"],
      projectTitle: "Social Media Designs for IGT",
      objectives: [
        "Establish a strong brand identity",
        "Create engaging social media content",
      ],
      challenges: [
        "Creating cohesive branding materials that represent the company's identity",
        "Ensuring engagement through social media content",
        "Maintaining consistency in brand representation across different formats",
      ],
      solutions: [
        "Developed a consistent and visually appealing brand identity through various design elements",
        "Designed engaging social media content that aligns with the company’s brand",
      ],
    },
    // MS Luxury Motors
    {
      projectName: "Modern Standards Luxury Motors Website",
      projectCover: "/mslm/cover.jpg",
      client: {
        name: "Modern Standards Luxury Motors",
        location: "UAE",
      },
      businessType: "Limousine Booking Service",
      platform: {
        frontend: ["React", "Next.js"],
        backend: ["Firebase", "Firestore"],
      },
      year: 2023,
      description:
        "Designed and developed a luxury limousine booking service site for Modern Standards Luxury Motors based. The aim was to provide a modern and seamless booking experience for users.",
      features: [
        "User-friendly booking interface",
        "Messaging system for customer inquiries",
        "Content management system (CMS)",
        "Request management functionality",
        "WhatsApp redirection for quick communication",
        "Fleet management system in CMS",
      ],
      technologies: {
        frontend: ["React", "Next.js", "Material-UI", "CSS Modules"],
        backend: ["Firebase", "Firestore"],
      },
      slug: "ms-luxury-motors",
      projectImages: [
        "/mslm/1.jpg",
        "/mslm/2.jpg",
        "/mslm/3.jpg",
        "/mslm/4.jpg",
      ],
      projectTitle: "Modern Standards Luxury Motors Website",
      objectives: [
        "Provide a seamless booking experience",
        "Establish an online presence",
      ],
      challenges: [
        "Creating a modern and functional website for a luxury service",
        "Ensuring ease of use for booking and customer inquiries",
        "Integrating a comprehensive management system for the fleet",
      ],
      solutions: [
        "Developed a website using the latest technologies to meet the client's requirements for design, functionality, and ease of management",
        "Implemented a user-friendly booking interface and messaging system",
      ],
    },
  ];

  useEffect(() => {
    const querySlug = router?.query?.slug;
    const filteredProject = projects.find(
      (project) => project.slug === querySlug
    );
    setProject(filteredProject);
  }, [router?.query?.slug]);

  if (!project) return null;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 max-md:gap-8 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 py-24 max-sm:py-16 max-sm:pt-20 ">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-24"
        >
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/works"
              className="flex items-center gap-2 text-neutral-600 hover:text-white-100 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              All Works
            </Link>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-emerald-600">{project.client.name}</span>
          </nav>

          <motion.div {...fadeIn} className="mt-8 max-w-5xl">
            <div className="flex flex-wrap gap-3 mb-4">
              {project.platform?.frontend?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.platform?.backend?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="text-xl font-semibold mb-4">
              {project.projectTitle}
            </h1>

            <p className="text-base text-neutral-800 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* <div className="flex gap-8 text-sm text-gray-400">
              <div>
                <span className="block text-gray-500 mb-1">Client</span>
                <span className="text-white-100">{project.client.name}</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1">Location</span>
                <span className="text-white-100">
                  {project.client.location}
                </span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1">Year</span>
                <span className="text-white-100">{project.year}</span>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mt-12 rounded-xl overflow-hidden border border-gray-800/50"
          >
            <Image
              src={project.projectCover}
              alt={project.projectTitle}
              width={1920}
              height={1080}
              className="w-full aspect-video max-h-96 object-cover"
            />
          </motion.div>
        </motion.header>

        {/* Content Sections */}
        <div className="py-20">
          {/* <div className="grid grid-cols-5 max-md:grid-cols-1 gap-12"> */}
          {/* Objectives */}
          <motion.section {...fadeIn} className="mb-12">
            {/* <span className="text-main-900 font-mono">01</span> */}
            <div>
              <h2 className="text-lg font-semibold mt-2 mb-4">Objectives</h2>
              <ul className="space-y-4">
                {project.objectives?.map((objective, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-0.5 rounded-full bg-neutral-800 mt-2.5 shrink-0" />
                    <span className="text-neutral-800">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
          <div className="h-full w-[1px] bg-neutral-400 shrink-0 max-md:hidden"></div>
          {/* Challenges */}
          <motion.section {...fadeIn} className="mb-12">
            <div>
              {/* <span className="text-main-900 font-mono">02</span> */}
              <h2 className="text-lg font-semibold mt-2 mb-4">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges?.map((challenge, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-800"
                  >
                    <span className="w-1.5 h-0.5 rounded-full bg-neutral-800 mt-2.5 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
          <div className="h-full w-[1px] bg-neutral-400 shrink-0 max-md:hidden"></div>
          {/* Solutions */}
          <motion.section {...fadeIn} className="mb-12">
            <div>
              {/* <span className="text-main-900 font-mono">03</span> */}
              <h2 className="text-lg font-semibold mt-2 mb-4">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions?.map((solution, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-800"
                  >
                    <span className="w-1.5 h-0.5 rounded-full bg-neutral-800 mt-2.5 shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
          {/* </div> */}

          {/* Project Gallery */}
          {project.projectImages?.length > 1 && (
            <motion.section {...fadeIn} className="mb-20">
              <h2 className="text-xl font-semibold mb-8">Project Gallery</h2>
              <ImageCarousel images={project.projectImages} />
            </motion.section>
          )}

          {/* Features */}
          {project.features && (
            <motion.section {...fadeIn} className="mb-20">
              <h2 className="text-xl font-semibold mb-8">Key Features</h2>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-4 px-5 bg-emerald-800/10 rounded-sm border border-emerald-800/50 text-sm"
                  >
                    <Asterisk strokeWidth={1.5} className="text-emerald-800" />
                    <span className="text-neutral-800">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.div {...fadeIn} className="flex justify-center">
            <Link
              href={"/case-studies"}
              className="bg-emerald-500/70 text-neutral-950 flex gap-2 items-center font-medium border border-emerald-500/70 hover:bg-transparent rounded hover:text-emerald-500 transition-all  pr-4 pl-3 py-2"
            >
              <ArrowUpLeft size={18} /> Return
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
