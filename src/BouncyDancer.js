var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;


makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.top = $('body').height() * Math.random();
  this.left = $('body').width() * Math.random();
  this.setPosition(this.top, this.left);

};

makeBouncyDancer.prototype.lineUp = function(counters) {
  if (counters.bBcounter === undefined) {
    counters.bBcounter = 0;
  }
  this.top = $('body').height() * 0.8;
  this.left = $('body').width() * 0.5 + counters.bBcounter;
  this.setPosition(this.top, this.left);
  counters.bBcounter += 10;
};


makeBouncyDancer.prototype.setNode = function() { ///////
  this.$node = $('<img class="dancer" src="https://raw.githubusercontent.com/kevinwuhoo/slackmojis/main/emojis/Blob%20Cats/fast_meow_party.gif">');
};

makeBouncyDancer.prototype.setColor = function() { //////
  var styleSettings = {
    border: '0px'
  };
  this.$node.css(styleSettings); //////
};
