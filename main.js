"use strict"

function renderCoffee(coffee) {
    //this is responsible for rendering one coffee
    let html = '<div class="java">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p>' + coffee.roast + '</p>';
    // html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    // this is responsible for rendering all of your coffees
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        //this is appending a coffee that is a div in html as an item in our list of coffees
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    //this is getting the value selected from the dropdown
    let selectedRoast = roastSelection.value;


    //this will be the new array of coffees with only my searched values
    let filteredCoffees = [];
    //this will iterate over our original array that we don't want to display but rather filter our
    coffees.forEach(function(coffee) {
        //if the coffee roast is equal to the selected value
        if (coffee.roast === selectedRoast) {
            //then push this valid coffee into my new array(filteredCoffees) so that this could be displayed in place of the original array
            filteredCoffees.push(coffee);
        } else if(roastSelection.value === "all"){
            filteredCoffees.push(coffee);

        }



    });
    //this section will display/render our coffees in our html
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light' },
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    // {id: 10, name: 'European', roast: 'dark'},
    // {id: 11, name: 'Espresso', roast: 'dark'},
    // {id: 12, name: 'Viennese', roast: 'dark'},
    // {id: 13, name: 'Italian', roast: 'dark'},
    // {id: 14, name: 'French', roast: 'dark'},
];

// let coffeeNames= document.querySelector("#name");

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);





let searchBox = document.getElementById('coffee-name');
searchBox.addEventListener("keyup", function(){

    let input = searchBox.value.toUpperCase();
    let filteredCoffees = [];


         for( let i = 0; i < coffees.length; i++){
             if (coffees[i].name.toUpperCase().includes(input)){
                 filteredCoffees.push(coffees[i])
             }
    }
    console.log(filteredCoffees);
    tbody.innerHTML = renderCoffees(filteredCoffees)

})



