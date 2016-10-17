module scenes {
    export class Play extends objects.Scene {


        constructor() {
            super();
            this.start();
        }

        public start() : void {

            stage.addChild(this);
        }

        public update() : void {
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}