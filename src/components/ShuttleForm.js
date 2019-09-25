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

class ShuttleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      origin: props.shuttle ? props.shuttle.origin : '',
      destination: props.destination ? props.shuttle.destination : '',
      date: props.date ? props.shuttle.date : '',
      time: props.time ? props.shuttle.time : '',
      spots: props.spots ? props.shuttle.spots : '',
      cost: props.cost ? props.shuttle.cost : '',
      error: ''
    }
  }
  onOriginChange = (e) => {
    const origin = e.target.value;
    this.setState(() => ({ origin }));
  };
  onDestinationChange = (e) => {
    const destination = e.target.value;
    this.setState(() => ({ destination }));
  };
  onDateChange = (e) => {
    const date = e.target.value;
    this.setState(() => ({ date }));
  };
  onTimeChange = (e) => {
    const time = e.target.value;
    this.setState(() => ({ time }));
  };
  onSpotsChange = (e) => {
    const spots = e.target.value;
    this.setState(() => ({ spots }));
  };
  onCostChange = (e) => {
    const cost = e.target.value;
    this.setState(() => ({ cost }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.origin || !this.state.destination) {
      this.setState(() => ({ error: 'Please provide origin and destination.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        from: this.state.from,
        to: this.state.to,
        date: this.state.date,
        time: this.state.time,
        spots: e.target.elements.spots.value.trim(),
        cost: e.target.elements.cost.value.trim(),
      });
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className={classes.root} onSubmit={this.onSubmit}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="origin">Origin</InputLabel>
            <Select
              onChange={this.onOriginChange}
              value={this.state.origin}
              inputProps={{
                name: 'origin'
              }}
            >
              <MenuItem value="Rossland">Rossland</MenuItem>
              <MenuItem value="Neptune Creek">Neptune Creek</MenuItem>
              <MenuItem value="Malde Creek">Malde Creek</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="destination">Destination</InputLabel>
            <Select
              onChange={this.onDestinationChange}
              value={this.state.destination}
              inputProps={{
                name: 'destination'
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
              onChange={this.onSpotsChange}
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
              onChange={this.onCostChange}
              value={this.state.cost}
              label="Cost"
              margin="normal"
              inputProps={{
                name: 'cost'
              }}
            />
          </FormControl>
          <Button variant="contained" className={classes.button} type="submit">Add Shuttle</Button>
          </form>
      </div>
    );
  }
}

ShuttleForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShuttleForm);