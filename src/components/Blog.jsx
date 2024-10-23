export default function Blog({
  blog,
  handleBookmark,
  handleMarkAsRead,
  bookmark,
}) {
  const {
    id,
    cover,
    title,
    hashtags,
    reading_time,
    posted_date,
    author,
    author_img,
  } = blog;
  // Check if the current blog is bookmarked
  const isBookmarked = bookmark.find((item) => item.id === id);

  return (
    <div className="pb-4 border-b-2 mb-6">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between py-6 items-center">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="font-bold text-2xl">{author}</h3>
            <h5>{posted_date}</h5>
          </div>
        </div>
        <div>
          <p className="flex justify-center items-center">
            {reading_time} min read
            <button
              onClick={() => {
                handleBookmark(blog, id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isBookmarked ? "blue" : "none"} // Change color if bookmarked
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
          </p>
        </div>
      </div>
      <h2 className="font-bold text-4xl">{title}</h2>
      <div className="flex gap-3 my-4">
        {hashtags.map((single, i) => (
          <p key={i}>#{single}</p>
        ))}
      </div>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-700 underline font-bold "
      >
        Mark as read
      </button>
    </div>
  );
}
