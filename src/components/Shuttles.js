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

  const rows = [
    { id: '3', from: "Rossland", to: "BS", spots: 6 },
    { id: '4', from: "Ross", to: "Malde", spots: 2 }
  ];

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Spots</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.shuttles.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.to}</TableCell>
              <TableCell>{row.spots}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Shuttles;