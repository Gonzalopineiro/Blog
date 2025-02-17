import React from "react";
import Link from "next/link";
import { Post } from "@/types/post";
import PostCard from "./PostCard";

export default function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="w-2 h-8 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
          Recent Posts
        </h2>
        <Link href="/blog/recent" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">View all →</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}