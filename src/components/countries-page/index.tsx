import React from 'react';
import StoreTable from '../store-table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountries } from '../../redux/actions';
import Country from '../country';
import Item from '../item';

export class CountriesPage extends React.Component<any, any> {
    
    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        const { getCountries } = this.props.reduxActions;
        getCountries()
    }

    render() {
        const { countries } = this.props;
        if (!countries.length) return <h1><img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag-globe-2.gif"/></h1>;
        const headers = getHeaders(countries);
        const data = getTableBody(countries);
        console.log(countries)
        return (
            <div>
                <h1 className="text-center py-2">Countries page</h1>
                <div className="container py-3" style={{maxWidth: "1024px"}}>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {countries.map((country: any) => <Country key={country.name}  {...country} />)}
                </div>
                </div>
            </div>
        )
    }
}

function getHeaders(data: Array<any>) {
    if (!data.length) return;
    const [firstItemInArray] = data; //const item = data[0]
    return Object.keys(firstItemInArray).map((header: string)=>{
        if (header === "code")
        return (
            <th>
                {" "}
                <span>&#127921;</span> {header}{" "}
            </th>
        );
        return <th> {header} </th>
    })
}


function getTableBody(data: Array<any>) {
    return data.map((dataItem: any, index:number) =>{
        return <tr key={"tr_" + index} >{getTableRow(dataItem)}</tr>
    })
}


function getTableRow(row: any) {
    return Object.entries(row).map(([key, value]) => {

        if (key === "region" && value === "Europe") 
        return (
            <td>
                {" "}
                <span>&#127379;</span> {value} {" "}
            </td>
        );
        if (Array.isArray(value)) {
            const strBorders = value.join(",");
            return strBorders.includes("IRN") ? (
                <td>
                    {" "}
                    <span>&#128013;</span> {strBorders}{" "}
                </td>
            ) : (
                <td> { strBorders } </td>
            );
        }
        if (key === "flag")
        return (
            <td>
                {" "}
                <img src={value as string} height={40} width={70} alt=""/>{" "}
            </td>
        );
        if (key === "code")
        return (
            <td>
                {" "}
                <Link to={`/country/${value}`}>{value as string}</Link>{" "}
            </td>
        );
        return <td> {value} </td>;
    });
}


interface Country {
    capital: string;
    name: string;
    alpha3Code: string;
    region: string;
    borders: Array<string>;
    flag: string;
    population: number;
}

const mapStateToProps = (state: any) => {
    const { countries } = state;
    const mappedCountries = countries.map((country: Country)=>{
        const { capital, name, alpha3Code, region, borders, flag, population } = country;
        return {
            capital: capital,
            name: name,
            code: alpha3Code,
            region: region,
            borders: borders,
            flag: flag,
            population: population
        };
    });
    return { countries: mappedCountries }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        reduxActions: {
            getCountries: () => {
                dispatch(getCountries());
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CountriesPage)