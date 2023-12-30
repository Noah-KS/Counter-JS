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
      <h1>REACT COVID STATISTICS DATABASE</h1>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder=""
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>COUNTRY</th>
                <th>POPULATION</th>
                <th>ACTIVE CASES</th>
                <th>CONFIRMED CASES</th>
                <th>DEATHS</th>
                <th>MORTALITY RATE</th>
              </tr>
            </thead>

            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
