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

makeBlinkyDancer.prototype.lineUp = function(horizontal) {
  this.top = $('body').height() * 0.5;
  this.left = $('body').width() * 0.5 + horizontal;
  this.setPosition(this.top, this.left);
};

makePopDancer.prototype.setNode = function() { ///////
  this.$node = $('<img class="dancer" src="https://tcrf.net/images/e/e0/Sbsp_Idea.gif">');
};

makePopDancer.prototype.setColor = function() { //////
  var styleSettings = {
    border: '0px'
  };
  this.$node.css(styleSettings); //////
};