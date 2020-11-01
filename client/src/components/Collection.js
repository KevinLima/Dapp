import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import HeadIcon from '@material-ui/icons/Nature';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  text: {
    width: '100%',
  },
  paper: {
    margin: 20,
    padding: 20,
    height: 300,
    width: '100%',
    backgroundColor: '#3f51b5',
    color: '#fff'
  },
  token:{
    height: 20,
    width: 20,
    marginRight: 10,
  },
  span: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: 'center',
  },
  marginAutoContainer: {
    width: '100%',
    height: 80,
    display: 'flex',
  },
  marginAutoItem: {
    margin: 'auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },

  },
  button: {
    marginTop: 20,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff',
    borderColor: '#fff',
    borderRadius: '15px',
    width: '100%',
    justifyContent: 'left',
  },
  icon: {
    marginLeft: '55%',
  },
  HeadIcon:{
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  Circular: {
    color: '#fff',
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    size: 500,
  },
  tokenTitle:{
    fontSize: '16px',
  },
}));

const Collection = props => {
  const classes = useStyles();

  useEffect(() => {
  });

  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h4" gutterBottom className={classes.text}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: '#65A0AC' }}
            >
                <span className={classes.span}>
                <HeadIcon className={classes.HeadIcon} />
                <p className={classes.tokenTitle}>Goals</p>
                <Checkbox checked={false}/>
              20.000g
              <p className={classes.tokenTitle}>Plastic Collected</p>
              </span>
              
            </Paper>
          </Typography>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Collection;