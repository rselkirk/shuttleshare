import React from 'react';
import Shuttle from './Shuttle';
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

const Shuttles = (props) => {
  const headings = [
    'From', 
    'To', 
    'Spots'
  ];

  function createData(from, to, spots) {
    return { from, to, spots };
  }

  const rows = [
    createData('Rossland', 'BS', '3'),
    createData('Rossland', 'SMD', '2'),
  ];

  const classes = useStyles();

  return (
    // <div>
    //   <button onClick={props.handleDeleteShuttle}>Remove All</button>
    //   {props.shuttles.length === 0 && <p>Please add a shuttle to get started</p>}
    //   {
    //     props.shuttles.map((shuttle) => (
    //       <Shuttle
    //         key={shuttle}
    //         shuttleText={shuttle}
    //         handleDeleteShuttle={props.handleDeleteShuttle}
    //       />
    //     ))
    //   }
    // </div>

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Spots</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.from}
              </TableCell>
              <TableCell align="right">{row.to}</TableCell>
              <TableCell align="right">{row.spots}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Shuttles;