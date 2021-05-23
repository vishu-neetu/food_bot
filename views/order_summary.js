$(function () {
  console.log("hello");
  fetch("http://localhost:3000/backend/orderSummary")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      var users = data;
      personal_data = data.itemsOrdered;
      rest_data = data.restaurant;
      console.log(rest_data);
      var total_cost = 0;

      var table = document.getElementById("myTable");

      for (var i = 0; i < personal_data.length; i++) {
        let food_cost = personal_data[i].price * personal_data[i].quantity;
        total_cost += (food_cost + (food_cost*personal_data[i].tax_pct/100))
        var row = `<tr>
                    <td>${personal_data[i].name}</td>
                    <td>${personal_data[i].category}</td>
                    <td>${personal_data[i].price}</td>
                    <td>${personal_data[i].currency}</td>
                    <td>${personal_data[i].tax_pct}</td>
                    <td>${personal_data[i].quantity}</td>
                </tr>`;

        table.innerHTML += row;
      }
      console.log(total_cost);

      document.getElementById('rest_name').innerHTML = rest_data.name;
      document.getElementById('rest_street').innerHTML = rest_data.street;
      document.getElementById('rest_city').innerHTML = rest_data.city;
      document.getElementById('rest_state').innerHTML = rest_data.state;
      document.getElementById('rest_zip').innerHTML = rest_data.zipcode;
      document.getElementById('total_cost').innerHTML = total_cost;
    });
});
