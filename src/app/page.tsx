import React from "react";
import Header from "@/components/Header";
import FeaturedPost from "@/components/FeaturedPost";
import RecentPosts from "@/components/RecentPosts";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import { Post } from "@/types/post";
import supabase from "@/supabase-client"
import { formatExcerpt } from "@/utils/textFormatter";

async function getPosts() {
  const { data: dbPosts, error } = await supabase
    .from('Post')
    .select('*')
    .order('publishedAt', { ascending: false });

  if (error) {
    console.log('Error fetching posts:', error);
    return [];
  }

  // Transform database posts to match Post interface
  const posts = dbPosts?.map(post => ({
    id: post.id || '',
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


//Create a plceholder post
  const placeholderPost: Post = {
    id: 1,
    title: "Placeholder Post",
    excerpt: "This is a placeholder post. It does not contain any real content.",
    coverImage: "/images/ImagePlaceholder.jpeg",
    readingTime: "5 min",
    slug: "placeholder",
    authorName: "Anonymus",
    authorPfp: "/images/ImagePlaceholder.jpeg",
    publishedAt: "March 15, 2024",
    category: "Placeholder"
  };

  const recentPosts = Array(2).fill(placeholderPost);

export default async function Home() {
  const posts = await getPosts();
  const featuredPost = posts[0] || placeholderPost;
  const recentPostsList = posts.slice(1, 3).length > 0 ? posts.slice(1, 3) : recentPosts;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-8 py-4">
        <Categories />
        <FeaturedPost post={featuredPost}/>   
        <RecentPosts posts={recentPostsList}/>
        <Newsletter />
      </main>
    </div>
  );
}