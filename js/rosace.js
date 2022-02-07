 
 
 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 init();
});

var x = 0;
var y = 0;
var tour = 0;
ctx.translate(innerWidth / 2, innerHeight / 2);
// function init(){
//     requestAnimationFrame(init);
//     ctx.beginPath();
//     ctx.strokeStyle = '#EDF5E1';
//     ctx.arc(x,y,100, 0, 2*Math.PI);
//     ctx.stroke();
//     ctx.rotate(30*Math.PI/ 180);
//     tour = tour + 30;

//     if(tour > 10000){
//         return;
//     }
//     if(tour % 360 === 0){
//         x += 10;
//         y += 10;
//     }
// }
// init();



 function dessin(){
     
    requestAnimationFrame(dessin);
     ctx.beginPath();
     ctx.strokeStyle = '#EDF5E1';
     ctx.arc(x,y,1000, 0, 2*Math.PI);
     ctx.stroke();
     ctx.rotate(60*Math.PI/ 180);
     tour = tour + 60;

     if(tour > 10000){
         return;
     }
     if(tour % 360 === 0){
         x += 1;
        y += 50;
    }
}
// // document.body.style.background = 'url(' + canvas.toDataURL() + ')
 dessin();




