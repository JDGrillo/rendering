
function renderStudents(students) {
    let finalHTML = "";
    let studentsHTML = students.map(function (student){
        if (student.isPresent == true) {
            studentHTML = `
                <div class="text-center mt-5" style="background-color:green;width:25%">
                ${student.name} </br>
                Present
                </div>
            `
        }
        else {
            studentHTML = `
            <div class="text-center mt-5" style="background-color:orange;width:25%">
            ${student.name} </br>
            Absent
            </div>
            `
        }

        return studentHTML;
    });
    finalHTML += studentsHTML.join("")

    return finalHTML
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}