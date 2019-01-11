var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');

//Draw Canvas Fill mode

window.addEventListener("click", CirC);

function addB(){}

var rad = 50
function CirC(evt){

  this.x = evt.clientX;
  this.y = evt.clientY;

  function draw(){
    var balls = [];

    balls.push(1);

    //var x = evt.clientX;
    //var y = evt.clientY;

    context.beginPath();
    context.fillStyle = 'red';
    context.arc(this.x, this.y, rad, 0, 2 * Math.PI);
    context.stroke();
  }

  function update(){



    draw()
  }

  draw()

}

var ball = new CirC();



function animate(){
  requestAnimationFrame(animate);
  
}

animate();
