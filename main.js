// this example takes 2 seconds to run
const start = Date.now();
let isRunning = false;

console.log('starting timer...');
// expected output: starting timer...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis/1000)}`);
  // expected output : seconds elapsed = 2
}, 2000);

function setTime(startTime) {
  let startMin = startTime.getMinutes();
  let startSec = startTime.getSeconds();
  let startMillisec = startTime.getMilliseconds();
  let now = new Date();
  // console.log('startTime', startTime);
  // console.log('now', now);
  // now -= startTime;
  let ellapsedMin = now.getMinutes() - startMin;
  let ellapsedSec = now.getSeconds() - startSec; // TODO: 開始の秒より現在の秒が小さくなるとマイナスになる。毎回 new Dateをするのではなくて、10ミリ秒ごとにカウントアップして、繰り上がりするほうがいいかも
  let ellapsedMillisec = now.getMilliseconds() - startMillisec; // TODO: 同上

	//出力用
	let s = ellapsedMin + ":" + ellapsedSec + ":" + Math.floor(ellapsedMillisec/10);
	return s;
}

function updateTimer(timer, startTime) {
  setTimeout(function() {
    if (isRunning === true) {
      return;
    }
    timer.innerHTML = setTime(startTime);
    updateTimer(timer, startTime);
  }, 10);
}
function stopTimer(timer) {
  // clearTimeout(updateTimer(timer));
  isRunning = true;
}

function startTimer(timer) {
  const startTime = new Date();
  updateTimer(timer, startTime);
}

const timer = document.getElementById('timer');
// timer.innerHTML = setTime();
// updateTimer(timer);
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

