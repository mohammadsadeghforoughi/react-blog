import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { routes } from "./routes/routes";
import store, { RootState } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "./components/Error-Boundary";
import { ThemeProvider } from "@mui/material";
import {ThemePicker} from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

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
  const ThemeMode = useSelector((state: RootState) => state.generals.themeMode);
  const [Theme, setTheme] = useState<any>(ThemePicker('dark'));
  useEffect(()=>{
    setTheme(ThemePicker(ThemeMode))
  }, [ThemeMode])
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>{routes}</Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
