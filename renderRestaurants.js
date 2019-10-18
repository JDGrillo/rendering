
function renderRestaurants(restaurants) {
    let finalHTML = ""
    let restaurantsHTML = restaurants.map(function (rest){
        restHTML = `
        <div class="text-center mt-5" style="background-color:lightgrey;width:25%;display:inline-block;margin:15px;border-radius:2%">
            <div style="font-size:25px;text-align:left">
                ${rest.name}
            </div>
            <div style="text-align:left">
                ${rest.type}
            </div>
            <div style="color:green;text-align:left">
                ${"$".repeat(rest.priceRating)}
            </div>
        </div>
        `
        return restHTML
    })

    finalHTML += restaurantsHTML.join("")

    return finalHTML
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}