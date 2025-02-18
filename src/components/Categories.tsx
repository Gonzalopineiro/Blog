import React from "react";
import Link from "next/link";
import supabase from "@/supabase-client";


async function getCategories() {
  const { data: categories, error } = await supabase
    .from('Post')
    .select('category')
    .order('category')
    .not('category', 'is', null);

  if (error) {
    console.log('Error fetching categories:', error);
    return [];
  }

  // Get unique categories and filter out any null or empty values
  const uniqueCategories = [...new Set(categories.map(post => post.category || 'Uncategorized'))];
  return uniqueCategories;
}

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="mb-16">
      <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.12)] p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <span className="w-2 h-8 bg-green-600 dark:bg-green-400 rounded-full"></span>
          Categories
        </h2>
        <div className="overflow-x-auto">
          <div className="flex gap-3 w-max py-2 px-4">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href={`/category/${category.toLowerCase()}`}
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