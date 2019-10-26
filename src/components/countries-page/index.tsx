import React from 'react';
import ImageList from '../image-list'
import DenseTable from '../table';


export default class CountriesPage extends React.Component<any, any> {
    
    render() {
        
        return (
            <div>
                <h1>Countries page</h1>

                <DenseTable />
                <ImageList/>
            </div>
        )
    }
}


