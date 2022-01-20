function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_clr = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_clr);
}

function takeSnapshot(){
    save('intro-to-p5-js.png');
}
