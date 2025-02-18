import React from "react";
import Signin from "./Sign-in";
export default function Header() {
  return (
    <header className=" py-8 sm:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-8xl sm:text-6xl font-black text-center sm:text-left bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-sm">
          Deal with the dev
        </h1>
        <Signin/>
      </div>
    </header>
  );
}