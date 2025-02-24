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
import { useRouter } from "next/router";
import { ImageCarousel } from "../ImageCarousel";
import { useNavbar } from "@/context/Navbar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CaseStudy = () => {
  const [project, setProject] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { isActive, pageChanged, setPageChanged } = useNavbar();

  const projects = [
    // Ohghad
    {
      color: "green",
      projectName: "Ohghad - Fundraiser Web Design & Development",
      projectCover: "/new/ohghad.jpg",
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
        "Volunteer sign-up and management",
        "Content management system (CMS)",
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
      color: "green",
      projectName: "MS Real Estate Website Redesign",
      projectCover: "/new/ms_re.jpg",
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
        "Integration with Property Finder XML for property listings",
        "Property comparison feature",
        "Agent profile cards",
        "Retention modal for user engagement",
        "Responsive across all devices",
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
        "Integrate Property finder listings of the company agents",
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
    // MS Luxury Motors
    {
      color: "blue",
      projectName: "MS Luxury Motors Booking Site",
      projectCover: "/new/ms_lm.jpg",
      client: {
        name: "MS Luxury Motors LLC",
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
      projectTitle: "Luxury Chauffeur Booking Site",
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
    // CRM
    {
      color: "green",
      color: "green",
      projectName: "Custom CRM Solution",
      projectCover: "/new/crm.jpg",
      client: {
        name: "CRM Platform",
        location: "-",
      },
      businessType: "Software Development",
      year: 2024,
      description:
        "Developed a powerful, fully customizable CRM with advanced features for efficient lead and task management.",
      features: [
        "Drag-and-Drop Custom Lead Pipelines",
        "Leads, Team & Tasks Management",
        "User Roles & Permissions",
        "Advanced Analytics & Reporting",
      ],
      slug: "custom-crm-solution",
      objectives: [
        "Streamline business operations with an all-in-one CRM",
        "Provide teams with an intuitive and scalable workflow",
        "Improve efficiency through automation and analytics",
      ],
      challenges: [
        "Designing a system that is both powerful and user-friendly",
        "Ensuring scalability for teams of all sizes",
        "Implementing seamless drag-and-drop pipeline customization",
      ],
      solutions: [
        "Built a modular CRM with fully customizable workflows",
        "Integrated automation for lead tracking and task assignments",
        "Developed advanced analytics dashboards for better decision-making",
      ],
      projectImages: ["/new/crm.jpg"],
      projectTitle: "Custom CRM Solution",
    },
  ];

  useEffect(() => {
    setPageChanged(false);
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, [setPageChanged]);

  useEffect(() => {
    const querySlug = router?.query?.slug;
    const filteredProject = projects.find(
      (project) => project.slug === querySlug
    );
    setProject(filteredProject);
  }, [router?.query?.slug]);

  if (!project) return null;

  const colorClasses = {
    blue: "border-blue-500/80",
    green: "border-green-500/80",
    purple: "border-violet-500/80",
    red: "border-red-500/80",
    amber: "border-amber-500/80",
    cyan: "border-cyan-500/80",
  };

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 max-md:gap-8 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 py-24 max-sm:py-8 ${
          isActive ? "slide-out-top" : "slide-in-bottom"
        } ${pageChanged ? "hidden" : ""}`}
      >
        <nav className="flex items-center gap-2 text-sm mb-6 mt-14 sm:mt-10">
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
          <span className="textcyan600">{project.client.name}</span>
        </nav>

        {/* Hero Section */}
        <motion.div
          {...fadeIn}
          className="mb-8 grid grid-cols-2 gap-6 max-lg:grid-cols-1"
        >
          <div className="bg-cyan-950 text-background rounded-lg p-8 relative overflow-hidden">
            <div
              className={`h-60 aspect-square rounded-full border-[24px] ${
                colorClasses[project.color]
              } absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2`}
            ></div>{" "}
            {project.platform && (
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  ...(project.platform.frontend || []),
                  ...(project.platform.backend || []),
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-emerald-200 bg-emerald-900/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-xl font-semibold mb-4">
              {project.projectTitle}
            </h1>
            <p className=" leading-relaxed">{project.description}</p>
            {/* Objectives */}
            <motion.section {...fadeIn} className="mt-8 text-cyan-50 ">
              <div>
                <h2 className="text-lg font-semibold mt-2 mb-4">Objectives</h2>
                <ul className="space-y-4">
                  {project.objectives?.map((objective, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-0.5 rounded-full bg-cyan-50 mt-2.5 shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          </div>

          {/* Main Image */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src={project.projectCover}
              alt={project.projectTitle}
              width={1000}
              height={1000}
              className="w-full h-full aspect-video object-cover"
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="py-12 mb-4">
          <div className="relative grid grid-cols-2 max-md:grid-cols-1 gap-8">
            <div>
              {/* Objectives */}

              {/* Challenges */}
              <motion.section {...fadeIn} className="mb-12">
                <div>
                  {/* <span className="text-main-900 font-mono">02</span> */}
                  <h2 className="text-lg font-semibold mt-2 mb-4">
                    Challenges
                  </h2>
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
            </div>

            {/* Project Gallery */}
            {project.projectImages?.length > 1 && (
              <motion.section {...fadeIn} className="mb-20 ">
                <h2 className="text-lg font-semibold mb-6">Project Gallery</h2>
                <ImageCarousel images={project.projectImages} />
              </motion.section>
            )}
          </div>

          {/* Features */}
          {project.features && (
            <motion.section {...fadeIn} className="mb-20">
              <h2 className="text-lg font-semibold mb-6">Key Features</h2>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 px-4 bg-cyan-600/20 rounded-sm border border-cyan-600/20 text-sm"
                  >
                    <Asterisk
                      strokeWidth={1.5}
                      size={20}
                      className="textcyan800"
                    />
                    <span className="text-neutral-900 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.div {...fadeIn} className="flex justify-center">
            <Link
              href={"/works"}
              className="bg-amber-500/70 text-neutral-950 flex gap-2 items-center font-medium border border-amber-500/0  hover:border-amber-500/70 hover:bg-transparent hover:text-amber-500 transition-all pr-4 pl-3 py-2"
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
