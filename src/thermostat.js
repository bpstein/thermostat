function Thermostat() {
  this.temp = 20;
  this.minimum = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temp;
};

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSavingMode = true;
  this.temp = 25;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.up = function() {
  if (this.powerSavingModeOff && this.temp === 32) {
    throw new Error("Maximum temp is 32 degrees");
   } else if (this.powerSavingMode && this.temp === 25) {
      throw new Error("Maximum temp is 25 degrees");
  } else {
    this.temp ++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temp === this.minimum) {
    throw new Error("Minimum temp is 10 degrees");
  } else {
    this.temp --;
  }
};

Thermostat.prototype.reset = function(){
  return this.temp = 20;
};

Thermostat.prototype.monitor = function(){
  if (this.temp < 18) {
    return "green";
  } else if (this.temp >= 25) {
    return "red";
  } else {
    return "yellow";
  }
};