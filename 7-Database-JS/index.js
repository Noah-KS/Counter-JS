$.ajax({
  type: "GET",
  url: "https://mahabub81.github.io/covid-19-api/api/v1/countries.json",
  success: function (response) {
    response.forEach(function (country) {
      var tableRow =
        "<tr><td>" +
        country.country_region +
        "</td><td>" +

        country.population +
        "</td><td>" +

        country.latest.active +
        "</td><td>" +

        country.latest.confirmed +
        "</td><td>" +

        country.latest.deaths +
        "</td><td>" +

        country.latest.mortality_rate +
        "</td></tr>";

      $("#tbody").append(tableRow);

    });
  },
  error: function (error) {
    console.log(error);
  },
});
