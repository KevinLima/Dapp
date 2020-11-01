import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import HeadIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import KeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';

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
    padding: "10%",
    height: 300,
    width: '100%',
    backgroundColor: '#3f51b5',
    color: '#fff',
    position: "relative",
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
    color: '#fff',
    borderColor: '#fff',
    borderRadius: '15px',
    width: '80%',
    position: 'absolute',
    bottom: 20,
    display: "block",
  },
  HeadIcon:{
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  KeyIcon:{
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    marginBottom: 5,
  },
  large: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  tokenTitle:{
    fontSize: '16px',
  },
}));

const Profile = props => {
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
              style={{ backgroundColor: '#332C49' }}
            >
                <span className={classes.spanIcon}>
                <HeadIcon className={classes.HeadIcon} />
              </span>
              <Avatar 
              alt="John Doe" 
              src={require('../images/profile.png')} 
              className={classes.large}>
                  JD
                </Avatar>
              <span className={classes.span}>
                John Doe
                <p className={classes.tokenTitle}>Collector</p>
              </span>
              <Button variant="outlined" className={classes.button} color="secondary">
              <KeyIcon className={classes.KeyIcon} />
            </Button>
              
            </Paper>
          </Typography>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Profile;