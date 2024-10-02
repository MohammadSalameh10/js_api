async function getPizza(){
const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
const data = await response.json();
const pizzaRestaurant = data.recipes;

const result = pizzaRestaurant.map(function(pizza){

return `<tr>
<td>${pizza.title}</td>
<td><img src="${pizza.image_url}" /></td>
</tr>`;

}).join('');
  
document.querySelector(".restaurants tbody").innerHTML = result;
}
getPizza();  

  