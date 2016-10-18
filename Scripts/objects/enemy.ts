module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        private _life : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(enemyAtlas, imageString, "kill");
            this._life = this._randomLifeValue();
            this.setPosition(this._randomPosition());
        }

        get life() : number {
            return this._life;
        }

        public update() : void {
            super.update();
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            this._life--;
            if (this._life == 0){
                this._dead();
            }
        }

        private _dead() : void {
            super.destroy();
        }
        
        private _randomLifeValue():number {
            // Generate a random health value between 1 and 5
            return Math.floor((Math.random() * 5) + 1);
        }
        
        private _randomPosition():objects.Vector2 {
            // Generate a random position within the bounds of the scene
            var _posX : number = Math.floor((Math.random() * config.Screen.WIDTH - 100) + 100);
            var _posY : number = Math.floor((Math.random() * config.Screen.HEIGHT - 100) + 100);
            
            return new objects.Vector2(_posX, _posY);
        }
    }
}