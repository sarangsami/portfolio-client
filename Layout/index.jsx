import React, { Children, useRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const scrollRefs = useRef([]);

  const childrenWithProps = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { scrollRefs });
    }
    return child;
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header scrollRefs={scrollRefs} />
      {childrenWithProps}
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
