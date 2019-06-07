let video;
let imgClf;
let name = 'Model needs to be trained';
let mobileNet;

let save;
let trainButton;
let enter;

let textBox;

let height  = 550;
let width  = 600;


function modelReady(){
  console.log("Model Ready");
}

function customModelReady(){
  console.log("Custom Model Ready");
  imgClf.classify(gotResults);
}

function videoReady(){
  console.log("Video Ready");
}

function whileTraining(loss){
  if(loss == null){
    console.log("Training Complete");
    imgClf.classify(gotResults);
  }
}

function gotResults(error, result){
  if(error){
    console.log(error);
  }
  else{
    name = result;
    imgClf.classify(gotResults);
  }
}

function getText() {
  return textBox.value();
}


function setup(){
  createCanvas(width, height).parent('sketch-holder');

  video = createCapture(VIDEO);
  video.hide();

  mobileNet = ml5.featureExtractor('MobileNet', video, modelReady);
  mobileNet.numClasses = 10;
  imgClf = mobileNet.classification(video, videoReady);

  save = createButton("Save");
  save.mousePressed(function(){
    imgClf.save();
  });

  load = createButton("Load");
  load.mousePressed(function(){
    imgClf.load('libraries/model.json', customModelReady);
  });

  trainButton = createButton("Train");
  trainButton.mousePressed(function(){
    imgClf.train(whileTraining);
  });

  textBox = createInput('');

  enter = createButton("Enter");
  enter.mousePressed(function(){
    for(let i = 1; i <= 50; i++){
      imgClf.addImage(getText());
    }
  });

}
function draw(){
  background(0);
  image(video, 0, 0);
  fill(250);
  textSize(32);
  text(name, 10, height - 20);
}
