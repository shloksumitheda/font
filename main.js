difference = 0;
rightWristX = 0;
leftWristX = 0;
var wordput="";


function setup() 
{
video = createCapture(VIDEO);
video.size(550, 500);
video.position(50, 200);

canvas = createCanvas(550, 550);
canvas.position(560,200);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
    
}


function modelLoaded() 
{
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}



function draw() 
{
wordput=document.getElementById("textinput").value;
background('#969A97');
text(wordput, 150, 250);
textSize(difference);
fill('#F90093');
}
