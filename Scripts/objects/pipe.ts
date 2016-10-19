module objects {
    export class Pipe extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _imageString : string;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(pipeAtlas, imageString);
            this.gotoAndPlay(imageString);
        }

        public update() : void {
           
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }
        
        public destroy() : void {
            super.destroy();
        }

        private _dead() : void {
            
        }
    }
}