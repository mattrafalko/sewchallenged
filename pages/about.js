import React from "react";
import { Client, linkResolver } from "../prismic-configuration";
import Layout from "../components/Layout";
import { RichText } from "prismic-reactjs";

const About = (props) => {
  const { data } = props.doc;
  return (
    <React.Fragment>
      <Layout>
        <div className="container mx-auto overflow-hidden border rounded-lg shadow-xl mt-12">
          <img
            className="w-full h-65"
            src="https://images.unsplash.com/photo-1514907558033-da9156c14c95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <div className="px-3 py-2">
            <h1 className="text-3xl font-bold text-right">
              About <span className="text-pink-500">Sew</span>
              <span className="text-pink-700">Challenged</span>
            </h1>
            <RichText render={data.description} linkResolver={linkResolver} />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

About.getInitialProps = async (context) => {
  const req = context.req;
  const about = await Client(req).getSingle("about");
  return {
    doc: about,
  };
};

export default About;
