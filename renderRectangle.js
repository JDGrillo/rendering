
function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5">
            <div style="background-color:${rectangle.color};width:${rectangle.width}px;height:${rectangle.height}px">
            </div>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}