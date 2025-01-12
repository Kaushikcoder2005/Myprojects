"use client";
import { useEffect, useState } from 'react';
import { Client, Databases, ID } from "appwrite";


import BlogList from './Components/BlogCard';

function App() {
  // Initialize state outside useEffect
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1') // Ensure correct endpoint
      .setProject('676d6a44001d973e9ea6'); // Replace with actual Project ID

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "676d6c6100188ee30096", // Replace with actual Database IzD
      "676d6d1400087562e4a8", // Replace with actual Collection ID
      []
    );

    promise.then( (response) => {
      console.log(response.documents);
      setBlog(response.documents); // Set state with fetched documents
    },  (error) => {
      console.log(error);
    });

  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <BlogList blogs={blog} /> {/* Pass 'blog' as 'blogs' prop */}
    </>
  );
}

export default App;
