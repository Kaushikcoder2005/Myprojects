"use client";
import { useEffect } from 'react';
import { Client, Databases, ID } from "appwrite";

function App() {
  useEffect(() => {
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1') // Ensure correct endpoint
      .setProject('676d6a44001d973e9ea6'); // Replace with actual Project ID

    const databases = new Databases(client);

    let a =[
      {
        "title": "Learn JavaScript",
        "content": "<p>JavaScript is a versatile programming language used for web development, among other applications.</p>",
        "slug": "learn-javascript",
        "views": 120,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "Mastering CSS",
        "content": "<p>CSS enables you to design visually appealing web pages with styles and layouts.</p>",
        "slug": "mastering-css",
        "views": 85,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "Understanding React",
        "content": "<p>React is a JavaScript library for building user interfaces efficiently.</p>",
        "slug": "understanding-react",
        "views": 95,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "Building Responsive Websites",
        "content": "<p>Learn techniques and tools to create mobile-friendly and responsive web designs.</p>",
        "slug": "building-responsive-websites",
        "views": 110,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "Tailwind CSS Basics",
        "content": "<p>Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.</p>",
        "slug": "tailwind-css-basics",
        "views": 65,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "Introduction to WordPress",
        "content": "<p>WordPress is a powerful content management system for creating websites and blogs.</p>",
        "slug": "introduction-to-wordpress",
        "views": 70,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "HTML5 Advanced Features",
        "content": "<p>Explore the advanced features of HTML5 for building modern web applications.</p>",
        "slug": "html5-advanced-features",
        "views": 90,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "Debugging JavaScript Code",
        "content": "<p>Learn effective debugging techniques to resolve errors in JavaScript code.</p>",
        "slug": "debugging-javascript-code",
        "views": 80,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "E-commerce Website Design",
        "content": "<p>Understand the principles of designing user-friendly e-commerce websites.</p>",
        "slug": "ecommerce-website-design",
        "views": 130,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      },
      {
        "title": "The Basics of Web APIs",
        "content": "<p>Discover how to use Web APIs to integrate external functionalities into your applications.</p>",
        "slug": "basics-of-web-apis",
        "views": 75,
        "author": "Kaushik Mukherjee",
        "is_publish": true
      }
    ]
    
    for (let index = 0; index < a.length; index++) {
      const element = a[index];
            
    

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
  }
  }, []); 


  return (
    <div>
      <h1>Appwrite Document Creator</h1>
      <p>Check the console for the creation status.</p>
    </div>
  );
}

export default App;
