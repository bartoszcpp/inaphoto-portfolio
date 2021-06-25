import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
}
