// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound// global constants


var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakeCount = 0;
var strikes = 3;

function startGame(){
    //initialize game variables
    progress = 0;
    mistakeCount = 0;
    strikes = 3;

    gamePlaying = true;
    // swap the Start and Stop buttons
    createPattern(8)
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("strike1").classList.add("hidden");
    document.getElementById("strike2").classList.add("hidden");
    document.getElementById("strike3").classList.add("hidden");

    playClueSequence()
}

function createPattern(length){
  //var patternLength = Math.floor((Math.random() * length) + 1)
  for(let i = 0; i< length; i++){
      var randomNum = Math.floor((Math.random() * 4)+1)
      pattern.push(randomNum)
  }
  console.log(pattern)
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;

  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime *= 0.8 //Optional feature 2
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  clueHoldTime = 1000; //how long to hold each clue's light/sound// global constants

  pattern = [];
  progress = 0; 
  gamePlaying = false;
  tonePlaying = false;
  volume = 0.5;  //must be between 0.0 and 1.0
  guessCounter = 0;
  mistakeCount = 0;
  strikes = 3;
}
function winGame(){
  stopGame();
  alert("Game Over. You Won.");
  clueHoldTime = 1000; //how long to hold each clue's light/sound// global constants

  pattern = [];
  progress = 0; 
  gamePlaying = false;
  tonePlaying = false;
  volume = 0.5;  //must be between 0.0 and 1.0
  guessCounter = 0;
  mistakeCount = 0;
  strikes = 3;
}

function guess(btn){
  console.log("user guessed: " + btn);
  // add game logic here

  if(!gamePlaying){
    return;
  }
  if(btn != pattern[guessCounter]){
    mistakeCount++;
    mistake(mistakeCount)
    if(mistakeCount == strikes){
        loseGame()
    }
  }
  else if(guessCounter != progress){
      guessCounter++;
  }else{
        progress++;

      if(progress == pattern.length){
        console.log("Won Game: " );

        winGame()
      }else{
        playClueSequence()
      }
  }
  
}
function mistake(strikeCount){
  if(strikeCount == 1){
    document.getElementById("strike1").classList.remove("hidden");
  }else if(strikeCount == 2){
    document.getElementById("strike2").classList.remove("hidden");
  }else if(strikeCount == 3){
    document.getElementById("strike3").classList.remove("hidden");
  }
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
