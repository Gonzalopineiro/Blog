import React from 'react';
import {auth} from "@/../auth"
import CreatePost from '@/components/CreatePost';



export default async function AdminDashboard() {
  const session = await auth() 
  if(!session) { return (
    <div>
      <h1>You are not logged in</h1>
    </div>)
    } else {
    }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        </div>
      </header>
      <CreatePost pfp={session.user?.image || "/images/ImagePlaceholder.jpeg"} name={session.user?.name || "Anonymous"} />
    </div>
  );
}