var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(400, 640, Phaser.AUTO, "content", { preload: this.preload, create: this.create });
    }
    Game.prototype.preload = function () {
        var imgPath = "assets/img/";
        var audioPath = "assets/audio/";
        this.game.load.image("logo", imgPath + "logo.png");
        this.game.load.image("load", imgPath + "loading.png");
        this.game.load.image("title", imgPath + "title.png");
        this.game.load.image("home", imgPath + "home.png");
        this.game.load.image("ship", imgPath + "ship.png");
        this.game.load.image("bullet", imgPath + "rocket.png");
        this.game.load.spritesheet("asteroid", imgPath + "asteroid.png", 150, 150, 4);
        this.game.load.spritesheet("asteroidBig", imgPath + "asteroidBig.png", 289, 289, 3);
        this.game.load.spritesheet("explosion", imgPath + "explosion.png", 40, 40, 5);
        this.game.load.spritesheet("powerups", imgPath + "powerups.png", 144, 144, 3);
        this.game.load.image("shield", imgPath + "shield.png");
        this.game.load.image("space", imgPath + "space.png");
        this.game.load.image("dead", imgPath + "dead.png");
        this.game.load.image("restart", imgPath + "restart.png");
        this.game.load.image("fb", imgPath + "fb.png");
        this.game.load.image("twitter", imgPath + "twitter.png");
        this.game.load.audio("menuMusic", audioPath + "startMusic.mp3");
        this.game.load.audio("gameMusic", audioPath + "gameMusic.mp3");
        this.game.load.audio("fire", audioPath + "fire.mp3");
        this.game.load.audio("death", audioPath + "playerDeath.mp3");
        this.game.load.audio("hit", audioPath + "hit.mp3");
        this.game.load.audio("explode", audioPath + "explode.mp3");
        this.game.load.audio("powerup", audioPath + "powerup.mp3");
        this.game.load.audio("shieldActivate", audioPath + "shieldActivate.mp3");
        this.game.load.audio("deflect", audioPath + "deflect.mp3");
        this.game.load.audio("endMusic", audioPath + "endScreen.mp3");
    };
    Game.prototype.create = function () {
        // Set up the Main Menu display objects
        var background = this.game.add.sprite(0, 0, "home");
        var title = this.game.add.sprite(200, 100, "title");
    };
    return Game;
}());
window.onload = function () {
    var game = new Game();
};
//# sourceMappingURL=app.js.map