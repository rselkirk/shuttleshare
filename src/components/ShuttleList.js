import React from 'react';
import { connect } from 'react-redux';
import ShuttleListItem from './ShuttleListItem';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const ShuttleList = (props) => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
    <h1>Shuttle List</h1>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Origin</TableCell>
            <TableCell>Desination</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Spots</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.shuttles.map((shuttle, i) => (
            <TableRow key={`trc-${i}`}>
              <TableCell>{shuttle.origin}</TableCell>
              <TableCell>{shuttle.destination}</TableCell>
              <TableCell>{shuttle.date}</TableCell>
              <TableCell>{shuttle.time}</TableCell>
              <TableCell>{shuttle.spots}</TableCell>
              <TableCell>{shuttle.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );


 
};

const mapStateToProps = (state) => {
  return {
    shuttles: state.shuttles
  };
};

export default connect(mapStateToProps)(ShuttleList);
