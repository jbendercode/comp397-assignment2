module objects {
    export class Runner extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _imageString : string;
        private _running : boolean;
        private _up : boolean;
        private _keyPressed : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(runnerAtlas, imageString);
            this.gotoAndPlay(imageString);
            this._running = true;
            this._up = true;
            
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        public update() : void {
            if (!this._up){
                //this.setTransform(this.x, this.y -= 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            }
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        private _dead() : void {
            super.destroy();
        }
        
        public run() : void {
            this._running = this._running ? false : true;
            if (!this._running){
                this.gotoAndPlay("stand");
            } else {
                this.gotoAndPlay("run");
            }
        }
        
        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
                case keys.SPACE:
                    console.log("SPACE key pressed");
                    this._up = false;
                    break;
            }
        }

        private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
                case keys.SPACE:
                    this._up = true;
                    break;
            }
        }
    }
}