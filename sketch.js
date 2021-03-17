var database;
var firstName, lastName, age, phoneNumber, address;
var state = "login";
var login, signin, dashboard, bsa, ctablets, data,error;
var username, correctUsername, correctPassword, password;

var names, number, address, mail, age;
var mp, meth;
var dayIndex = 1;
var bg1, bg2,bg3,bg4,bg5;

var gameState = 0;

var wbc, hmg, pl;

function preload(){
  bg1 = loadImage("images/login.png");
  bg2 = loadImage("images/dashboard.png");
  bg3 = loadImage("images/Labs.png");
  bg4 = loadImage("images/bsa.png");
  bg5 = loadImage("images/tablets.png");
}
function setup() {
  database = firebase.database();
  login = new Login();
  signin = new Signin();
  data = new Database();
  dashboard = new Dashboard();
  error = new Error();
  bsa = new BSA();
  labs = new Labs();
  tablets = new Tablets();
  createCanvas(windowWidth,windowHeight);
  console.log(width,height);

}

function draw() {

  let h = hour();
  let m = minute();
  let s = second();
  //let mi = millis();
  //console.log(h);
  //console.log(correctUsername);


  if(h === 0&&m === 0&&s === 0&&gameState === 0){
    dayIndex = dayIndex+1;
    labs.wbc1.show();
    labs.wbc1.html("Enter WBC count:");
    labs.wbc1.position(width/6, height*6/8);
    labs.wbc.show();
    labs.wbc.position(width/6, height*8/10);

    labs.hmg.show();
    labs.hmg.html("Enter Haemoglobin Count:");
    labs.hmg.position(width/2, height*6/8);
    labs.hmg1.show();
    labs.hmg1.position(width/2, height*8/10);

    labs.platelet.show();
    labs.platelet.html("Enter platelet Count: ");
    labs.platelet.position(width*5/6,height*6/8);
    labs.platelet1.show();
    labs.platelet1.position(width*5/6, height*8/10);
    gameState = 1;
    tState = 0;
  }


  //console.log(dayIndex);
  //console.log(correctUsername);
  if(state==="login"){
    background(bg1);
    login.display();
    signin.hide();
  }
  else{
    login.hide();
  }

  if(state==="signin"){
    background(bg1);
    signin.display();
  }
  else{
    signin.hide();
  }

  if(state === "dashboard"){
    background(bg2);
    dashboard.display();
  }
  else{
    dashboard.hide();
  }

  if(state === "error"){
    background(bg1);
    error.display();
  }
  else{
    error.hide();
  }

  if(state === "BSA"){
    background(bg4);
    bsa.display();    
  }
  else{
    bsa.hide();
  }

  if(state === "counts"){
    background(bg3);
    labs.display();
  }
  else{
    labs.hide();
  }
  if(state === "tablets"){
    background(bg5);
    tablets.display();
  }
  else{
    tablets.hide();
  }

  text("x:" +mouseX,mouseX,mouseY);
  text("y:" +mouseY,mouseX+30,mouseY);  
  drawSprites();
}

