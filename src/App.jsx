import { useState } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleMarkAsRead = (time, id) => {
    setReadTime(readTime + time);
    const finishedBlogs = bookmark.filter((blog) => blog.id !== id);
    setBookmark(finishedBlogs);
  };

  const handleBookmark = (blog, id) => {
    const isExist = bookmark.find((blog) => blog.id === id);
    if (isExist) {
      alert("already exists");
    } else {
      setBookmark([...bookmark, blog]);
    }
  };

  return (
    <div className="w-4/5 mx-auto">
      <Header></Header>

      <div className="grid grid-cols-3 gap-6">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Sidebar readTime={readTime} bookmark={bookmark}></Sidebar>
      </div>
    </div>
  );
}

export default App;
