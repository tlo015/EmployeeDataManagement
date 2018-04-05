
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAspjsaeXDVo0e6E_CF9TIHWw1qx4Vapm0",
    authDomain: "managementdatabase-bbdbc.firebaseapp.com",
    databaseURL: "https://managementdatabase-bbdbc.firebaseio.com",
    projectId: "managementdatabase-bbdbc",
    storageBucket: "managementdatabase-bbdbc.appspot.com",
    messagingSenderId: "560571230614"
};
firebase.initializeApp(config);



var name, role, date, rate, monthsWorked, billed,database=firebase.database();

$("#submit").on("click", function () {
    name = $("#name_box").val().trim();
    role = $("#role_box").val().trim();
    date = $("#date_box").val().trim();
    rate = $("#rate_box").val().trim();
    

    console.log(name,role,date,rate);
    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate

    });
    /*var newRow = $("<tr>");
    newRow.append("<td>" + name + "</td>").append("<td>" + role + "</td>")
        .append("<td>" + date + "</td>").append("<td>" + "months worked" + "</td>").append("<td>" + rate + "</td>").
        append("<td>" + "billed" + "</td>");
    $("tbody").append(newRow);*/
});



$("#clear_fields").on("click", function () {
    $("#name_box").val('');
    $("#role_box").val('');
    $("#date_box").val('');
    $("#rate_box").val('');
});
