import React from "react";
import Layout from "../../components/Layout";
import { Client, linkResolver } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";

const Post = (props) => {
  const { data } = props.doc;

  return (
    <div>
      <Layout>
        <div className="">
          <div className="">
            <img src={data.image.url} />
            <h1>{RichText.asText(data.blogtitle)}</h1>
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
