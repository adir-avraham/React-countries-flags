import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Country extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { currentCountry: null }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;
        try {
            const { data } = await axios.get(
                `http://restcountries.eu/rest/v2/alpha/${code}`
            );
            this.setState({ currentCountry: data });
        } catch (ex) {
            console.log(ex)
        }
    }

        render() {
            const { code } = this.props.match.params;
            const { imagesCountries } = this.props;
            if (!code || !imagesCountries) return;
            const { currentCountry } = this.state;
            if (!currentCountry) return <h1>Loading...</h1>

            return (
                <span>
                    <h1>{this.state.currentCountry.name}</h1>
                    {Array.isArray(imagesCountries[code]) &&
                    imagesCountries[code].map((item: string, index: number)=>{
                        return <img key={"pic" + index} src={item} height="125" width="125" alt=""/>
                    }) }
                </span>
            );
        }
}

const mapStateToProps = (state: any) => {
    const { imagesCountries } = state;
    return { imagesCountries };
}

export default connect (mapStateToProps, null) (Country);