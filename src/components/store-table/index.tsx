import React from 'react';

export default class StoreTable extends React.Component<any, any> {

    render() {
        const { headers, data  } = this.props
        if (!Array.isArray(headers) || !Array.isArray(data)) return <h2>No data in table</h2>
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        {headers}
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}