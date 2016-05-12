'use strict';

$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    // $('#temperature').attr('class', thermostat.energyUsage());
  }

  $("h1").attr("style", "color: " + thermostat.currentColor() + ";");

  updateTemperature();

  $("#temperature-up").click(function () {
    thermostat.up()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
  });

  $("#temperature-down").click(function () {
    thermostat.down()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
  });

  $("#temperature-reset").click(function () {
    thermostat.resetTemp()
    updateTemperature();
    $("h1").attr("style", "color: " + thermostat.currentColor() + ";");
  });

  $("#powersaving-on").click(function () {
    thermostat.powerSaveOn()
    $('#power-saving-status').text("On");
  });

  $("#powersaving-off").click(function () {
    thermostat.powerSaveOff()
    $('#power-saving-status').text("Off");
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a5c4a740b3e27e96c42f731fb1f35a5b&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var customCity = $('#custom-city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + customCity;
    var token = '&appid=a5c4a740b3e27e96c42f731fb1f35a5b';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })

});
