
'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_HEIGHT = 40;
var BAR_WIDTH = 40;
var HISTOGRAM_HEIGHT = 150;



var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
    );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
    );


  ctx.fillStyle = '#000'
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT + FONT_GAP);

  let maxTime = getMaxElement(times);


  for (let i=0; i < names.length; i++){
    ctx.fillStyle = `black`;

    ctx.fillText (
      names[i],
      i*CLOUD_X + CLOUD_X + BAR_WIDTH,
      CLOUD_HEIGHT
    );

    ctx.fillText(
      Math.ceil(times[i]),
      i*CLOUD_X + CLOUD_X + BAR_WIDTH,
      CLOUD_HEIGHT- FONT_GAP - GAP - (HISTOGRAM_HEIGHT * times[i]) / maxTime);

    if (names[i] === 'Вы'){
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }else{
        ctx.fillStyle = 'hsl(211, 100%, '+ Math.random()*100+'%)';
      }

    ctx.fillRect(
      i*CLOUD_X + CLOUD_X + BAR_WIDTH,
      CLOUD_HEIGHT - FONT_GAP - ((HISTOGRAM_HEIGHT * times[i]) / maxTime),
      BAR_WIDTH,
      (HISTOGRAM_HEIGHT * times[i]) / maxTime);



  }
};
