import React, { useEffect, useState } from "react";
import { Typography, AppBar, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles.js";
import memories from "../../images/memoriesLogo.png";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.js";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
    const location=useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user,location]);
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
              onClick={logout}
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
