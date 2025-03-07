import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (router.pathname !== "/") {
      router.push(`/?scrollTo=${sectionId}`).then(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -50,
        });
      });
    } else {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  };

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
        <div className="text-lg font-semibold flex gap-4 items-center justify-center sm:sticky top-4 z-50 pointer-events-auto">
          <ScrollLink
            to="contact-section"
            onClick={() => scrollToSection("contact-section")}
            className="text-sm font-normal tracking-wide flex gap-4 items-center justify-center leading-none bg-foreground text-sky-50 px-12 max-sm:px-8 py-2 rounded-[3px] border border-foreground hover:bg-transparent hover:text-foreground cursor-pointer"
          >
            LET&apos;S TALK <ArrowRight size={14} />
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
