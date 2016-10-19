/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            // Add blur filter
            this._blurFilter = new createjs.BlurFilter(5, 5, 4);
            this._bg.filters = [this._blurFilter];
            this._bounds = this._bg.getBounds();
            this._bg.cache(this._bounds.x, this._bounds.y, this._bounds.width, this._bounds.height);
            // Add menu label
            this._menuLabel = new objects.Label("Pipe Runner", "76px Impact", "#487FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 200);
            this.addChild(this._menuLabel);
            // Add play button
            this._playBtn = new objects.Button("Play", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._playBtnClick = function (event) {
            scene = config.Scene.GAME;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map