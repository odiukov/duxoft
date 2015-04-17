/**
 * Created by andron94 on 13.03.15.
 */

var Monster = cc.Sprite.extend({
	moveAction: null,
	//eatAction: null,
	speed: 5,
	rotate_speed: 3.0,
	ctor: function() {
		this._super("#monster_eat2.png");
		//scale relative to aspect ratio
		var size = cc.director.getWinSize();
		this.scale = size.height / size.width;
		//anchor point
		this.setAnchorPoint(cc.p(0.5, 0));
	},
	onEnter: function() {
		this._super();
	},
	setMoveAction: function(move) {
		this.moveAction = move;
	},
	move: function() {
		this.runAction(this.moveAction);
	},
	eat: function() {
		this.runAction(Monster.eatAction);
	}
});

Monster.initActions = function() {
	//eat action
	var EAT_FRAME_COUNT = 4;
	Monster.eatAction = Helper.createAnimation(
		"monster_eat",
		EAT_FRAME_COUNT,
		0.1,
		"monster_eat2.png"
	);
};