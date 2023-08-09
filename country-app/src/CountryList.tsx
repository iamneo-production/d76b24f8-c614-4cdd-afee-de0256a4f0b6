import React, {useState,useEffect} from "react";

interface Country{
    id:number;
    name:string;
    capital:string;
}

const CountryList = ()=>{
    const [countries,setCountries] = useState<Country[]>([]);

    useEffect(()=>{
        fetch('http://localhost:5000/countries')
        .then(response=>response.json())
        .then(data=>setCountries(data));
    },[])

    return(<div>
        <h2>Country List</h2>
        <ul>
            {countries.map(country=>(
                <li key={country.id}>
                    {country.name} - {country.capital}
                </li>
            ))}
        </ul>
    </div>);
};

export default CountryList;