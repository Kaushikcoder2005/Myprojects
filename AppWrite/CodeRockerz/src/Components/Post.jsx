import React, { useState } from 'react';
import { PenSquare, User, Tags, FileText, Send, X } from 'lucide-react';
import { Client, Databases, ID } from "appwrite";

const Post = () => {
  const [post, setPost] = useState({
    title: '',
    summary: '',
    content: '',
    author: '',
    tags: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the post data to your backend
    console.log('Post data:', post);

    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1') // Ensure correct endpoint
      .setProject('676d6a44001d973e9ea6'); // Replace with actual Project ID

    const databases = new Databases(client);
    const randomNumber = Math.floor(Math.random() * 501);
    let element = {
      "title": post.title,
      "content": post.content,
      "author": post.author,
      "slug": post.tags,
      "views": randomNumber,
      "is_publish": true,
    };

    const promise = databases.createDocument(
      '676d6c6100188ee30096', // Replace with actual Database ID
      '676d6d1400087562e4a8', // Replace with actual Collection ID
      ID.unique(),
      element
    );

    promise.then(
      (response) => {
        console.log("Document created successfully:", response);
      },
      (error) => {
        console.error("Error creating document:", error);
      }
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <PenSquare className="w-6 h-6" />
          Create New Blog Post
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={handleChange}
                placeholder="Enter post title"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="summary" className="block text-sm font-medium mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Summary
              </label>
              <input
                type="text"
                id="summary"
                name="summary"
                value={post.summary}
                onChange={handleChange}
                placeholder="Brief summary of your post"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={post.content}
                onChange={handleChange}
                placeholder="Write your blog post content here..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                required
              />
            </div>

            <div>
              <label htmlFor="author" className="block text-sm font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={post.author}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium mb-2">
                <Tags className="w-4 h-4 inline mr-2" />
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={post.tags}
                onChange={handleChange}
                placeholder="Enter tags separated by commas"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 border rounded-md hover:bg-gray-100 flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;