const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    text("Time : 8 PM", 100, 100);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    
    //change the data in JSON format and store it in variable responseJSON
    var responseJson = await response.json()
    
    //fetch datetime from responseJSON
    var time = responseJson.datetime
    
    // slice the datetime to extract hour
    var hour = time.slice(11, 13)
    
    if(hour>=4 && hour<16 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
