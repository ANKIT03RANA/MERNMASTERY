import React from "react";
import { Typography, AppBar, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles.js";
import memories from "../../images/memoriesLogo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.js";

function Navbar() {
    const user = null;
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.profile}
              alt={user.result.name}
              src={user.result.iamgeUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography
              className={classes.userName}
              variant="h6"
              align="center"
            >
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.logout}
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
