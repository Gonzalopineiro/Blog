import React from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import { formatDate } from "@/utils/dateFormatter";


export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
        <span className="w-2 h-8 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
        Latest Post
      </h2>
      <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.12)] overflow-hidden group">
        <div className="aspect-[16/9] w-full relative overflow-hidden rounded-t-[32px]">
          <Image
            src={post.coverImage}
            alt={`${post.title} cover`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-8 relative">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">Featured</span>
              <span className="text-sm text-gray-400 dark:text-gray-500">{post.readingTime} read</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <Image
                  src={post.authorPfp}
                  alt={post.authorName}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">{post.authorName}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(post.publishedAt)}</span>
                </div>
              </div>
              <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Read article
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}