import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ClerkProvider,
  // SignInButton,
  SignedIn,
  // SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/devspace-icon.svg"
          width={46}
          height={46}
          alt="DevSpace"
          className="pb-1"
        />
        <p className="h2-bold font-mono text-watermelon-950 dark:text-watermelon-100 max-sm:hidden">
          DEV<span className="text-primary-500">SPACE</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignedOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#f5487f",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
