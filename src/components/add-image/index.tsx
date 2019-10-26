import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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
import { getCountries, addImageAction } from '../../redux/actions'



export class AddImage extends React.Component<any, any> {
  
  state = { imgUrl: "" }
  
  componentDidMount() {
    const { getCountries } = this.props.reduxAction
    getCountries()
  }
  
  render() {
    
    const {countriesName, result } = this.props
  
    return (
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
              <Select onChange={(e)=>{
                const selectedValue: any = e.target.value
                this.setState({imgUrl: result[selectedValue]})
                }}  
                native
                inputProps={{ name: 'Countries'}}>
                {countriesName.map((country: any, index: number) => 
                <option key={country + index} value={country}>{country}</option>
                )}
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
                  value={this.state.imgUrl}/>
              </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "18px 0px 4px" }}
                onClick={()=>{
                  const { addImage } = this.props
                  const { imgUrl } = this.state
                  addImage(imgUrl)
                }}>
                Add image
              </Button>
            </form>
          </div>
        </Container>
          )
      }
}


const mapStateToProps = (state: any) => {
  const {countries} = state;
  const result = countries.reduce((countreisObj: any, country: any) => {
    const {name, flag} = country
    const oldCountry = countreisObj[name] || [] 
    return { ...countreisObj, [name]: [...oldCountry, flag] }
  }, {})
  const countriesName = Object.keys(result) 
  return {countriesName, result}
}

const mapDispathToprops = (dispatch: any) => {
  return {
    reduxAction: {
      getCountries: () => {
        dispatch(getCountries())
      }
    },
    addImage: (imgUrl: any) => {
        dispatch(addImageAction(imgUrl))
    }
  }
}

export default connect(mapStateToProps, mapDispathToprops) (AddImage)
  
