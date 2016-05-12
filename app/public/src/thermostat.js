'use strict';

function Thermostat(){

  this._temperature = 20;
  this._min = 10;
  this.powerSaveMode = true;
  this.tempColor = "yellow";

}

Thermostat.prototype.currentColor = function (){
  return this.tempColor;
}

Thermostat.prototype.powerSaveOff = function (){
  this.powerSaveMode = false;
};

Thermostat.prototype.resetTemp = function (){
  this._temperature = 20;
  this.changeTempColor();
};

Thermostat.prototype.powerSaveOn = function (){
  this.powerSaveMode = true;
};

Thermostat.prototype.isOnPowerSaveMode = function () {
  return this.powerSaveMode;
};

Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function (){
  if (this.atMax()){
    return;
  };
  this._temperature = this._temperature + 1;
  this.changeTempColor();
};

Thermostat.prototype.down = function (){
  if (this.atMin()){
    return;
  };
  this._temperature = this._temperature - 1;
  this.changeTempColor();
};

Thermostat.prototype.atMin = function (){
  return this._temperature === this._min;
};

Thermostat.prototype.atMax = function (){
  if (this.isOnPowerSaveMode()){
    return this._temperature === 25;
  };
  return this._temperature === 32;
};

Thermostat.prototype.changeTempColor = function (){
  if (this._temperature < 18) {
    return  this.tempColor = "green";
  };
  if (this._temperature <= 25 && this._temperature >= 18) {
    return this.tempColor = "yellow";
  };
  return this.tempColor = "red";
};
