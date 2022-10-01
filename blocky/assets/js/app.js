
const EDITOR_CANVAS = document.getElementById("editorCanvas");
const APP_CANVAS = document.getElementById("appCanvas");

function goHome() {
    let link = document.createElement('a');
    link.href = "/blocky/";
    link.click();
    link.remove();
}

var RunID;
var FPSID;
function start() {
    RunID = setInterval(run, 16);
    FPSID = setInterval(fps, 1000);
}

function run() {
    update();
    
    render();
}

function update() {

}

let frame;
function render() {


    frame++;
}

let FPS;
function fps() {
    FPS = frame;
    frame = 0;
    console.log("FPS: " + FPS);
}

start();
