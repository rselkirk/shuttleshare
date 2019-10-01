import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
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
      destination: props.shuttle ? props.shuttle.destination : '',
      date: props.shuttle ? moment(props.shuttle.date) : moment(),
      time: props.shuttle ? props.shuttle.time : moment(),
      spots: props.shuttle ? props.shuttle.spots : '',
      cost: props.shuttle ? props.shuttle.cost : '',
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
  onDateChange = (date) => {
    if (date) {
      this.setState(() => ({ date }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onTimeChange = (time) => {
    console.log('time',time);
    if (time) {
      this.setState(() => ({ time }));
    }
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
        origin: this.state.origin,
        destination: this.state.destination,
        date: this.state.date.valueOf(),
        time: this.state.time.valueOf(),
        spots: e.target.elements.spots.value.trim(),
        cost: e.target.elements.cost.value.trim(),
      });
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
              <SingleDatePicker
                id="date"
                date={this.state.date}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <KeyboardTimePicker
                margin="normal"
                id="time"
                label="Departure Time"
                value={this.state.time}
                onChange={this.onTimeChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
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
      </MuiPickersUtilsProvider>
    );
  }
}

ShuttleForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShuttleForm);