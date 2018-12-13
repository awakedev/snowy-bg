
window.onload = function(){
	let canvas = document.getElementById('sky');
	let ctx = canvas.getContext('2d');

	let W = window.innerWidth;
	let H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;


	let mf = 100; //max flakes
	let flakes = [];

	for (let i = 0; i < mf; i++) {
		flakes.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*5+2,//min of 2px and max of 7px
			d: Math.random() + 1 //density of the flake
		})
	}
	//draw flakes onto canvas
	function drawFlakes(){
		ctx.clearRect(0, 0, W, H); //that's going to get rid of anything on the canvas
		ctx.fillStyle = 'white';
		ctx.beginPath(); // tell to JS i'm draw a shape or a path 
		for(let i = 0; i < mf; i++){
			let f = flakes[i];
			ctx.moveTo(f.x, f.y); //move to random place in the screen 
			ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true); //make Circle shape
		}
		ctx.fill();
		moveFlakes();
	}

	//animate the flakes

	let angle = 0;

	function moveFlakes() {
		angle += 0.01;
		for(let i = 0; i < mf; i++){
			let f = flakes[i];

			f.y += Math.pow(f.d, 2) + 1;
			// f.x += Math.sin(angle) * 2;
//if the flakes reaches the bottom, send a new on to the top
			if(f.y > H){
				flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d };
			}
		}
	}
	setInterval(drawFlakes, 25);
}
