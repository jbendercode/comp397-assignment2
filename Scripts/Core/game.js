/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
var runnerAtlas;
var pipeAtlas;
var smokeAtlas;
// Preload Assets required
var assetData = [
    { id: "Runner", src: "../../Assets/images/running-sprite.png" },
    { id: "HowToPlay", src: "../../Assets/images/how-to-play.png" },
    { id: "Play", src: "../../Assets/images/play.png" },
    { id: "BG", src: "../../Assets/images/scrolling-clouds.png" },
    { id: "Pipe", src: "../../Assets/images/pipe.png" },
    { id: "Pause", src: "../../Assets/images/pauseBtn.png" },
    { id: "Board", src: "../../Assets/images/wood-board.png" },
    { id: "Back", src: "../../Assets/images/back.png" },
    { id: "Smoke", src: "../../Assets/images/smoke.png" }
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
                frames: [3, 4, 5, 6, 7, 0, 1, 2], speed: 0.3, next: true
            },
            stand: { frames: [2] }
        },
        texturepacker: [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:6b44ef51929ea21e17ff1b07ec9c1090:a443013636a6d3e24441fc0f2a91ca43:a99356c10d69482e9bee53d25c3d05e1$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    runnerAtlas = new createjs.SpriteSheet(atlasData);
    // Initialize pipe spritesheet
    var atlasData2 = {
        images: [
            assets.getResult("Pipe")
        ],
        frames: [
            [1, 1, 45, 117, 0, 23, 59],
            [50, 1, 45, 117, 0, 23, 59]
        ],
        animations: {
            pipeStart: { frames: [0] },
            pipeMiddle: { frames: [1] }
        },
        texturepacker: [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:6b44ef51929ea21e17ff1b07ec9c1090:a443013636a6d3e24441fc0f2a91ca43:a99356c10d69482e9bee53d25c3d05e1$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    pipeAtlas = new createjs.SpriteSheet(atlasData2);
    // Initialize smoke spritesheet
    var atlasData3 = {
        images: [
            assets.getResult("Smoke")
        ],
        frames: [
            [1, 1, 20, 200, 0, 10, 100],
            [19, 1, 20, 200, 0, 10, 100],
            [41, 1, 24, 200, 0, 12, 100],
            [65, 1, 26, 200, 0, 13, 100],
            [92, 1, 26, 200, 0, 13, 100],
            [121, 1, 29, 200, 0, 15, 100]
        ],
        animations: {
            smoke: {
                frames: [0, 1, 2, 3, 4, 5], speed: 1, next: true
            }
        },
        texturepacker: [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:6b44ef51929ea21e17ff1b07ec9c1090:a443013636a6d3e24441fc0f2a91ca43:a99356c10d69482e9bee53d25c3d05e1$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    smokeAtlas = new createjs.SpriteSheet(atlasData3);
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