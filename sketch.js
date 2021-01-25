var animal=200
var plant=200
var human=200
var pollution=200

var h,a,p,Pll
function preload(){

}
function setup(){
  createCanvas(800,600)
  h=createSprite(150,500-human,30,10)
  h.shapeColor="orange"
  Pll=createSprite(250,500-pollution,30,10)
  Pll.shapeColor="red"
  a=createSprite(350,500-animal,30,10)
  a.shapeColor="yellow"
  p=createSprite(450,500-plant,30,10)
  p.shapeColor="green"
  x=createSprite(-100,-100,1,1)
  x.lifetime=1000
  g=createSprite(400,500+100,800,200)
}
function draw(){
  textSize(17)
  fill("blue")
  background("lightblue")
  fill("purple")
  if(x.lifetime>800&&x.lifetime<900){
    text("Click space to reset graph for correct measures",150,200)
  }
  fill("red")
  if(x.lifetime>600&&x.lifetime<700){
    text("Move cursor over the top of the each graph",150,220)
    text( "and drag to move up and down",150,240)
  }
  fill("violet")
  if(x.lifetime>400&&x.lifetime<500){
    text("Move one bar at a time for checking conditions",150,260)
  }
  fill("darkblue")
  if(x.lifetime>200&&x.lifetime<300){
    text("It can be observed that values differ when ",150,260)
 text("different quantities increase",150,280)
  }
 fill("blue")
 

 
 strokeWeight(3)
 
 fill("red")
 text("High",50,150)
 fill("green")
 text("Moderate",20,300)
 fill("yellow")
 text("Low",50,450)
 fill("orange")
 text("Humans",130,530)
 fill("red")
 text("Pollution",230,530)
 fill("yellow")
 text("Animals",330,530)
 fill("green")
 text("Plants",430,530)
g.visible=false
if(h.y>500){
  h.y=500
}
if(Pll.y>500){
  Pll.y=500
}
if(a.y>500){
  a.y=500
}
if(p.y>500){
  p.y=500
}
 strokeWeight(7)
 stroke("orange")
 line(150,500,h.x,h.y)

 stroke("red")
 line(250,500,Pll.x,Pll.y)

 stroke("yellow")
 line(350,500,a.x,a.y)

 stroke("green")
 line(450,500,p.x,p.y)
h.debug=true
Pll.debug=true
a.debug=true
p.debug=true

h.setCollider("circle",0,0,30)
Pll.setCollider("circle",0,0,30)
a.setCollider("circle",0,0,30)
p.setCollider("circle",0,0,30)

if(mousePressedOver(h)){
  h.y=mouseY
}
if(mousePressedOver(Pll)){
  Pll.y=mouseY
}
if(mousePressedOver(a)){
  a.y=mouseY
}
if(mousePressedOver(p)){
  p.y=mouseY
}

if(h.y-300>0&&mousePressedOver(h)){
  Pll.y=((h.y-300)*1.2+300)
  a.y=300-(h.y-300)*(0.25)
  p.y=300-(h.y-300)*(0.4)
}else if(300-h.y>0&&mousePressedOver(h))
{
  Pll.y=(300-(300-h.y)*2.4)
  a.y=(300-h.y)*(0.25)+300
  p.y=(300-h.y)*(0.4)+300
}


if(Pll.y-300>0&&mousePressedOver(Pll)){
  h.y=((Pll.y-300)*0.1)+300
  a.y=300-(Pll.y-300)*(0.25)
  p.y=300-(Pll.y-300)*(0.4)
}else if(300-Pll.y>0&&mousePressedOver(Pll))
{
  if(Pll.y<130){
    h.y=((130-Pll.y)*1.7)+235
  }else{
    
    h.y=(300-(300-Pll.y)*0.4)
  }
  
  a.y=(300-Pll.y)*(1.1)+300
  p.y=(300-Pll.y)*(0.6)+300
}
console.log(h.y,Pll.y,a.y,p.y)

if(p.y-300>0&&mousePressedOver(p)){
  h.y=(p.y-300)*1+300
  a.y=(p.y-300)*(1.3)+300
  Pll.y=300-(p.y-300)*(1.4)
}else if(300-p.y>0&&mousePressedOver(p))
{
  Pll.y=((300-p.y)*0.3)+300
  a.y=300-(300-p.y)*(0.6)
  h.y=300-(300-p.y)*(0.05)
}


if(a.y-300>0&&mousePressedOver(a)){
  h.y=(300-(Pll.y-300)*0.1)
  Pll.y=300-(a.y-300)*(0.1)
 // if(a.y>350){
    p.y=(a.y-300)*(0.3)+300
 // }else{
  //  p.y=300-(a.y-300)*(0.9)
  //}
  
}else if(300-a.y>0&&mousePressedOver(a))
{
  
  //h.y=(300-a.y)*(0.25)+300
  //
    p.y=(300-a.y)*(0.5)+300
    h.y=(300-a.y)*(0.8)+300
    Pll.y=300-((300-a.y)*1.5)
 // }
 // p.y=(300-a.y)*(0.4)+300
}

reset()
h.collide(g)
Pll.collide(g)
a.collide(g)
p.collide(g)
 stroke("black")
 line(100,50,100,500)
 line(100,500,700,500)
 drawSprites()


}

function reset(){
  if(keyDown("space")){
    a.y=300
    Pll.y=300
    h.y=300
    p.y=300
  }
}