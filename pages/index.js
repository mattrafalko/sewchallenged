import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Client, linkResolver } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import RecentBlogPostsSidebar from "../components/RecentBlogPostsSidebar";

const Home = (props) => {
  const { results } = props.doc;
  const blogPostLinks = results.map((blogPost) => blogPost.uid);

  const posts = results.map((item) => (
    <div className="max-w-xl mb-4 overflow-hidden rounded shadow-xl">
      <img className="w-full h-full" src={item.data.image.url} />
      <div className="px-3 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">
            <Link href={`/blog/${item.uid}`}>
              <a className="text-pink-700">
                {RichText.asText(item.data.blogtitle)}
              </a>
            </Link>
            <span className="text-lg">{item.first_publication_date}</span>
          </h2>
        </div>
        {RichText.asText(item.data.blogbody)}
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <Layout>
        <div className="grid px-3 py-4 lg:grid-cols-12">
          <div className="hidden col-span-3 lg:block">
            <p>Maybe a card with some fun info</p>
          </div>

          <div className="col-span-6 mx-auto">
            <div className="container mx-auto">{posts}</div>
          </div>

          <div className="hidden col-span-3 lg:block">
            <RecentBlogPostsSidebar blogList={blogPostLinks} />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

Home.getInitialProps = async (context) => {
  const req = context.req;

  const query = Prismic.Predicates.at("document.type", "blog");
  const res = await Client(req).query(query);

  return {
    doc: res,
  };
};

export default Home;
