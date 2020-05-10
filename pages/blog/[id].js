import React from "react";
import Layout from "../../components/Layout";
import { Client, linkResolver } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";

const Post = (props) => {
  const { data } = props.doc;

  return (
    <div>
      <Layout>
        <div className="container mx-auto overflow-hidden border rounded-lg shadow-xl mt-12 flex flex-col justify-between ">
          <div className="p-6">
            <h1 className="text-3xl mb-3">{RichText.asText(data.blogtitle)}</h1>
          </div>
          <div className="mx-auto">
            <img className="" src={data.image.url} />
          </div>
          <div className="p-6">
            <RichText render={data.blogbody} linkResolver={linkResolver} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

Post.getInitialProps = async (context) => {
  const { req } = context;
  const { id } = context.query;
  const res = await Client(req).getByUID("blog", id);
  return {
    doc: res,
  };
};

export default Post;
