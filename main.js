noseX=0;
noseY=0;

function preload()
{
clown_n = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup()
{
 canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 pose = ml5.poseNet(video , modelLoaded);
 pose.on( 'pose' , gotPoses);
}

function draw()
{
 image(video,0,0,300,300);
 fill(255,0,0);
 stroke(255,0,0);
 circle(noseX,noseY,20);
 image(clown_n,noseX,noseY,20,20);
}

function modelLoaded()
{
    console.log("pose net is ready");
}

function gotPoses(results)
{
  if (results.length > 0) {
      console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log(noseX);
      console.log(noseY);
  }
}

function takeSnapshot()
{
    save("clone_nose_animation.tiff");
}