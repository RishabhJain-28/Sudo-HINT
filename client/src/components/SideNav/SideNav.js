import { makeStyles } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import ForumIcon from "@material-ui/icons/Forum";
import GestureIcon from "@material-ui/icons/Gesture";

const useStyles = makeStyles((theme) => ({
  flexCol: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0 0 1rem",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    padding: "10px 0 10px 10px",
    "&:hover": {
      backgroundColor: "rgb(211,211,211, 0.2)",
      borderRadius: "10px",
    },
    // justifyContent: "space-evenly",
    // margin: "1rem 0 0 0",
  },
  text: {
    margin: "auto 0 auto 0.5rem",
    alignSelf: "center",
  },
}));

const SideNav = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.flexCol}>
        <div className={classes.flexRow}>
          <span style={{ alignSelf: "flex-end" }}>
            <HomeIcon fontSize="large" />
          </span>
          <span className={classes.text}>Home</span>
        </div>
        <div className={classes.flexRow}>
          <span>
            <CodeIcon fontSize="large" />
          </span>
          <span className={classes.text}>Peer Coding</span>
        </div>
        <div className={classes.flexRow}>
          <span>
            <ForumIcon fontSize="large" />
          </span>
          <span className={classes.text}>Forums</span>
        </div>
        <div className={classes.flexRow}>
          <span>
            <GestureIcon fontSize="large" />
          </span>
          <span className={classes.text}>Learning Paths</span>
        </div>
      </div>
    </>
  );
};

export default SideNav;