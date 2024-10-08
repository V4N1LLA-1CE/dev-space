"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 dark:focus:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              width={24}
              height={24}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 rounded-2xl border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => {
            return (
              <MenubarItem
                key={item.value}
                onClick={() => {
                  setMode(item.value);

                  if (item.value !== "system") {
                    localStorage.setItem("theme", item.value);
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
                className="flex justify-between focus:bg-light-700 dark:focus:bg-dark-400"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={16}
                  height={16}
                  className={`${mode === item.value ? "active-theme" : ""} ${item.value === "dark" ? "size-[13px]" : ""} ${mode !== "dark" && item.value === "dark" ? "fix-color-to-blue" : ""}`}
                />
                <p className="body-semibold px-3 text-light-500 ${mode === item.value ? 'text-primary-500' : 'text-dark100_light900}">
                  {item.label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
