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
        private _enemy : objects.Enemy;
        

        constructor() {
            super();
            this.start();
        }

        public start() : void {
            // Initialize score to 0
            this._score = 0;
            
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("GameBank"));
            this.addChild(this._bg);

            // Add score label
            this._scoreLabel = new objects.Label("Score: 0", "26px Consolas", "#FFF",  config.Screen.CENTER_X, config.Screen.CENTER_Y - 280);
            this.addChild(this._scoreLabel);
            
            // Add enemy
            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);
            
            // OnClick for Enemy
            this._enemy.addEventListener("click", 
                (event: createjs.MouseEvent) => this._onEnemyClick(event));

            stage.addChild(this);
        }

        public update() : void {
            this._scoreLabel.text = ("Score: " + this._score);
            this._enemy.update();
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
            // Enemy Shot
            console.log("Enemy shot and life is: " + (this._enemy.life - 1));
            this._enemy.shot();
            if (this._enemy.life == 0){
                this._score += 5;
                setTimeout(() => {
                    this._newEnemy();
                 }, 1000);
            }
        }
        
        private _newEnemy() : void{
            // Add enemy
            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);
            
            this._enemy.addEventListener("click", 
                (event: createjs.MouseEvent) => this._onEnemyClick(event));
        }
    }
}