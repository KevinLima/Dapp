import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Web3Context from "../utils/Web3Context";
import AnatokenContract from '../contracts/AnaToken.json';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import HeadIcon from '@material-ui/icons/AccountBalance';
import Modal from "./transferModal.js";

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
  span: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: 'center',
  },
  tokenTitle:{
    fontSize: '16px',
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
  icon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    marginBottom: 5,
  },
  HeadIcon:{
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  token: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: '40px',
    height: '40px',
  },
}));

const Balance = props => {
  const classes = useStyles();
  const web3 = React.useContext(Web3Context);
  const [open, setOpen] = React.useState(false);
  const [soort, setSoort] = React.useState(false);
  const [imgAddress, setImgAddress] = React.useState("");
  const setUserAddress = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    setImgAddress(`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${accounts[0]}&choe=UTF-8`);
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
  const [balance, setBalance] = React.useState(0);
  const [contract, setContract] = React.useState("");

  const loadContract = async (web3) => {
    try {
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedContract = AnatokenContract.networks[networkId];
      const instance = new web3.eth.Contract(
        AnatokenContract.abi,
        deployedContract && deployedContract.address
      );

      console.log(accounts);
      const balance = await instance.methods.balanceOf(accounts[0]).call();

      setBalance(balance);
      setContract(instance);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load contract. Check console for details.`,
      );

      console.error(error);
    }
  }

  useEffect(() => {
    if (Object.entries(web3).length !== 0 && contract === "") {
      loadContract(web3);
    }
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
              style={{ backgroundColor: '#0336ff' }}
            >
              <span className={classes.spanIcon}>
                <HeadIcon className={classes.HeadIcon} />
              </span>
              <span className={classes.span}>
              <p className={classes.tokenTitle}>Anatokens</p>
                {balance}
              </span>
              <img 
              src={require('../images/analogowhite.png')} 
              alt="Anatoken"
              className={classes.token}
              />
              <div className={classes.buttons}>
            <Button variant="outlined" className={classes.button} color="secondary" onClick={() => handleOpen("transfer")}>
              <SendIcon className={classes.icon} />
            </Button>
          </div>
            </Paper>
          </Typography>
          <Modal open={open} handleClose={handleClose} soort={soort} imgAddress={imgAddress} />
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Balance;