/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        private _bg : createjs.Bitmap;
        private _menuLabel : objects.Label;
            
        // Button 
        private _playBtn : objects.Button;
        private _howToPlayBtn : objects.Button;
        
        // Filter
        private _blurFilter : createjs.BlurFilter;
        private _bounds : createjs.Rectangle;
        
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
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
        }

        public update() : void {
            
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}