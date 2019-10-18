
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    let finalHTML = "";
    let circlesHTML = circles.map(function (circle){
        let circleHTML = `
            <div class="text-center mt-5" style="text-align:center;background-color:${circle.color};height:${circle.radius / 2}px;width:${circle.radius / 2}px;border-radius:50%">
            </div>
        `
        return circleHTML
    });
    finalHTML += circlesHTML.join("");

    return finalHTML;
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}