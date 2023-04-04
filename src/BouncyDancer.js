var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;


makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.top = $('body').height() * Math.random();
  this.left = $('body').width() * Math.random();
  console.log('boucy');
  this.setPosition(this.top, this.left);

};