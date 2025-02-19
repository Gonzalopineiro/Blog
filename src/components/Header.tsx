import React from "react";
export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center p-8 ">
        <h1 className=" sm:text-6xl font-black text-center sm:text-left bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-sm">
          DEAL WITH THE DEV
        </h1>
    </header>
  );
}