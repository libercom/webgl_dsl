import { WebGLUtils, requestAnimFrame } from "../common/webgl-utils";
import { Camera } from "../utils/Camera";
import EntityContainer from "../utils/EntityContainer";
import { Shader } from "../utils/Shader";

const state = { objects: null };

fetch("http://localhost:3000")
    .then((response) => response.json())
    .then((data) => (state.objects = JSON.parse(data)))
    .then(() => init());

const canvas = document.getElementById("gl");
export const gl = WebGLUtils.setupWebGL(canvas);

let entityContainer;

function init() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    entityContainer = new EntityContainer(state.objects);

    Shader.init("vertex-shader", "fragment-shader");
    entityContainer.init();

    render();
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    Camera.resolve();
    entityContainer.applyTransforms();
    entityContainer.draw();

    requestAnimFrame(render);
}
