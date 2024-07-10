"use client";

import React from "react";
import { sidebarLinks, accessLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {
  SignedOut,
  SignedIn,
  UserButton,
  useUser,
  SignOutButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const ProfileSection = () => {
  const { user } = useUser();

  // use optional chaining + nullish coalecsing operator
  const username = user?.username ?? "";

  return (
    <>
      <section className="background-light900_dark200 light-border-2  flex flex-col gap-2 rounded-md border p-4 max-sm:hidden">
        <div className="flex max-h-12 items-center gap-2 overflow-hidden lg:pr-4">
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
          <p className="base-medium text-dark100_light900 max-w-32 overflow-scroll font-semibold uppercase max-lg:hidden">
            {username.length <= 12 ? username : `${username.slice(0, 10)}...`}
          </p>
        </div>

        <SignOutButton>
          <button className="base-medium semibold mt-3 flex items-center justify-center rounded-lg bg-watermelon-500 p-2 text-light-900">
            <Image
              src="/assets/icons/logout-icon.svg"
              alt="Logout"
              width={20}
              height={20}
              className="mb-[0.15rem] mr-1"
            />
            <p className="max-lg:hidden">Logout</p>
          </button>
        </SignOutButton>
      </section>
    </>
  );
};

const AccessButtons = () => {
  const accessItems = [accessLinks[1], accessLinks[2]];
  return (
    <section className="flex flex-col gap-2 p-4 max-sm:hidden">
      {accessItems.map((item) => {
        return (
          <div key={item.route}>
            <Link href={item.route} className="flex justify-start gap-4 p-4">
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className="invert-colors mb-[0.23rem]"
              />
            </Link>
          </div>
        );
      })}
    </section>
  );
};

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
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : ""} mr-auto flex justify-start gap-4 p-4 `}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"} mb-[0.23rem]`}
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
    <>
      <div className="background-light900_dark200 light-border-2 fixed z-40 ml-6 mt-32 rounded-lg border max-sm:hidden">
        <LeftbarContent />
      </div>
      <div className="fixed bottom-4 z-30 ml-6">
        <SignedOut>
          <div className="background-light900_dark200 light-border-2 rounded-md border max-sm:hidden">
            <AccessButtons />
          </div>
        </SignedOut>
        <SignedIn>
          <ProfileSection />
        </SignedIn>
      </div>
    </>
  );
};

export default LeftSidebar;
