$.ajax({
    type: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
    success: function (response) {
      console.log(response);
      for (var i = 0; i < response.meals.length; i++) {
        var newItem = 
          `<div class="col-md-3 m-2 shadow-lg p-3 mb-5"><p>${response.meals[i].strMeal}</p><img src=${response.meals[i].strMealThumb} class="img-fluid" /><p>${response.meals[i].idMeal}</p></div>`;
  
        $('#my-items').append(newItem);
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
  