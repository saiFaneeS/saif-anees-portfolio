import { useNavbar } from "@/context/Navbar";
import { ArrowUpRightFromCircle, Linkedin, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const { isActive, setIsActive, pageChanged, setPageChanged } = useNavbar();

  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <div
        className={`fixed top-0 w-full flex gap-4 items-center justify-between px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 pt-12 max-md:pt-10 max-sm:pt-6 z-20 bg-[#cdffe8]/90 backdrop-blur-sm pb-4`}
      >
        <Link
          href={"/"}
          className="text-lg font-semibold flex gap-3 items-center shrink-0"
        >
          <Image
            src={"/pfp.jpg"}
            height={500}
            width={500}
            alt=""
            className="w-6 aspect-square object-cover rounded-full grayscale contrast-125"
          />
          Saif Anees
        </Link>
        <div className="text-lg font-semibold flex gap-4 items-center justify-center">
          <Link
            href={"https://www.linkedin.com/in/saif-anees/"}
            className="cursor-pointer leading-none gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/10 hover:border-cyan-800/15 hover:bg-opacity-50 transition-all h-9 flex items-center justify-center p-2 rounded"
          >
            <Linkedin size={20} />
          </Link>
          <div
            className="cursor-pointer leading-none gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/10 hover:border-cyan-800/15 hover:bg-opacity-50 transition-all h-9 flex items-center justify-center p-2 rounded"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu size={24} strokeWidth={2} />
            <p className="max-sm:hidden">MENU</p>
          </div>
        </div>
      </div>
      <div
        className={`h-screen backdrop-blur-sm w-full fixed left-0 border-b border-b-black flex flex-col justify-center px-[25%] py-4 z-10 transition-all delay-75 duration-1000 ${
          isActive ? "top-0" : "top-[-140%]"
        }`}
      >
        <div className="font-semibold flex flex-col text-4xl leading-none mb-8 -ml-9 pt-20 list-none">
          <li
            onClick={() => [
              setIsActive(false),
              path === "/" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-cyan-500`}
          >
            {" "}
            <span className="text-base font-medium mr-2">01</span>HOME
          </li>
          <li
            onClick={() => [
              setIsActive(false),
              path === "/works" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/works");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-cyan-500`}
          >
            <span className="text-base font-medium mr-2">02</span>WORKS
          </li>
          <li
            onClick={() => [
              setIsActive(false),
              path === "/about" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/about");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-cyan-500`}
          >
            <span className="text-base font-medium mr-2">03</span>ABOUT
          </li>
          <li
            onClick={() => [
              setIsActive(false),
              path === "/contact" ? "" : setPageChanged(true),
              setTimeout(() => {
                router.push("/contact");
              }, 1000),
            ]}
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-cyan-500`}
          >
            <span className="text-base font-medium mr-2">04</span>CONTACT
          </li>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            target="_blank"
            href={"https://github.com/saiFaneeS"}
            className="flex gap-2 items-center text-base font-semibold hover:underline"
          >
            <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
            Github
          </Link>
          <Link
            href={"https://wa.me/+9203283490764"}
            className="flex gap-2 items-center text-base font-semibold hover:underline"
          >
            <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
            Whatsapp
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
