import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"


const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  return (
    browser && (
      <Layout>
      <div>
        <h1>404 Error content...</h1>
      </div>
      </Layout>
    )
  );
};

export default NotFoundPage;
