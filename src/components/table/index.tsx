import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { getCountries } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      marginTop: theme.spacing(3),
      width: '100%',
      overflowX: 'auto',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
  }),
);


export function DenseTable(props: any) {
    const componentDidMount = () => {
        const { getCountries } = props.reduxAction
        getCountries()
    }
    componentDidMount()
    const classes = useStyles();
    const { countries } = props 
    return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Capital</TableCell>
              <TableCell align="left">Region</TableCell>
              <TableCell align="left">Population</TableCell>
              <TableCell align="left">Flag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((country: any) => (
              <TableRow key={country.name}>
                <TableCell component="th" scope="row">
                  {country.name}
                </TableCell>
                <TableCell align="left">{country.capital}</TableCell>
                <TableCell align="left">{country.region}</TableCell>
                <TableCell align="left">{country.population}</TableCell>
                <TableCell align="left"><img style={{height: "45px", width: "65px"}} src={country.flag} alt="flag"></img></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}


const mapStateToProps = (state: any) => {
    const {countries} = state;
    return {countries}
  }
  
  const mapDispathToprops = (dispatch: any) => {
    return {
        reduxAction: {
            getCountries: () => {
              dispatch(getCountries())
            }
          }
    }
  }
  
  export default connect(mapStateToProps, mapDispathToprops) (DenseTable)
    
  