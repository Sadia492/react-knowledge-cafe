import React from "react";

export default function Sidebar({ bookmark, readTime }) {
  return (
    <div>
      <h2 className="bg-[#6047EC1A] text-[#6047EC] p-4 text-center border-2 border-[#6047EC] rounded-lg mb-4 font-bold">
        Spent time on read : {readTime} min
      </h2>

      <div className="bg-[#1111110D] p-8 rounded-xl">
        <h2 className="font-bold text-2xl mb-3">
          Bookmarked Blogs : {bookmark.length}
        </h2>
        <div>
          {bookmark.map((blog) => (
            <h2 className="bg-white p-3 rounded-lg font-semibold text-lg mb-2">
              {blog.title}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
