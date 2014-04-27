"use strict";
window.Enemy = (function(){
	
	function Enemy(cWidth,cHeight){
		
		//ivars
		this.active = false;
		this.deletionCode = ["delete();", "delete(virus);", "health++;"];
		
		this.canvasWidth = cWidth;
		this.canvasHeight = cHeight-100;
		
		this.color = "#000";
		this.type = Math.floor( Math.random() * 3 );
		// 0 = green enemy
		// 1 = blue enemy
		// 2 = pink health
		
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
		return this.y <= this.canvasHeight-100;
	};
	
	Enemy.prototype.draw = function(ctx) {
		var halfW = this.width/2;
		var halfH = this.height/2;
		// use this if your image file has just 1 sprite
		// ctx.drawImage(images["enemyImage"],this.x - halfW, this.y -halfH, this.width, this.height);
		
		if (this.type == 0) {
			ctx.fillStyle = "#00FF00";
		}
		if (this.type == 1) {
			ctx.fillStyle = "#0000FF";
		}	
		if (this.type == 2) {
			ctx.fillStyle = "#FF99CC";
		}
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
		//console.log(this.inBounds());
		this.active = this.active && this.inBounds();
		this.y += .3;

		//console.log("this is updating");



	};
	
	Enemy.prototype.explode = function() {
		this.active = false;
		console.log("i died!");
	};
	
	Enemy.prototype.deletedCode = function(code){
		if (this.type == 0) {
			return this.deletionCode[0] == code;	
		}
		if (this.type == 1) {
			return this.deletionCode[0] == code;	
		}
		if (this.type == 2) {
			return this.deletionCode[0] == code;	
		}
		return this.deletionCode == code;
	}
	
	return Enemy;

})(); 
