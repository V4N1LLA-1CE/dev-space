import {
  ClerkProvider,
  // SignInButton,
  SignedIn,
  // SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/context/ThemeProvider";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Space",
  description: "A comprehensive all in one platform for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "bg-watermelon-500",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          {/* Enable sign in button while signed out */}
          {/* <SignedOut> */}
          {/*   <SignInButton /> */}
          {/* </SignedOut> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
