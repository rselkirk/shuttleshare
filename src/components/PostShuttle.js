import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


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
  };

  handleChange = (e) => {
    console.log("ACK", e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  
  handlePostShuttle = (e) => {
    console.log("post:", e, this.state.from);
    e.preventDefault();

    const shuttle = { 
      // "from": e.target.elements.from.value.trim(), 
      "from": this.state.from
      // "to": e.target.elements.to.value.trim(), 
      // "date": e.target.elements.date.value.trim(), 
      // "time": e.target.elements.time.value.trim(), 
      // "spots": e.target.elements.spots.value.trim(), 
      // "cost": e.target.elements.cost.value.trim()
    };

    const error = this.props.handlePostShuttle(shuttle);

    this.setState(() => ({ error }));

    if (!error) {
      this.state.from = '';
      // e.target.elements.from.value = '';
      // e.target.elements.to.value = '';
      // e.target.elements.date.value = '';
      // e.target.elements.time.value = '';
      // e.target.elements.spots.value = '';
      // e.target.elements.cost.value = '';
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
            
            <button>Post Shuttle</button>
          </FormControl>
        </form>
        
      </div>
    );
  }
}