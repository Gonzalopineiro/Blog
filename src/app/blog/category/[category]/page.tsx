import React from "react";
import { formatExcerpt } from "@/utils/textFormatter";
import supabase from "@/supabase-client";
import { Post } from "@/types/post";
import PostCard from "@/components/PostCard";
import { dehyphenate } from "@/utils/dashFormatter";

async function getPosts(category: string) {
    const { data: dbPosts, error } = await supabase
      .from('Post')
      .select('*')
      .eq('category', category)
      .order('publishedAt', { ascending: false });
  
    if (error) {
      console.log('Error fetching posts:', error);
      return [];
    }
  
    // Transform database posts to match Post interface
    const posts = dbPosts?.map(post => ({
      id: post.id || 0,
      title: post.Title || '',
      excerpt: formatExcerpt(post.text) || '',
      coverImage: post.coverImage || '/images/ImagePlaceholder.jpeg',
      readingTime: post.readingTime || '5 min',
      slug: post.slug || '',
      authorName: post.author || 'Anonymous',
      authorPfp: post.authorProfile || '/images/ImagePlaceholder.jpeg',
      publishedAt: post.publishedAt || new Date().toISOString(),
      category: post.category || 'Uncategorized'
    })) || [];
  
    return posts;
  }


export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const Posts = await getPosts(dehyphenate((await params).category));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-2">
          <span className="w-2 h-8 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
          Category: {Posts[0].category}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Posts.map((post: Post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}