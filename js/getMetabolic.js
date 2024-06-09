$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    var gender = $("#gender").val();
    var weight = parseFloat($("#weight").val());
    var height = parseFloat($("#height").val());
    var age = parseFloat($("#age").val());
    var activity = parseFloat($("#activity").val());

    var bmr;
    if (gender === "male") {
      bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else if (gender === "female") {
      bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }

    var maintenanceCalories = bmr * activity;

    // 결과를 화면에 표시
    $("#resultDisplay").html(
      "유지 칼로리: " + maintenanceCalories.toFixed(2) + " kcal"
    );
  });
});
