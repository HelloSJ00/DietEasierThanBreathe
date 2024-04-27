document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var gender = document.getElementById('gender').value;
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var age = parseFloat(document.getElementById('age').value);
  var activity = parseFloat(document.getElementById('activity').value);

  var bmr;
  if (gender === 'male') {
      bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  } else if (gender === 'female') {
      bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
  }

  var maintenanceCalories = bmr * activity;

  // 결과를 화면에 표시
  var resultDisplay = document.getElementById('resultDisplay');
  resultDisplay.innerHTML = '유지 칼로리: ' + maintenanceCalories.toFixed(2) + ' kcal';
});