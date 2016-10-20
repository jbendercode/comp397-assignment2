module scenes {
    export class Play extends objects.Scene {

        // Private instance variables
        private _score : number;
        private _paused : boolean;
        private _difficulty : number;
        private _scoreCounter : number;
        private _lastSmoke : number;
        
        // Label or bitmap
        private _bg : createjs.Bitmap;
        private _bg2 : createjs.Bitmap;
        private _scoreLabel : objects.Label;
            
        // Button 
        private _pauseBtn : objects.Button;
        
        // Filter
        private _blurFilter : createjs.BlurFilter;
        private _bounds : createjs.Rectangle;
        
        // GameObject
        private _runner : objects.Runner;
        private _pipe : objects.Pipe;
        private _pipe2 : objects.Pipe;
        private _pipeholder : objects.Pipe[];
        private _smoke : objects.Smoke[];
        

        constructor() {
            super();
            this.start();
        }

        public start() : void {
            // Initialize score to 0 and counter to 60
            this._score = 0;
            this._scoreCounter = 30;
            
            // Initialize paused boolean
            this._paused = false;
            
            // Initialize difficulty
            this._difficulty = 1;
            
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

            // Add score label
            this._scoreLabel = new objects.Label("Score: 0", "26px Consolas", "#FFF",  config.Screen.CENTER_X, config.Screen.CENTER_Y - 280);
            this.addChild(this._scoreLabel);
            
            // Add pause button
            this._pauseBtn = new objects.Button("Pause", config.Screen.CENTER_X + 360, config.Screen.CENTER_Y - 260);
            this._pauseBtn.scaleX = 0.5;
            this._pauseBtn.scaleY = 0.5;
            this._pauseBtn.cursor = "pointer";
            this.addChild(this._pauseBtn);
            this._pauseBtn.on("click", this._pauseBtnClick, this);
            
            // Add pipe start
            this._pipeholder = [];
            this._pipeholder[0] = new objects.Pipe("pipeStart");
            this._pipeholder[0].x = config.Screen.CENTER_X - 300;
            this._pipeholder[0].y = config.Screen.CENTER_Y + 105;
            this.addChild(this._pipeholder[0]);
            
            // Add pipe body
            for (var i = 1; i < 30; i++){
                this._pipeholder[i] = new objects.Pipe("pipeMiddle");
                this._pipeholder[i].x = config.Screen.CENTER_X - 300 + (45 * (i));
                this._pipeholder[i].y = config.Screen.CENTER_Y + 105;
                this.addChild(this._pipeholder[i]);
            }
            
            // Add runner
            this._runner = new objects.Runner("run");
            this._runner.x = config.Screen.CENTER_X;
            this._runner.y = config.Screen.CENTER_Y;
            this.addChild(this._runner);
            
            // Add smoke
            this._lastSmoke = config.Screen.WIDTH;
            this._smoke = [];
            for (var i = 0; i < 10; i++){
                this._smoke[i] = new objects.Smoke("smoke");
                this._smoke[i].x = this._lastSmoke + this._randomPosition();
                this._lastSmoke = this._smoke[i].x;
                if (this._randomSide()){
                    this._smoke[i].y = config.Screen.CENTER_Y + 15;
                } else {
                    this._smoke[i].y = config.Screen.CENTER_Y + 75;
                    this._smoke[i].scaleY = -1;
                }
                this.addChild(this._smoke[i]);
            }

            stage.addChild(this);
        }

        public update() : void {
            if (!this._paused){
                // Update runner
                this._runner.update();
                
                // Update score
                this._scoreCounter -= 1;
                if (this._scoreCounter < 0){
                    this._score += 10;
                    this._scoreLabel.text = ("Score: " + this._score);
                    this._scoreCounter = 30;
                }
                
                // Scroll and recycle backgrounds
                this._bg.x -= 1;
                this._bg2.x -= 1;
                if (this._bg.x < -1590){
                    this._bg.x = 1590;
                } if (this._bg2.x < -1590){
                    this._bg2.x = 1590;
                }
                
                // Update pipe
                if (this._pipeholder[0].x > 0){
                    for (var i = 0; i < this._pipeholder.length; i++){
                        this._pipeholder[i].x -= 10;
                    }
                }
                
                // Update smoke
                for (var i = 0; i < this._smoke.length; i++){
                    // Check for collision with player
                    if (this._smoke[i].x < this._runner.x + this._runner.width  && 
                        this._smoke[i].x + this._smoke[i].width  > this._runner.x &&
                        this._smoke[i].y < this._runner.y + this._runner.height && 
                        this._smoke[i].y + this._smoke[i].height > this._runner.y){
                            
                        if (this._smoke[i].scaleY == -1 && !controls.UP ||
                            this._smoke[i].scaleY == 1 && controls.UP){
                            
                            // Go to GameOver Scene
                            lastScore = this._score;
                            scene = config.Scene.GAMEOVER;
                            changeScene();      
                        }
                        
                    }
                    
                    this._smoke[i].x -= 10 * this._difficulty;
                    if (this._smoke[i].x < 0){
                        this._smoke[i].x = this._lastSmoke + this._randomPosition();
                        this._lastSmoke = this._smoke[i].x;
                    }
                }
                
                // Update difficulty
                this._difficulty += 0.0005;
            }
        }
        
        private _pauseBtnClick(event : createjs.MouseEvent) {
            this._paused = this._paused ? false : true;
            this._runner.run();
        }
        
        private _randomPosition() : number {
            // Generate a random position for the smoke
            var _posX : number = Math.floor((Math.random() * 600) + 200);
            
            return _posX;
        }
        
        private _randomSide() : boolean {
            var _up : boolean = Math.random() > 0.5 ? true : false;
            return _up;
        }
    }
}