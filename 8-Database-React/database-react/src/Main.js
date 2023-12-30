import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
  const [covidData, setCovidData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://mahabub81.github.io/covid-19-api/api/v1/countries.json")
      .then((res) => {
        console.log(res.data);
        setCovidData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = covidData.filter((country) =>
    country.country_region.toLowerCase().includes(search.toLowerCase())
  );

  const tableData = filteredData.map((country, index) => (
    <tr key={index}>
      <td>{country.country_region}</td>
      <td>{country.population}</td>
      <td>{country.latest.active}</td>
      <td>{country.latest.confirmed}</td>
      <td>{country.latest.deaths}</td>
      <td>{country.latest.mortality_rate}</td>
    </tr>
  ));

  return (
    <div>
      <h1>REACT Covid Statistics Database</h1>
      <input
        type="text"
        placeholder="Search by Country"
        value={search}
        onChange={handleSearchChange}
      />

      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Population</th>
                <th>Latest Active</th>
                <th>Confirmed Cases</th>
                <th>Deaths</th>
                <th>Mortality Rate </th>
              </tr>
            </thead>

            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
