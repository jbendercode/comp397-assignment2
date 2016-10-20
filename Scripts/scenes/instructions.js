var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // GameObject
        function Instructions() {
            _super.call(this);
            this.start();
        }
        Instructions.prototype.start = function () {
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this._bg.regX = 0;
            this.addChild(this._bg);
            this._bg2 = new createjs.Bitmap(assets.getResult("BG"));
            this._bg2.regX = 0;
            this._bg2.x = 1590;
            this.addChild(this._bg2);
            // Add blur filter
            this._blurFilter = new createjs.BlurFilter(5, 5, 4);
            this._bg.filters = [this._blurFilter];
            this._bounds = this._bg.getBounds();
            this._bg.cache(this._bounds.x, this._bounds.y, this._bounds.width, this._bounds.height);
            this._bg2.filters = [this._blurFilter];
            this._bounds = this._bg2.getBounds();
            this._bg2.cache(this._bounds.x, this._bounds.y, this._bounds.width, this._bounds.height);
            // Add menu label
            this._menuLabel = new objects.Label("How to Play", "76px Impact", "#487FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 250);
            this.addChild(this._menuLabel);
            // Add instruction board
            this._instructionBoard = new createjs.Bitmap(assets.getResult("Board"));
            this._instructionBoard.x = config.Screen.CENTER_X;
            this._instructionBoard.y = config.Screen.CENTER_Y;
            this._instructionBoard.regX = this._instructionBoard.getBounds().width / 2;
            this._instructionBoard.regY = this._instructionBoard.getBounds().height / 2;
            this.addChild(this._instructionBoard);
            // Create Instruction Text
            this._instructionString = "Run as far as you can and avoid the steam vents. \nYou score more points the longer that you survive. \nHold the 'SPACEBAR' key to run on the bottom of the pipe. \n\nGood luck!";
            this._instructions = new createjs.Text(this._instructionString, "20px Consolas", "#FFF");
            this._instructions.lineWidth = 320;
            this._instructions.lineHeight = 24;
            this._instructions.x = config.Screen.CENTER_X - 170;
            this._instructions.y = config.Screen.CENTER_Y - 80;
            this.addChild(this._instructions);
            // Add back button
            this._backBtn = new objects.Button("Back", config.Screen.CENTER_X - 320, config.Screen.CENTER_Y + 240);
            this._backBtn.scaleX = 0.3;
            this._backBtn.scaleY = 0.3;
            this._backBtn.cursor = "pointer";
            this.addChild(this._backBtn);
            this._backBtn.on("click", this._backBtnClick, this);
            stage.addChild(this);
        };
        Instructions.prototype.update = function () {
            // Scroll and recycle backgrounds
            this._bg.x -= 1;
            this._bg2.x -= 1;
            if (this._bg.x < -1590) {
                this._bg.x = 1590;
            }
            if (this._bg2.x < -1590) {
                this._bg2.x = 1590;
            }
        };
        Instructions.prototype._backBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map