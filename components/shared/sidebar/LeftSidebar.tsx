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
      <section className="background-light900_dark200 light-border-2 flex flex-col gap-2 rounded-md border p-[0.85rem] max-sm:hidden">
        <div className="flex max-h-12 items-center justify-center gap-2 overflow-hidden p-[0.35rem] lg:pr-4">
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
          <p className="base-medium text-dark100_light900 primary-text-gradient max-w-32 font-semibold uppercase max-lg:hidden">
            {username.length <= 12 ? username : `${username.slice(0, 10)}...`}
          </p>
        </div>

        <SignOutButton>
          <button className="base-medium semibold mt-3 flex items-center justify-center rounded-lg bg-watermelon-600 p-2 py-4 text-light-900 lg:py-2">
            <Image
              src="/assets/icons/logout-icon.svg"
              alt="Logout"
              width={20}
              height={20}
              className="mb-[0.15rem]"
            />
            <p className="pr-2 max-lg:hidden">Logout</p>
          </button>
        </SignOutButton>
      </section>
    </>
  );
};

const AccessButtons = () => {
  const accessItems = [accessLinks[1], accessLinks[2]];
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4 max-sm:hidden lg:flex-row lg:gap-6 lg:px-6 lg:py-1">
      {accessItems.map((item) => {
        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className="item-center flex flex-col justify-center p-4"
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className="invert-colors mx-auto mb-[0.23rem]"
              />
              <p className="base-medium text-dark100_light900 text-xs max-lg:hidden">
                {item.label}
              </p>
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
    <section className="flex flex-col gap-1 p-4">
      {sidebarLinks.map((item) => {
        const onRoute =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className={`${onRoute ? "primary-gradient rounded-2xl text-light-900" : ""} mr-auto flex justify-start gap-4 p-4 `}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${onRoute ? "" : "invert-colors"} mb-[0.23rem]`}
              />
              <p
                className={`${onRoute ? "base-bold" : "base-medium text-dark100_light900"} hidden lg:block`}
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
      <section className="sticky bottom-0 left-0 flex h-dvh flex-col justify-between gap-2 overflow-y-scroll pb-6 pl-6 pt-32 max-sm:hidden">
        <div className="background-light900_dark200 light-border-2 rounded-lg border max-sm:hidden">
          <LeftbarContent />
        </div>
        <div className="">
          <SignedOut>
            <div className="background-light900_dark200 light-border-2 rounded-md border max-sm:hidden">
              <AccessButtons />
            </div>
          </SignedOut>
          <SignedIn>
            <ProfileSection />
          </SignedIn>
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
