/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
var runnerAtlas;
// Preload Assets required
var assetData = [
    { id: "Runner", src: "../../Assets/images/running-sprite.png" },
    { id: "HowToPlay", src: "../../Assets/images/how-to-play.png" },
    { id: "Play", src: "../../Assets/images/play.png" },
    { id: "BG", src: "../../Assets/images/scrolling-clouds.png" },
    { id: "Pipe", src: "../../Assets/images/pipe.png" },
    { id: "Pause", src: "../../Assets/images/pauseBtn.png" },
    { id: "Board", src: "../../Assets/images/wood-board.png" },
    { id: "Back", src: "../../Assets/images/back.png" }
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
    // Initialize runner spritesheet
    var atlasData = {
        images: [
            assets.getResult("Runner")
        ],
        frames: [
            [1, 1, 100, 94, 0, 50, 47],
            [107, 1, 64, 94, 0, 32, 47],
            [189, 1, 52, 94, 0, 26, 47],
            [251, 1, 66, 94, 0, 33, 47],
            [314, 1, 102, 94, 0, 51, 47],
            [420, 1, 72, 94, 0, 36, 47],
            [510, 1, 50, 94, 0, 25, 47],
            [566, 1, 66, 94, 0, 33, 47]
        ],
        animations: {
            run: {
                frames: [3, 4, 5, 6, 7, 0, 1, 2], speed: 0.4, next: true
            },
            stand: { frames: [2] }
        },
        texturepacker: [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:6b44ef51929ea21e17ff1b07ec9c1090:a443013636a6d3e24441fc0f2a91ca43:a99356c10d69482e9bee53d25c3d05e1$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    runnerAtlas = new createjs.SpriteSheet(atlasData);
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            ;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting PLAY scene");
            break;
        case config.Scene.INSTRUCTIONS:
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting INSTRUCTIONS scene");
            break;
    }
}
//# sourceMappingURL=game.js.map