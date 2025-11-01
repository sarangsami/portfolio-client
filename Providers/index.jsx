import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

import theme from "services/theme";
import "services/localization";

import Layout from "Layout";

const Providers = ({ children }) => {
  const settings = useSelector((state) => state.settings);
  const { direction } = settings;
  return (
    <ThemeProvider theme={theme(settings)}>
      <div dir={direction}>
        <CssBaseline />
        {direction === "rtl" ? (
          <CacheProvider value={cacheRtl}>
            <Layout>{children}</Layout>
          </CacheProvider>
        ) : (
          <Layout>{children}</Layout>
        )}
      </div>
    </ThemeProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.any,
};

export default Providers;
