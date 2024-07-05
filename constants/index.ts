import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/sidebar-home-icon.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/sidebar-devs-icon.svg",
    route: "/developers",
    label: "Developers",
  },
  {
    imgURL: "/assets/icons/sidebar-star-icon.svg",
    route: "/favourites",
    label: "Favourites",
  },
  {
    imgURL: "/assets/icons/sidebar-suitcase-icon.svg",
    route: "/devjobs",
    label: "Job Board",
  },
  {
    imgURL: "/assets/icons/sidebar-tag-icon.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/sidebar-user-icon.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/sidebar-question-icon.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
