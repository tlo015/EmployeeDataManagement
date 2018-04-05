var name, role, date, rate, monthsWorked, billed;

$("#submit").on("click", function () {
    name = $("#name_box").val().trim();
    role = $("#role_box").val().trim();
    date = $("#date_box").val().trim();
    rate = $("#rate_box").val().trim();
    var newRow = $("<tr>");
    newRow.append("<td>" + name + "</td>").append("<td>" + role + "</td>")
        .append("<td>" + date + "</td>").append("<td>" + "months worked" + "</td>").append("<td>"+rate+"</td>").
        append("<td>"+"billed"+"</td>").
}