import React from 'react';
import { RichText } from 'prismic-reactjs';
import moment from 'moment';
import Link from 'next/link';

const HomeBlogPostCard = ({ uid, imgUrl, blogTitle, date, tags }) => {
  const blogDate = moment(date)
    .toDate()
    .toLocaleDateString();
  const blogTime = moment(date)
    .toDate()
    .toLocaleTimeString();

  return (
    <React.Fragment>
      <Link href={`/blog/${uid}`}>
        <div className='card w-full lg:max-w-xl lg:mx-4 bg-white'>
          <div className='flex-shrink-0'>
            <img className='object-cover w-full h-auto' src={imgUrl} />
          </div>

          <div className='cardBody'>
            <div>
              <div className='flex space-x-3'>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-2 py-0.5 bg-teal-400 text-gray-100 rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className='mt-2 text-2xl leading-7 font-semibold'>
                <a className=''>{RichText.asText(blogTitle)}</a>
              </h2>
            </div>

            <div className='cardDate'>
              <time>
                Posted on {blogDate} at {blogTime}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default HomeBlogPostCard;
