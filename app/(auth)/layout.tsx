import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-center min-h-screen w-full">
      <div>{children}</div>
    </main>
  );
};

export default AuthLayout;
