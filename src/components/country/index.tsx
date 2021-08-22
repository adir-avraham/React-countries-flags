import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Country extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { countryon: "card h-100 shadow",
        countryoff: "card h-100 "
    }
    }

        hover (params:any) {
            params = !params;
            if (params) {
                return 13
            }        
            else {

                return 5 
            }
        }
    
        render() {
   
            const { name , flag, population, region, capital } = this.props
   


            if (!name) return <h1>Loading...</h1>

            return (
                <div className="col">
                    {/* <div className="h-100 bg-light shadow rounded-3 container-card bg-light">
                        <img src={flag} className="bg-light image " alt="..."/>
                        <div className="overlay">
                            <div className="text">
                            {name}
                            <br/>
                            <i className="bi bi-globe"></i> {region}
                            <br/>
                            <i className="bi bi-award"></i> {capital}
                            <br/>
                            <i className="bi bi-people"></i> {population}
                            </div>
                        </div>
                    </div> */}

                    
                    {/* <div className="card h-100 shadow rounded-3 material-card">
                        <img src={flag} className="card-img-top bg-light img-fluid" alt="..." style={{height: "50%"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><i className="bi bi-globe"></i> {region}</p>
                            <p className="card-text"><i className="bi bi-award"></i> {capital}</p>
                            <p className="card-text"><i className="bi bi-people"></i> {population}</p>
                        </div>
                    </div> */}


                     <Card style={{height: "100%", borderRadius: "13px"}} elevation={3} >

        <CardMedia
            style={{height: "150px"}}
          image={flag}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <i className="bi bi-globe"></i> {region}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <i className="bi bi-award"></i> {capital}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <i className="bi bi-people"></i> {population}
          </Typography>
        </CardContent>
    </Card>
                </div>
            );
        }
}

const mapStateToProps = (state: any) => {
    const { imagesCountries } = state;
    return { imagesCountries };
}

export default connect (mapStateToProps, null) (Country);