import React, { useState } from "react";
import { Provider } from "react-redux";
import { routes } from "./routes/routes";
import store from "./redux/store";
import { HashRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "./components/Error-Boundary";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <InnerApp />
      </Provider>
    </ErrorBoundary>
  );
};

const InnerApp: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>{routes}</Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
