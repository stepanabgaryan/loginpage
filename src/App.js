import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const styles = () => ({
  card: {
    width: 275
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueEmail: "",
      inputValuePass: "",
      inputValuePassCon: "",
      valid: true
    };
  }

  handleInputChange = (event, type) => {
    this.setState({
      [ type ]: event.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      valid: this.state.inputValuePass === this.state.inputValuePassCon
    });
    if(this.state.inputValuePass === this.state.inputValuePassCon){
      alert('Password is ok!!!');
    }
  };

  render() {
    const { classes } = this.props;
    const { inputValueEmail, inputValuePass, inputValuePassCon, valid } = this.state;
    return (
        <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="outlined-email-input"
            label="Email"
            // className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.handleInputChange(e, 'inputValueEmail') }
            value={inputValueEmail}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            // className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.handleInputChange(e, 'inputValuePass') }
            value={inputValuePass}
          />
          <TextField
              error={!valid}
              id="outlined-password-input"
              label="Confirm Password"
              // className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              onChange={(e) => this.handleInputChange(e, 'inputValuePassCon') }
              value={inputValuePassCon}
          />
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" onClick={this.handleButtonClick} disabled={!(inputValueEmail && inputValuePass && inputValuePassCon)}>
            Sign Up
          </Button>
        </CardActions>
      </Card>
        </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string,
    wrapper: PropTypes.string
  })
};

export default withStyles(styles)(App);
