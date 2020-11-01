import React, { Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Balance from '../../components/Balance';
import Progress from '../../components/Progress';
import Profile from '../../components/Profile';

const Collector = () => {

  const role = "Collector";

  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
            <Balance />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Progress />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Profile role={role} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
export default Collector;