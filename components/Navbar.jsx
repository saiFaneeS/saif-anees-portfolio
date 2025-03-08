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
        className={`absolute max-sm:bg-sky-500 max-sm:py-4 top-0 w-full px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 pt-4 max-sm:pt-4 z-20 sm:h-32 pointer-events-none`}
      >
        <div className="flex gap-4 items-start justify-between">
          <div className="sm:sticky top-4">
            <Link
              href={"/"}
              className="text-lg font-medium flex gap-3 items-center shrink-0 pointer-events-auto"
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
            <p className="flex items-center gap-4 max-sm:gap-2 text-sm max-sm:hidden">
              Designer
              <span className="flex items-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 56 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  // class="svg"
                  className="h-4"
                >
                  <path
                    d="M48 0L46.58 1.4L52.18 7H40.01V9H52.18L46.58 14.6L48 16L56 8L48 0ZM36 7C35.45 7 35 7.45 35 8C35 8.55 35.45 9 36 9C36.55 9 37 8.55 37 8C37 7.45 36.55 7 36 7ZM31 7C30.45 7 30 7.45 30 8C30 8.55 30.45 9 31 9C31.55 9 32 8.55 32 8C32 7.45 31.55 7 31 7ZM26 7C25.45 7 25 7.45 25 8C25 8.55 25.45 9 26 9C26.55 9 27 8.55 27 8C27 7.45 26.55 7 26 7ZM11 7C10.45 7 10 7.45 10 8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8C12 7.45 11.55 7 11 7ZM21 7C20.45 7 20 7.45 20 8C20 8.55 20.45 9 21 9C21.55 9 22 8.55 22 8C22 7.45 21.55 7 21 7ZM6 7C5.45 7 5 7.45 5 8C5 8.55 5.45 9 6 9C6.55 9 7 8.55 7 8C7 7.45 6.55 7 6 7ZM16 7C15.45 7 15 7.45 15 8C15 8.55 15.45 9 16 9C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7ZM1 7C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9C1.55 9 2 8.55 2 8C2 7.45 1.55 7 1 7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Developer
            </p>
          </div>
          <div className="text-lg font-semibold flex gap-4 items-center justify-center sm:sticky top-4 z-50 pointer-events-auto">
            <ScrollLink
              to="contact-section"
              onClick={() => scrollToSection("contact-section")}
              className="text-sm font-normal tracking-wide flex gap-4 items-center justify-center leading-none bg-sky-50 sm:bg-foreground sm:text-sky-50 px-12 max-sm:px-4 py-2 rounded-[3px] border sm:border-foreground hover:bg-transparent hover:text-background sm:hover:text-foreground cursor-pointer"
            >
              LET&apos;S TALK <ArrowRight size={14} />
            </ScrollLink>
          </div>
        </div>
        <p className="flex items-center gap-2 text-sm sm:hidden mt-2 text-foreground">
          Designer
          <span className="flex items-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 56 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3"
            >
              <path
                d="M48 0L46.58 1.4L52.18 7H40.01V9H52.18L46.58 14.6L48 16L56 8L48 0ZM36 7C35.45 7 35 7.45 35 8C35 8.55 35.45 9 36 9C36.55 9 37 8.55 37 8C37 7.45 36.55 7 36 7ZM31 7C30.45 7 30 7.45 30 8C30 8.55 30.45 9 31 9C31.55 9 32 8.55 32 8C32 7.45 31.55 7 31 7ZM26 7C25.45 7 25 7.45 25 8C25 8.55 25.45 9 26 9C26.55 9 27 8.55 27 8C27 7.45 26.55 7 26 7ZM11 7C10.45 7 10 7.45 10 8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8C12 7.45 11.55 7 11 7ZM21 7C20.45 7 20 7.45 20 8C20 8.55 20.45 9 21 9C21.55 9 22 8.55 22 8C22 7.45 21.55 7 21 7ZM6 7C5.45 7 5 7.45 5 8C5 8.55 5.45 9 6 9C6.55 9 7 8.55 7 8C7 7.45 6.55 7 6 7ZM16 7C15.45 7 15 7.45 15 8C15 8.55 15.45 9 16 9C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7ZM1 7C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9C1.55 9 2 8.55 2 8C2 7.45 1.55 7 1 7Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          Developer
        </p>
      </div>
    </>
  );
};

export default Navbar;
