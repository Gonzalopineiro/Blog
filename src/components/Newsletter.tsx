import React from "react";

export default function Newsletter() {
  return (
    <section className="mb-16">
      <div className="p-8 bg-white dark:bg-gray-900 rounded-[32px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.08)]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to my newsletter</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Get the latest posts and updates directly in your inbox</p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          />
          <button type="submit" className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}