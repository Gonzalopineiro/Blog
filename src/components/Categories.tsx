import React from "react";

export default function Categories() {
  return (
    <section className="mb-16">
      <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.12)] p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <span className="w-2 h-8 bg-green-600 dark:bg-green-400 rounded-full"></span>
          Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          <a href="/blog/category/javascript" className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
            JavaScript
          </a>
          <a href="/blog/category/typescript" className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
            TypeScript
          </a>
          <a href="/blog/category/react" className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors">
            React
          </a>
          <a href="/blog/category/nextjs" className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors">
            Next.js
          </a>
        </div>
      </div>
    </section>
  );
}