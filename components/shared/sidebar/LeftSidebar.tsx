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
  const name = user?.fullName ?? "";
  let email = user?.primaryEmailAddress ?? "";
  email = String(email);

  return (
    <>
      <section className="background-light900_dark200 light-border flex flex-col gap-2 rounded-md border p-[0.85rem] shadow-md max-sm:hidden">
        <div className="m-0 flex justify-end p-0">
          <Link href="/profile">
            <Image
              src="/assets/icons/edit-icon.svg"
              alt="Edit Profile"
              width={20}
              height={20}
              className="max-lg:hidden"
            ></Image>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 overflow-hidden p-[0.35rem] lg:pr-4">
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
          <div className="flex flex-col items-center">
            <p className="body-medium  primary-text-gradient max-w-32 font-semibold uppercase max-lg:hidden">
              {username.length <= 12 ? username : `${username.slice(0, 10)}...`}
            </p>
            <p className="small-regular text-light-500 max-lg:hidden">
              {name.length <= 20 ? name : `${name.slice(0, 19)}...`}
            </p>
            <p className="small-regular text-light-500 max-lg:hidden">
              {email.length <= 40 ? email : `${email.slice(0, 39)}...`}
            </p>
          </div>
        </div>

        <SignOutButton>
          <button className="base-medium semibold mt-3 flex items-center justify-center gap-2 rounded-xl bg-watermelon-600 p-4  text-light-900 lg:py-2">
            <Image
              src="/assets/icons/logout-icon.svg"
              alt="Logout"
              width={20}
              height={20}
              className="mb-[0.15rem]"
            />
            <p className="body-regular pr-2 max-lg:hidden">Logout</p>
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
    <section className="flex flex-col gap-0.5 p-4">
      {sidebarLinks.map((item) => {
        const onRoute =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className={`${onRoute ? "primary-gradient rounded-2xl text-light-900" : ""} flex justify-start gap-2 p-4 `}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${onRoute ? "" : "invert-colors"} mx-1 mb-[0.23rem]`}
              />
              <p
                className={`${onRoute ? "" : "text-dark100_light900"} base-regular hidden lg:block`}
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
      <section className="sticky bottom-0 left-0 flex h-dvh flex-col justify-between gap-2 overflow-y-scroll pb-6 pl-6 pr-1 pt-32 max-sm:hidden lg:w-[270px]">
        <div className="background-light900_dark200 light-border rounded-lg border shadow-md max-sm:hidden">
          <LeftbarContent />
        </div>
        <div className="">
          <SignedOut>
            <div className="background-light900_dark200 light-border divide-y rounded-md border shadow-md max-sm:hidden">
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
