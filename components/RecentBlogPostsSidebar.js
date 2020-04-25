import React from 'react';
import Link from 'next/link';

const RecentBlogPostsSidebar = ({ blogList }) => {
  return (
    <div>
      <h2>Recent Blog Posts</h2>
      <ul>
        {blogList.map((item) => {
          <li key={item}>
            <Link href={`/blog/${item}`}>
              <a> {item}</a>
            </Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default RecentBlogPostsSidebar;
