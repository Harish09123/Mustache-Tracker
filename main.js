mustacheX = 0;
mustacheY = 0;
function preload(){
    mustache_nose = loadImage('https://i.postimg.cc/hP8CTfqM/download-1-removebg-preview-1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);

}
function modelloaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
            mustacheX = results[0].pose.nose.x -35;
            mustacheY = results[0].pose.nose.y;
            console.log(results);
            console.log("mustache x = " + mustacheX);
            console.log("mustache y = " + mustacheY);
    }
}

function draw(){
    
    image(video,0,0, 300, 300);
    image(mustache_nose, mustacheX, mustacheY, 70, 35);

}

function take_snapshot(){
    save('MyFilterImage.png');

}