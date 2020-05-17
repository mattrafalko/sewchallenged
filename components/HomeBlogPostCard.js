import React from "react";
import { RichText } from "prismic-reactjs";
import moment from "moment";
import Link from "next/link";

const HomeBlogPostCard = ({ uid, imgUrl, blogTitle, date }) => {
  const blogDate = moment(date)
    .toDate()
    .toLocaleDateString();
  const blogTime = moment(date)
    .toDate()
    .toLocaleTimeString();

  return (
    <React.Fragment>
      <Link href={`/blog/${uid}`}>
        <div className="card lg:max-w-none lg:mx-4 ">
          <div className="flex-shrink-0">
            <img className="h-64 w-full object-cover" src={imgUrl} />
          </div>

          <div className="cardBody">
            <div>
              <p className="text-sm leading-5 font-medium">Tags</p>
              <h2 className="mt-2 text-xl leading-7 font-semibold">
                <a className="">{RichText.asText(blogTitle)}</a>
              </h2>
            </div>

            <div className="cardDate">
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
