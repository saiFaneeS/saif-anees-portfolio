import { useNavbar } from "@/context/Navbar";
import {
  ArrowRight,
  ArrowUpRightFromCircle,
  Linkedin,
  Menu,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <>
      <div
        className={`absolute top-0 w-full flex gap-4 items-start justify-between px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 pt-4 max-sm:pt-4 z-20 sm:h-32 pointer-events-none`}
      >
        <Link
          href={"/"}
          className="text-lg font-medium flex gap-3 items-center shrink-0 sm:sticky top-4 pointer-events-auto"
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
        <div className="text-lg font-semibold flex gap-4 items-center justify-center sm:sticky top-4 pointer-events-auto">
          <Link
            href={"mailto:saifanees11@gmail.com"}
            className="text-sm font-normal tracking-wide flex gap-4 items-center justify-center bg-foreground text-sky-50 px-12 py-1 rounded-sm border border-foreground hover:bg-transparent hover:text-foreground"
          >
            LET&apos;S TALK <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
