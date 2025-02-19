import React from "react";
import Link from "next/link";
import { hyphenate } from "@/utils/dashFormatter";

export default async function Categories({ categories }: { categories: string[] }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="w-2 h-8 bg-green-600 dark:bg-green-400 rounded-full mr-2"></span>
          Categories
        </h2>
      <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.12)] p-4">
        <div className="overflow-x-auto">
          <div className="flex gap-3 w-max py-2 px-4">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href={`/blog/category/${hyphenate(category)}`}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 transition-colors whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}