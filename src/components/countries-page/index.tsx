import React from 'react';
import ImageList from '../image-list'


export default class CountriesPage extends React.Component<any, any> {

    render() {

        return (
            <div>
                <h1>Flags:</h1>
                <ImageList/>
            </div>
        )
    }
}

