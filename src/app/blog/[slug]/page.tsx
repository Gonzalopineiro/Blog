import React from "react";
import Image from "next/image";
import { formatExcerpt } from "@/utils/textFormatter";
import supabase from "@/supabase-client";

interface Post {
  title: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  slug: string;
  authorName: string;
  authorPfp: string;
  publishedAt: string;
  category: string;
  Text: string;
}

async function getPost(slugs: string): Promise<Post | null> {
  const { data: post, error } = await supabase
    .from('Post')
    .select('*')
    .eq('slug', slugs)
    .single();

  if (error) {
    console.log('Error fetching post:', error);
    return null;
  }

  return post ? {
    title: post.Title || '',
    excerpt: formatExcerpt(post.text) || '',
    coverImage: post.coverImage || '/images/ImagePlaceholder.jpeg',
    readingTime: post.readingTime || '5 min',
    slug: post.slug || '',
    authorName: post.author || 'Anonymous',
    authorPfp: post.authorProfile || '/images/ImagePlaceholder.jpeg',
    publishedAt: post.publishedAt || new Date().toISOString(),
    category: post.category || 'Uncategorized',
    Text: post.Text || ''
  } : null;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <p className="text-gray-600 dark:text-gray-400">The post you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-8 py-16">
        <article className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.12)] overflow-hidden">
          {/* Cover Image */}
          <div className="aspect-[16/9] w-full relative">
            <Image
              src={post.coverImage}
              alt={`${post.title} cover`}
              fill
              className="object-cover"
            />
          </div>

          {/* Post Content */}
          <div className="p-8 md:p-12">
            {/* Category and Reading Time */}
            <div className="flex gap-3 items-center mb-6">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-400 dark:text-gray-500">
                {post.readingTime} read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
              <Image
                src={post.authorPfp}
                alt={post.authorName}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-medium text-gray-900 dark:text-white">
                  {post.authorName}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.publishedAt}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="prose dark:prose-invert max-w-none">
              <p>{post.Text}</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}