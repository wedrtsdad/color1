function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(600 , 450);
  video = createCapture(VIDEO);
  video.hide();
  classifer= ml5.imageClassifier('MobileNet',modelloaded);
}

function modelloaded() {
  console.log('model loaded');
}

function draw(){
  image(video,0,0,);
  classifer.classify(video,gotresult);
}

pr='';

function gotresult(error , result) {
  console.log(result);
  if((result[0].confidence > 0.3) && (pr != result[0].label[0])){
    console.log(result);
    pr=result[0].label;
    var synth=window.speechSynthesis;
    to_speak='Oject is'+result[0].label;
     speak1= new SpeechSynthesisUtterance(to_speak);
     synth.speak(speak1);
    document.getElementById("object1").innerHTML=result[0].label;
    document.getElementById("accuracy1").innerHTML=result[0].confidence.toFixed(3);
  }
}