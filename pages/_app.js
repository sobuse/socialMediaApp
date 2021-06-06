import App from "next/app";
import Layout from "../components/Layout/Layout";
import "semantic-ui-css/semantic.min.css";
import { Component } from "react";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <layout>
        <Component />
      </layout>
    );
  }
}

export default MyApp;
