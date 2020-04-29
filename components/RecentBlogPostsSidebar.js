import React from "react";
import Link from "next/link";

const RecentBlogPostsSidebar = ({ blogList }) => {
  const blogLinks = blogList.map((item) => (
    <Link href={`/blog/${item}`}>
      <button
        className="m-2 hover:bg-purple-300 rounded p-2 text-xl hover:translate-y-3 select-none w-full"
        type="button"
      >
        <a> {item}</a>
      </button>
    </Link>
  ));

  return (
    <div className="px-4 text-center">
      <h2>Recent Blog Posts</h2>

      {blogLinks}
    </div>
  );
};

export default RecentBlogPostsSidebar;
