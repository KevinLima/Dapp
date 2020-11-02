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
import Modal from "./transferModal.js";
import Web3Context from "../utils/Web3Context.js";
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
  const web3 = React.useContext(Web3Context);
  const [open, setOpen] = React.useState(false);
  const [soort, setSoort] = React.useState(false);
  const [imgAddress, setImgAddress] = React.useState("");
  var publicKey;
  const setUserAddress = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    publicKey = accounts[0];
    setImgAddress(`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${accounts[0]}&choe=UTF-8`);
  }

  const profiled = async () =>{
    const profile = await Box.getProfile(publicKey);
    console.log(profile);
  }
  useEffect(() => {
    if (Object.entries(web3).length !== 0) {
      setUserAddress(web3);
    }
  }, [open, web3]);

  const handleOpen = soort => {
    setSoort(soort);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              style={{ backgroundColor: '#332C49' }}>

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
              <p className={classes.tokenTitle}>{props.role}</p>
              </span>
              <Button 
              variant="outlined" 
              className={classes.button} 
              color="secondary" onClick={() => handleOpen("QR")}>
              <KeyIcon className={classes.KeyIcon} />
            </Button>
              
            </Paper>
          </Typography>
          <Modal open={open} handleClose={handleClose} soort={soort} imgAddress={imgAddress} />
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Profile;