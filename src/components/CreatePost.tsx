"use client"
import supabase from '@/supabase-client'

import React, { useState } from 'react'


async function insertPost(title: string, content: string, image: string, category: string, readTime: string, name:string, pfp:string) {  
  const { data, error } = await supabase
    .from('Post')
    .insert([
      {
        Title: title,
        coverImage: image,
        category: category,
        readingTime: readTime,
        Text: content,
        author: name,
        authorProfile: pfp,
        slug: title.toLowerCase().replace(/\s+/g, '-')
      }
    ])
    .select();

  if (error) {
    throw new Error(`Error inserting post: ${error.message}`);
  }
  return data;
}

export default function CreatePost({ pfp, name }: { pfp: string, name: string }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    category: '',
    readTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await insertPost(
        formData.title,
        formData.content,
        formData.image,
        formData.category,
        formData.readTime,
        name,
        pfp
      );
      // Reset form after successful submission
      setFormData({
        title: '',
        content: '',
        image: '',
        category: '',
        readTime: ''
      });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0.2rem_0.4rem_12rem_rgba(0,0,0,0.08)] p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Create New Post</h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Post title"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content
              </label>
              <textarea
                id="content"
                rows={6}
                value={formData.content}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Write your post content..."
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cover Image Link
              </label>
              <input
                type="text"
                id="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <input
                type="text"
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Javascript"
                required
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Read Time
              </label>
              <input
                type="text"
                id="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="5 minutes"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Upload Post
              </button>
            </div>
          </form>
        </div>
      </main>
  )
};
