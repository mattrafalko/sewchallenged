import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import moment from "moment";

const Home = (props) => {
  const { results } = props.doc;

  const posts = results.map((item) => {
    const blogDate = moment(item.first_publication_date)
      .toDate()
      .toLocaleDateString();
    const blogTime = moment(item.first_publication_date)
      .toDate()
      .toLocaleTimeString();

    return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden max-w-lg lg:max-w-none lg:mx-0 mx-auto">
        <div className="flex-shrink-0">
          <img className="h-64 w-full object-cover" src={item.data.image.url} />
        </div>

        <div className="p-6 flex flex-col justify-between h-0 flex-1">
          <div className="">
            <p className="text-sm leading-5 font-medium">Tags</p>
            <h2 className="mt-2 text-xl leading-7 font-semibold">
              <Link href={`/blog/${item.uid}`}>
                <a className="">{RichText.asText(item.data.blogtitle)}</a>
              </Link>
            </h2>
          </div>

          <div className="mt-6 text-gray-600">
            <time>
              Posted on {blogDate} at {blogTime}
            </time>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Layout>
        <div className="grid gap-12 mt-12 lg:grid-cols-3 ">{posts}</div>
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
