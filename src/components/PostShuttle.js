import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

class PostShuttle extends React.Component {
  state = {
    error: undefined,
    from: '',
    to: '',
    date: '',
    time: '',
    spots: '',
    cost: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  handlePostShuttle = (e) => {
    e.preventDefault();

    const shuttle = { 
      "from": this.state.from,
      "to": this.state.to,
      "date": this.state.date,
      "time": this.state.time,
      "spots": e.target.elements.spots.value.trim(),
      "cost": e.target.elements.cost.value.trim(),
    };

    const error = this.props.handlePostShuttle(shuttle);

    this.setState(() => ({ error }));

    if (!error) {
      this.state.from = '';
      this.state.to = '';
      this.state.date = '';
      this.state.time = '';
      this.state.spots = '';
      this.state.cost = '';
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className={classes.root} onSubmit={this.handlePostShuttle}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="from">From</InputLabel>
            <Select
              onChange={this.handleChange}
              value={this.state.from}
              inputProps={{
                name: 'from'
              }}
            >
              <MenuItem value="Rossland">Rossland</MenuItem>
              <MenuItem value="Neptune Creek">Neptune Creek</MenuItem>
              <MenuItem value="Malde Creek">Malde Creek</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="to">To</InputLabel>
            <Select
              onChange={this.handleChange}
              value={this.state.to}
              inputProps={{
                name: 'to'
              }}
            >
              <MenuItem value="Rossland">Rossland</MenuItem>
              <MenuItem value="Neptune Creek">Neptune Creek</MenuItem>
              <MenuItem value="Malde Creek">Malde Creek</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="date"
              label="Departure Date"
              type="date"
              defaultValue="2019-09-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="time"
              label="Departure Time"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              className={classes.textField}
              onChange={this.handleChange}
              value={this.state.spots}
              label="Spots"
              margin="normal"
              inputProps={{
                name: 'spots'
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              className={classes.textField}
              onChange={this.handleChange}
              value={this.state.cost}
              label="Cost"
              margin="normal"
              inputProps={{
                name: 'cost'
              }}
            />
          </FormControl>
          <Button variant="contained" className={classes.button} type="submit">Post Shuttle</Button>
          </form>
      </div>
    );
  }
}

PostShuttle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostShuttle);