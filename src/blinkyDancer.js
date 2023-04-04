var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


makeBlinkyDancer.prototype.lineUp = function(counters) {
  if (counters.bDcounter === undefined) {
    counters.bDcounter = 0;
  }
  this.top = $('body').height() * 0.5;
  this.left = $('body').width() * 0.5 + counters.bDcounter;
  this.setPosition(this.top, this.left);
  counters.bDcounter += 40;
};


makeBlinkyDancer.prototype.setNode = function() {
  this.$node = $('<img class="dancer" src="https://raw.githubusercontent.com/kevinwuhoo/slackmojis/main/emojis/Among%20Us/among-us-red-run.gif">');
};


makeBlinkyDancer.prototype.setColor = function() {
  var styleSettings = {
    border: '0px'
  };
  this.$node.css(styleSettings);
};


