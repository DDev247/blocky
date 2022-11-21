
const EDITOR_CANVAS = document.getElementById("editorCanvas");
const EDITOR_CONTEXT = EDITOR_CANVAS.getContext('2d');
//const APP_CANVAS = document.getElementById("appCanvas");
//const APP_CONTEXT = APP_CANVAS.getContext('2d');

function goHome() {
    let link = document.createElement('a');
    link.href = "/blocky/";
    link.click();
    link.remove();
}

var RunID;
var FPSID;
function start() {
    RunID = setInterval(run, 16/2);
    FPSID = setInterval(fps, 1000);
}

function run() {
    update();
    
    render();
}

function update() {
    let style = getComputedStyle(EDITOR_CANVAS);
    EDITOR_CANVAS.width = Number.parseFloat(style.width);
    EDITOR_CANVAS.height = Number.parseFloat(style.height);
}

let frame;
function render() {
    
    EDITOR_CONTEXT.clearRect(0, 0, 9999999, 9999999);
    EDITOR_CONTEXT.strokeRect(frame, 0, 100, 100);

    frame++;
}

let FPS;
function fps() {
    FPS = frame;
    frame = 0;
    console.log("FPS: " + FPS);
}

start();
