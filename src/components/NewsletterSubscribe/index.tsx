import {
  Card,
  Grid,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import useStyles from "./NewsletterSubscribe.style";
import Mail from "../../assets/mail.svg";
export const NewsletterSubscribe: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid xs={6}>
          <Box className={classes.leftBox}>
            <Grid container flexDirection={"column"} spacing={3}>
              <Grid item>
                <Typography fontWeight={900} fontSize={"20px"}>
                  Subscribe to the Newsletter
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontWeight={400} fontSize={"17px"}>
                  Subscribe to get my latest content by email.
                </Typography>
              </Grid>
              <Grid item>
                <img src={Mail} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={6}>
          
          <Box className={classes.rightBox}>
            <Grid container flexDirection={"column"} spacing={2}>
              <Grid item>
                <TextField
                  className={classes.inputs}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="outlined"
                  size="small"
                  placeholder="Your first name"
                  type={"text"}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.inputs}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="outlined"
                  size="small"
                  placeholder="Your email address"
                  type={"email"}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                >
                  Subscribe
                </Button>
              </Grid>
              <Grid item>
                <Typography color="secondary" className={classes.smallText}>
                  I won’t send you spam. Unsubscribe at any time.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
