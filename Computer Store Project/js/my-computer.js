var user = JSON.parse(localStorage.getItem('active-user'));

if (user != null) {
    document.getElementById('username').innerText = user.username;
} else {
    window.location.href = 'index.html';
}


var comps = [];
var selectedComps = [];
var compsString = localStorage.getItem('computers');

if (compsString != null) {
    comps = JSON.parse(compsString);

    for (let i = 0; i < comps.length; i++) {
        console.log(user.id);
        if (comps[i].user_id === user.id) {
            selectedComps.push(comps[i]);
        }
    }
    if (selectedComps.length >= 1) {
        document.getElementById('empty-table-row').style.display = 'none';    
    }
    fillTable();
}

function deleteComp(id) {
    comps = comps.filter(c => c.id != id);
    localStorage.setItem("computers", comps);
    location.replace("./my-computers.html");
}

function fillTable() {
    var table = "";
    for (var i in selectedComps) {
        table += "<tr>";
        table += '<td>'
            + selectedComps[i].id + '</td>'
            + '<td>' + selectedComps[i].name + '</td>'
            + '<td>'
            + '<img width="90px" src="' + selectedComps[i].image + '" alt="">'
            + '</td>'
            + '<td>' + selectedComps[i].price + '</td>'
            + "<td>"
            + '<button class="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#myModal" onclick="changeComp()">'
            + '<i class="fa fa-pencil text-light" aria-hidden="true"></i>'
            + '</button>'
            + '<button class="btn btn-danger mx-2" onclick="deleteComp(' + selectedComps[i].id + ')">'
            + '<i class="fa fa-trash" aria-hidden="true"></i>'
            + '</button>'
            + '</td>';
        table += "</tr>";
    }
    document.getElementById("table-data").innerHTML = table;
}

function logout() {
    localStorage.removeItem("active-user");
    location.replace("./login.html");
}

