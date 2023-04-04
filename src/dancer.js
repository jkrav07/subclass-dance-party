// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.top = top;
  this.setNode();
  this.step();
  this.setPosition(top, left);
  this.setColor();


};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);

};

makeDancer.prototype.setColor = function() {

};

makeDancer.prototype.setNode = function() { //////
  this.$node = $('<span class="dancer"></span>');
};