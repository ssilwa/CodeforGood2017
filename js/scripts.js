var testData = [
    {
        name : "Nate Joe",
        email : "joe@gmail.com",
        phone : "123-456-7890",
        address: "12345 somewhere",
        task: " ",
        eventsSignedUp: "Fall, Winter, Summer",
        eventsAttended: "Fall, Winter, Summer",
        hasContacted: "Y",
        hasTransportation: "N",
        hasIDD: "Y",
        notes: " "
    },
    {
        name : "Jane Joe",
        email : "jane@gmail.com",
        phone : "323-456-7890",
        address: "12345 tomewhere",
        task: " ",
        eventsSignedUp: "Winter, Summer",
        eventsAttended: "Fall, Winter, Summer",
        hasContacted: "Y",
        hasTransportation: "Y",
        hasIDD: "Y",
        notes: " "
    },
    {
        name : "Not John",
        email : "john@gmail.com",
        phone : "987-456-7890",
        address: "345 somewhere",
        task: " ",
        eventsSignedUp: "Summer",
        eventsAttended: "Fall, Summer",
        hasContacted: "Y",
        hasTransportation: "N",
        hasIDD: "N",
        notes: " "
    }
];

var col = [];
for (var i = 0; i<testData.length;i++){
    for(var key in testData[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

var table = document.createElement("table");
table.setAttribute("id","keywords");
var thead = document.createElement("thead");
var row = document.createElement("tr");
var selectbox = document.createElement("input");
selectbox.setAttribute("id","selected");
selectbox.setAttribute("type","checkbox");

row.appendChild(selectbox);

//Creating Header Row
for (var i = 0; i < col.length; i++){
    var th = document.createElement("th");
    var span = document.createElement("span");
    var cellText = document.createTextNode(col[i]);
    span.appendChild(cellText);
    th.appendChild(span);
    row.appendChild(th);
    
}
thead.appendChild(row);
table.appendChild(thead);

//Creating table body
var tbody = document.createElement("tbody");
for (var i = 0; i < testData.length; i++){
    var row = document.createElement("tr");
    var selectbox = document.createElement("input");
    selectbox.setAttribute("id","selected");
    selectbox.setAttribute("type","checkbox");
    row.appendChild(selectbox);
    for (var j = 0; j < col.length; j++) {
        var td = document.createElement("td");
        var cellText = document.createTextNode(testData[i][col[j]]);
        td.appendChild(cellText);
        row.appendChild(td);
    }
    tbody.appendChild(row);
    table.appendChild(tbody);
}

var divContainer = document.getElementById("showTable");
divContainer.appendChild(table);


