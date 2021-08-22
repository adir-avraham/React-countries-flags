import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

export default class Item extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { countryon: "card h-100 shadow",
        countryoff: "card h-100 "
    }
    }

   
    
        render() {
   
            const { name , flag } = this.props
   


            if (!name) return <h1>Loading...</h1>

            return (
                
                <div className="carousel-item">
                    {name ? "Afghanistan" :  <img src={flag} className="d-block w-100 active" alt="error" height="400px"/> }
                <img src={flag} className="d-block w-100" alt="error" height="400px"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
                
            );
        }
}