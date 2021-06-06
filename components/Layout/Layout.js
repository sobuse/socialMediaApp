import React from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import nprogress from "nprogress";
import Router from "next/router";

function Layout({ children }) {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.dome();
  Router.onRouteChangeError = () => nprogress.dome();

  return (
    <>
      <HeadTags />

      <Navbar />

      <Container style={{ paddingTop: "1rem" }} text>
        {children}
      </Container>
    </>
  );
}

export default Layout;
