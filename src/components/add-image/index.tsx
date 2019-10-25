import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//import { addNewArrivalAction } from '../../redux/actions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Header from '../header'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { getCountries } from '../../redux/actions'



export class AddImage extends React.Component<any, any> {

  componentDidMount() {
    const { getCountries } = this.props.reduxAction
    getCountries()
  }

  render() {

    return (
      <div>
 <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{
            marginTop: "16px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Avatar style={{
              margin: "2px",
              backgroundColor: "#f50057"
            }}>
              <AddCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add image
                </Typography>
            <form style={{
              width: '100%',
              marginTop: "14px",
            }} noValidate>
              <Grid container spacing={2}>
                <Grid style={{ marginBottom: "8px" }} item xs={12}>
                <InputLabel htmlFor="age-native-simple">Countries</InputLabel>
        <Select
          native
          value={"hey"}
          inputProps={{
            name: 'Countries',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
 
                  
                </Grid>
                
                <Grid style={{ marginBottom: "8px" }} item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="Image url"
                    label="Image url"
                    name="Image url"
                    autoComplete="Image url"
                    onChange={(e)=>{
                    this.setState({Poster: e.target.value})
                    }}
                  />
                </Grid>


              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "18px 0px 4px" }}
                onClick={()=>{
                  const { addNewArrival } = this.props
                  addNewArrival(this.state)
                }}
              >
                Add image
          </Button>
            </form>
          </div>
        </Container>
      </div>      

      
          )
      }
  
  }
  
const mapStateToProps = (state: any) => {
  const {countries} = state;
  console.log(countries)
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

export default connect(mapStateToProps, mapDispathToprops) (AddImage)
  
