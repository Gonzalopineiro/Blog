import React from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import { formatDate } from "@/utils/dateFormatter";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="group bg-white dark:bg-white rounded-[24px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.12)] overflow-hidden">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={post.coverImage}
          alt={`${post.title} cover`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">{post.category}</span>
          <span className="text-xs text-gray-400 dark:text-gray-500 self-center">{post.readingTime} read</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"><a href={`/blog/${post.id}`} >{post.title}</a></h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Image
              src={post.authorPfp}
              alt={post.authorName}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(post.publishedAt)}</span>
          </div>
          <a href={`/blog/${post.id}`} className="text-purple-600 dark:text-purple-400 hover:underline font-medium text-sm">Read more →</a>
        </div>
      </div>
    </div>
  );
}