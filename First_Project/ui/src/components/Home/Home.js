import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow, Paper } from "@material-ui/core";
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from "../../styles.js";
import Paginate from '../Pagination/Pagination';

function Home() {
    const [currentID, setCurrentID] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);
  return (
    <Grow in>
        <Container>
          <Grid
            container
            justify-content="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid className={classes.mainContainer} item  xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentID={currentID} setCurrentID={setCurrentID} />
            </Grid>
            <Paper className={classes.pagination} elevation={6}>
              <Paginate/>
            </Paper>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home
