import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Container, Switch, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleThemeMode } from "../../redux/actions";
import { Header } from "../../components/Header";
import { AuthorBox } from "../../components/AuthorBox";
import { PostItem } from "../../components/PostItem";
const Home: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleThemeMode(e.target.checked ? "light" : "dark"));
  };
  return (
    <>
      <Container>
        <Header varient="main" handleToggleTheme={handleToggleTheme}></Header>
        <AuthorBox />
        <PostItem title="test" subtitle="test2" text="test34" />
      </Container>
    </>
  );
};

export default Home;
