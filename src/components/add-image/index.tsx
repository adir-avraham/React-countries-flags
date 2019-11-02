import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { getCountries, addImageAction } from '../../redux/actions'
import MenuItem from '@material-ui/core/MenuItem';



class AddImage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { current: "ISR", image: "" }
  }
  
  componentDidMount() {
    const { getCountries } = this.props.reduxActions
    getCountries()
  }
  
  render() {
    
    const { countries } = this.props
    if(!countries.length) return <h1>No data...</h1>;
  
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
              <Select 
                value={this.state.current}
                variant="filled"
                onChange={(e: any)=> this.setState({current: e.target.value})}
                >
                {generateMenuItems(countries)}
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
                    this.setState({image: e.target.value})
                  }}></TextField>
              </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "18px 0px 4px" }}
                onClick={()=>{
                  const { addImage } = this.props.reduxActions;
                  //const { image, country } = this.state
                  //console.log("on click" + this.state.country)
                  // if (!image || !country) return;
                  addImage(this.state)
                }}>
                Add image
              </Button>
            </form>
          </div>
        </Container>
          )
      }
}

function generateMenuItems(countries: Array<Country>) {
  return countries.map((country: Country) => {
      const { name, code } = country;
      return (
         <MenuItem key={code} value={code}>
            {name}
          </MenuItem>
      );  
  })
}

interface Country {
  capital: string;
  name: string;
  alpha3Code: string;
  code: string;
  region: string;
  borders: Array<string>;
  flag: string;
}

const mapStateToProps = (state: any) => {
  const {countries} = state;
  const mappedCountries = countries.map((country: Country) => {
    const {capital, name, alpha3Code, region, borders, flag} = country;
    return {
      capital: capital,
      name: name,
      code: alpha3Code,
      region: region,
      borders: borders,
      flag: flag
    };
  });
  return {countries: mappedCountries} 
}

const mapDispathToprops = (dispatch: any) => {
  return {
    reduxActions: {
      getCountries: () => {
        dispatch(getCountries())
      },
      addImage: (payload: any) => {
        dispatch(
          addImageAction({ code: payload.current, image: payload.image })
        );
    }
  }
}
}

export default connect(mapStateToProps, mapDispathToprops) (AddImage)
  
