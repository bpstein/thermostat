'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('starts at powersavemode', function() {
    expect(thermostat.isOnPowerSaveMode()).toEqual(true);
  });

  it('powersavemode can be turned off', function() {
    thermostat.powerSaveOff()
    expect(thermostat.isOnPowerSaveMode()).toEqual(false);
  });

  it('you can reset the temperature to default temperature by hitting reset', function() {
    thermostat.up()
    thermostat.resetTemp()
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('powersavemode can be turned on after having been turned off', function() {
    thermostat.powerSaveOff()
    thermostat.powerSaveOn()
    expect(thermostat.isOnPowerSaveMode()).toEqual(true);
  });

  it('increases the temperature by one degree when you press up-buttom', function(){
    thermostat.up()
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('lowers the temperature by one degree when you press down-buttom', function(){
    thermostat.down()
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('pressing down-buttom does not lower the temperature further if at 10', function(){
    for(var i=0; i < 50; i++){
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('when power save mode is on, pressing the up-buttom does not increase the temperature beyond 25', function(){
    for(var i=0; i < 50; i++){
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it('displays the right color:yellow', function(){
    expect(thermostat.tempColor).toEqual("yellow");
  });

  it('displays the right color: green', function(){
    for(var i=0; i < 7; i++){
      thermostat.down();
    }
    expect(thermostat.tempColor).toEqual("green");
  });

  it('displays the right color: red', function(){
    thermostat.powerSaveOff();
    for(var i=0; i < 100; i++){
      thermostat.up();
    }
    expect(thermostat.tempColor).toEqual("red");
  });

});
