import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../images/icon.png";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Paulina Wiater</title>
          <meta name="description" content="Paulina Wiater - Portfolio" />
          <meta name="theme-color" content="#013a71" />
          <meta name="theme-color" content="#ef790f" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Layout;
