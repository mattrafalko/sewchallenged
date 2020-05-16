import React from "react";
import Layout from "../components/Layout";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import HomeBlogPostCard from "../components/HomeBlogPostCard";

const Home = (props) => {
  const { results } = props.doc;

  const posts = results.map((item) => {
    return (
      <HomeBlogPostCard
        key={item.uid}
        uid={item.uid}
        imgUrl={item.data.image.url}
        blogTitle={item.data.blogtitle}
        date={item.first_publication_date}
      />
    );
  });

  return (
    <React.Fragment>
      <Layout>
        <div className="flex flex-wrap">{posts}</div>
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
