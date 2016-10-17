/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene : objects.Scene;
var scene: number;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "PlayBtn", src: "../../Assets/images/sack.png"}
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            currentScene = new scenes.Menu();;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting SHOOTER scene");
            break;
    }
    
}