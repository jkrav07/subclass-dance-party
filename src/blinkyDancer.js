var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


makeBlinkyDancer.prototype.lineUp = function(horizontal) {
  this.top = $('body').height() * 0.5;
  this.left = $('body').width() * 0.5 + horizontal;
  this.setPosition(this.top, this.left);
};

makeBlinkyDancer.prototype.setColor = function() { //////
  var styleSettings = {
    border: '10px solid green'
  };
  this.$node.css(styleSettings); //////
};

makeBlinkyDancer.prototype.setImage = function() {
  this.$node.css
}
