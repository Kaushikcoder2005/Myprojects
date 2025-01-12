import React from 'react';
import { ArrowRight } from 'lucide-react';
import DOMPurify from 'dompurify';

const BlogCard = ({ title, author, views, content }) => {

  return (
    <div className="max-w-xl  mx-auto rounded-lg border border-gray-200 overflow-hidden shadow-lg  ">
      <div className="p-6 flex h-full  flex-row gap-6">
        <div >
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="text-sm text-gray-500">By {author}</div>

          <p
            className="text-gray-700 mb-4 break-all whitespace-pre-wrap" /* Changed to break-all for extreme cases */
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>

          

        </div>
        <div className="mr-3 text-xs text-subtle-gray font-medium flex items-center whitespace-nowrap">views : {views}</div>

      </div>
    </div>
  );
};

const BlogList = ({ blogs }) => {

  return (
    <div className="space-y-6 p-6">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;