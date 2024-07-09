"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const LeftbarContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-2 p-4">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark-300_light900"} mr-auto flex justify-start gap-4 p-4 `}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"} `}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium text-dark100_light900"} hidden lg:block`}
              >
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

const LeftSidebar = () => {
  return (
    <div className="background-light900_dark200 light-border-2 fixed z-40 ml-6 mt-32 flex-col rounded-lg border  max-sm:hidden">
      <LeftbarContent />
      <SignedOut>SignedOut</SignedOut>
    </div>
  );
};

export default LeftSidebar;
