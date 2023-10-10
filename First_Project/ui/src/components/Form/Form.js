import React, { useEffect, useState } from "react";
import useStyles from "./styles.js";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";

const Form = ({ currentID, setCurrentID }) => {
  const [postData, setPostdata] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentID ? state.posts.find((p) => p._id === currentID) : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) {
      setPostdata(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentID) {
      try {
        dispatch(
          updatePost(currentID, { ...postData, name: user?.result?.name })
        );
      } catch (error) {
        console.log(error);
      }
    } else dispatch(createPost({ ...postData, name: user?.result?.name }));
    clear();
  };

  const clear = () => {
    setCurrentID(null);
    setPostdata({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      {user?.result?.name ? (
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentID ? "Editing" : "Creating"} a Memory
          </Typography>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostdata({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostdata({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostdata({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostdata({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => clear()}
            fullWidth
          >
            Clear
          </Button>
        </form>
      ) : (
        <Typography variant="h6" align="center">
          Please Sign in to create memories and like other's memories
        </Typography>
      )}
    </Paper>
  );
};

export default Form;
