
function renderNametags(nametags) {
    let finalHTML = "";
    let nametagsHTML = nametags.map(function (nametag){
        let nametagHTML = `
        <div class="text-center mt-5" style="background-color:orchid;width:25%;border:solid black 1px">
            Hello, my name is:
            <div style="background-color:white">
                ${nametag}
            </div>
        </div>
        `
        return nametagHTML
    })

    finalHTML += nametagsHTML.join("")

    return finalHTML
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}