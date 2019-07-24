import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const classes = useStyles();


export default class PostShuttle extends React.Component {
  state = {
    error: undefined,
    from: '',
    to: '',
    date: '',
    time: '',
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
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handlePostShuttle}>
          <FormControl>
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
          <FormControl>
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
          <FormControl>
            <InputLabel htmlFor="date">Date</InputLabel>
            <Select
              onChange={this.handleChange}
              value={this.state.date}
              inputProps={{
                name: 'date'
              }}
            >
              <MenuItem value="Aug 1">Aug 1</MenuItem>
              <MenuItem value="Aug 2">Aug 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="time">Time</InputLabel>
            <Select
              onChange={this.handleChange}
              value={this.state.time}
              inputProps={{
                name: 'time'
              }}
            >
              <MenuItem value="3:00 pm">3:00 pm</MenuItem>
              <MenuItem value="4:00 pm">4:00 pm</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              id="spots"
              value={this.state.spots}
              label="Spots"
              margin="normal"
            />
          </FormControl>
          <FormControl>
            <TextField
              id="cost"
              value={this.state.cost}
              label="Cost"
              margin="normal"
            />
          </FormControl>
          <Button type="submit">Post Shuttle</Button>
          </form>
      </div>
    );
  }
}