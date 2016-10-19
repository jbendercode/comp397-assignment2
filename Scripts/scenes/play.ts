module scenes {
    export class Play extends objects.Scene {

        // Private instance variables
        private _score : number;
        // Label or bitmap
        private _bg : createjs.Bitmap;
        private _scoreLabel : objects.Label;
            
        // Button 
        
        // Filter
        
        // GameObject
        

        constructor() {
            super();
            this.start();
        }

        public start() : void {
            // Initialize score to 0
            this._score = 0;
            
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            // Add score label
            this._scoreLabel = new objects.Label("Score: 0", "26px Consolas", "#FFF",  config.Screen.CENTER_X, config.Screen.CENTER_Y - 280);
            this.addChild(this._scoreLabel);

            stage.addChild(this);
        }

        public update() : void {
            this._scoreLabel.text = ("Score: " + this._score);
        }
    }
}