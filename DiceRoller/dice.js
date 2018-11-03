function Dice() {
  this.value = 0;
  this.finalValue = 0;
  
  this.roll = function (numberD) {
    this.finalValue = Math.floor(Math.random() * numberD) + 1;
    console.log("rolled dice: " + this.finalValue);
    this.value = 0;
  }

  this.draw = function () {
    if (this.value != this.finalValue) {
      this.value = Math.floor(Math.random() * 20) + 1;
    }
    text(this.value, width / 2, height / 2);
  }

  this.animate = function (finalNum) {
    this.finalValue = finalNum;
    this.value = 0;
  }

}