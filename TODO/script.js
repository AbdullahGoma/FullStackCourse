let timerObj = {
  minutes: 0,
  seconds: 0,
  timerId: 0
}

function soundAlarm() {
  let amount = 5;
  let audio = new Audio("Timer_Sound_Effect.mp3");
  // audio.play();
  function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  for(let i = 0;i < amount;i++){
    setTimeout(playSound, 1200 * i);
  }
}


function updateValue(key, value) {
  if(value < 0) {
    value = 0;
    console.log("Positive Numbers Only");
  }

  if(key == "seconds") {
    //here :D
    if(value < 10) {
      value = "0" + value;
    }

    if(value > 59) {
      value = 59;
    }
  }

  $("#" + key).html(value || 0);
  timerObj[key] = value;
  //console.log(timerObj[key]);
  // console.log("Min",timerObj.minutes);
  // console.log("Sec",timerObj.seconds);
}

(function detectChanges(key) {
  let input = "#" + key + "-input";

  $(input).change(function() {
    updateValue(key, $(input).val());
  });

  $(input).keyup(function() {
    updateValue(key, $(input).val());
  });
  return arguments.callee;
})("minutes")("seconds");


function startTimer() {
  buttonManager(["start",false],["pause",true],["stop",true]);
  freezeInputs();
  timerObj.timerId = setInterval(function() {
    timerObj.seconds--;
    if(timerObj.seconds < 0){
      if(timerObj.minutes == 0){
        soundAlarm();
        return stopTimer();
      }
      timerObj.seconds = 59;
      timerObj.minutes--;
    }

    updateValue("minutes",timerObj.minutes);
    updateValue("seconds",timerObj.seconds);
  },1000)
}

function stopTimer() {
  clearInterval(timerObj.timerId);
  buttonManager(["start",true],["pause",false],["stop",false]);
  unfreezeInputs();
  updateValue("minutes",$("#minutes-input").val());
  updateValue("seconds",$("#seconds-input").val());
}

function pauseTimer() {
  buttonManager(["start",true],["pause",false],["stop",true]);
  clearInterval(timerObj.timerId);
}

function buttonManager(...buttonsArray) {
  for(let i = 0;i < buttonsArray.length;i++){
    let button = "#" + buttonsArray[i][0] + "-button";
    if(buttonsArray[i][1]){
      $(button).removeAttr("disabled");
    }else{
      $(button).attr("disabled","disabled");
    }

  }
}



function freezeInputs() {
  $("#minutes-input").attr("disabled","disabled");
  $("#seconds-input").attr("disabled","disabled");
}

function unfreezeInputs() {
  $("#minutes-input").removeAttr("disabled");
  $("#seconds-input").removeAttr("disabled");
}



// ... is called rest operator
// function buttonManager(num1, num2, ...nums) {
//   console.log(nums);
//   let sum = 0;
//   for(let i = 0;i < nums.length;i++){
//     sum += nums[i];
//   }
//   console.log(sum);
//   return sum;
// }
// buttonManager(12,234,234,223321,123);
