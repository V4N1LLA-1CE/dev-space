"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, SignOutButton } from "@clerk/nextjs";
import { sidebarLinks, accessLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-2">
      {sidebarLinks.map((item) => {
        const onRoute =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${onRoute ? "primary-gradient rounded-2xl text-light-900" : "text-dark-300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${onRoute ? "" : "invert-colors"} pb-[0.3rem]`}
              />
              <p
                className={`${onRoute ? "base-bold" : "base-medium text-dark100_light900 "} `}
              >
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="invert-colors block sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="background-light900_dark200 rounded-b-3xl border-none"
      >
        <Link href="/" className="mr-3 flex items-center justify-center gap-1">
          <Image
            src="/assets/images/devspace-icon.svg"
            width={46}
            height={46}
            alt="DevSpace"
            className="pb-1"
          />
          <p className="h2-bold font-mono text-watermelon-950 dark:text-watermelon-100">
            DEV<span className="text-primary-500">SPACE</span>
          </p>
        </Link>

        <div className="mt-6 flex h-full flex-col items-center justify-between gap-10 border-none pb-16">
          <SheetClose asChild>
            <div className="light-border-2 overflow-auto border-y-2 py-2">
              <NavContent />
            </div>
          </SheetClose>

          <SignedIn>
            <SignOutButton>
              <button className="base-medium flex w-52 items-center justify-center gap-2 rounded-lg bg-watermelon-600 p-2.5 text-light-900">
                <Image
                  src="/assets/icons/logout-icon.svg"
                  alt="Logout"
                  width={20}
                  height={20}
                  className="mb-[0.15rem]"
                />
                <p className="pr-3">Logout</p>
              </button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <div className="z-50 flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg p-3 px-20 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="text-dark400_light900 small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg p-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
