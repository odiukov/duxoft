var GameLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		var size = cc.winSize;

		/////////////////////////////
		//my code
		var Monster = new cc.Sprite(res.Enemy);
		Monster.attr({
			x : 10,
			y : size.height / 2,
			scale : 0.5
		});
		this.addChild(Monster,0);
		
		var moveAction = cc.MoveTo.create(4, cc.p(size.width, size.height/2-10));
		Monster.runAction(moveAction);
		
		var Rabbit = new cc.Sprite(res.Rabbit);
		Rabbit.attr({
			x : size.width / 2,
			y : size.height / 2,
			scale : 0.20
		});
		this.addChild(Rabbit,0);
		
		var time = 1;
		
		var eventListener = cc.EventListener.create({
			event: cc.EventListener.MOUSE,

			onMouseDown: function(event){
				cc.log("Jump");
				var jumpAction = cc.JumpBy.create(time, cc.p(0,0),100,1);
				Rabbit.runAction(jumpAction);
				}
			
		});
		this.scheduleUpdate();

		cc.eventManager.addListener(eventListener, this);

		
		return true;
	},

	update: function(dt){
		cc.log("hello");
	}
});



GameLayer.scene = function () {
	var scene = new cc.Scene();
	var layer = new GameLayer();
	scene.addChild(layer, 1);
	return scene;
};