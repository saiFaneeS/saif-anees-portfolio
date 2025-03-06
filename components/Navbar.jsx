import { useNavbar } from "@/context/Navbar";
import {
  ArrowRight,
  ArrowUpRightFromCircle,
  Linkedin,
  Menu,
} from "lucide-react";
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
        className={`absolute top-0 w-full flex gap-4 items-start justify-between px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 pt-4 max-sm:pt-4 z-20 sm:h-32`}
      >
        <Link
          href={"/"}
          className="text-lg font-medium flex gap-3 items-center shrink-0 sm:sticky top-4"
        >
          {/* <Image
            src={"/pfp.jpg"}
            height={500}
            width={500}
            alt=""
            className="w-6 aspect-square object-cover rounded-full"
          /> */}
          Saif Anees
        </Link>
        <div className="text-lg font-semibold flex gap-4 items-center justify-center sm:sticky top-4">
          <Link
            href={"mailto:saifanees11@gmail.com"}
            className="text-sm font-medium flex gap-4 items-center justify-center bg-sky-950 text-sky-50 px-12 py-1 rounded-sm border border-sky-950 hover:bg-transparent hover:text-sky-950"
          >
            LET&apos;S TALK <ArrowRight size={14} />
          </Link>
          {/* <Link
            href={"https://www.linkedin.com/in/saif-anees/"}
            className="cursor-pointer leading-none gap-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/10 hover:border-sky-800/15 hover:bg-opacity-50 transition-all h-9 flex items-center justify-center p-2 rounded"
          >
            <Linkedin size={20} />
          </Link> */}
          {/* <div
            className="cursor-pointer leading-none gap-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/10 hover:border-sky-800/15 hover:bg-opacity-50 transition-all h-9 flex items-center justify-center p-2 rounded"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu size={24} strokeWidth={2} />
            <p className="max-sm:hidden">MENU</p>
          </div> */}
        </div>
      </div>
      {/* <div
        className={`h-screen backdrop-blur-sm w-full fixed left-0 flex flex-col justify-center px-[25%] py-4 z-10 transition-all delay-75 duration-1000 ${
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
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-sky-500`}
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
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-sky-500`}
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
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-sky-500`}
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
            className={`hover:ml-12 transition-all delay-75 duration-500 w-fit cursor-pointer hover:text-sky-500`}
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
      </div> */}
    </>
  );
};

export default Navbar;
