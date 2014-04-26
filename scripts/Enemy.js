"use strict";
window.Enemy = (function(){
	
	function Enemy(cWidth,cHeight){
		
		//ivars
		this.active = true;
		this.age = Math.floor(Math.random() *128);
		
		this.canvasWidth = cWidth;
		this.canvasHeight = cHeight;
		
		this.color = "#A2B";
		
		this.x = this.canvasWidth / 4 + Math.random() * this.canvasWidth/2;
		this.y = 0;
		this.xVelocity = 0;
		this.yVelocity = 200;
		this.amplitude = getRandom(1.5,7.0);
		
		this.width = 34;
		this.height = 40;
	};
	
	//Enemy methods
	Enemy.prototype.inBounds = function() {
		return this.x >= 0 && this.x <= this.canvasWidth && 
			this.y >= 0 && this.y <= this.canvasHeight;
	};
	
	Enemy.prototype.draw = function(ctx) {
		var halfW = this.width/2;
		var halfH = this.height/2;
		// use this if your image file has just 1 sprite
		// ctx.drawImage(images["enemyImage"],this.x - halfW, this.y -halfH, this.width, this.height);
		ctx.fillStyle = "#000000";
		ctx.fillRect(this.x,this.y,10,10);

		//draw from sprite sheet
		/*ctx.drawImage(
			images["enemyImage"],	//source image
			52,98,17,20,
			this.x - halfW, this.y - halfH, this.width,this.height
		);*/
		
	};
	
	Enemy.prototype.update = function(dt) {
		/*this.xVelocity = this.amplitude * Math.sin(this.age * Math.PI * dt);
		this.x += this.xVelocity;
		this.y += this.yVelocity *dt;
		this.age ++;*/
		//this.active = this.active && this.inBounds();
		this.y += 1;
		//console.log("this is updating");



	};
	
	Enemy.prototype.explode = function() {
		this.active = false;
		//console.log("is this workin?");
	};
	
	return Enemy;

})(); 