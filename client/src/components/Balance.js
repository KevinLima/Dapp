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
    height: 200,
    width: 300,
    backgroundColor: '#3f51b5',
    color: '#fff'
  },
  token:{
    height: 20,
    width: 20,
    marginRight: 10,
  },
  span: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 'normal',
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
    color: '#fff',
    borderColor: '#fff',
    borderRadius: 0.5,
  }
}));

const Balance = props => {
  const classes = useStyles();
  const web3 = React.useContext(Web3Context);
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
              <img 
              src={require('../images/analogowhite.png')} 
              alt="Anatoken"
              className={classes.token}
              />
              <span className={classes.span}>
                {balance}
              </span>
              <div className={classes.buttons}>
            <Button variant="outlined" className={classes.button} color="secondary">
              Transfer
            </Button>
            <Button variant="outlined" color="secondary" className={classes.button}>
              Receive
            </Button>
          </div>
            </Paper>
          </Typography>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Balance;