module scenes {
    export class Instructions extends objects.Scene {

        // Private instance variables

        // Label or bitmap
        private _bg : createjs.Bitmap;
            
        // Button 
        
        // Filter
        
        // GameObject
        

        constructor() {
            super();
            this.start();
        }

        public start() : void {
            
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            stage.addChild(this);
        }

        public update() : void {
            
        }
    }
}