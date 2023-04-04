var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;


makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  let $body = $('body');
  if (this.top < $body.height()) {
    this.top++;
  }
  this.setPosition(this.top, this.left);
};