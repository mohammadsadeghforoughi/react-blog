import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Container, Switch, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleThemeMode } from "../../redux/actions";
const Home: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const handleToggleTheme = (e: any) => {
    dispatch(toggleThemeMode(e.target.checked ? "light" : 'dark'));
  };
  return (
    <>
      <Container>
        <Typography color={"primary"}>Title</Typography>
        <Typography color={"secondary"}>
          Found 99 vulnerabilities (84 moderately irrelevant, 15 highly
          irrelevant)
        </Typography>
        <Checkbox defaultChecked />
        <Switch onChange={handleToggleTheme}></Switch>
      </Container>
    </>
  );
};

export default Home;
