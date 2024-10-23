import React, { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs({ handleBookmark, handleMarkAsRead, bookmark }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-span-2">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
          bookmark={bookmark}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
}
