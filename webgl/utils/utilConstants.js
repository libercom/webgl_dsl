import { vec3, vec4 } from "../common/MV";

export const WebGL_RED = [vec4(1, 0, 0, 1), vec4(1, 0, 0, 1), vec4(1, 0, 0, 1)];

export const WebGL_BLACK = [
    vec4(0, 0, 0, 1),
    vec4(0, 0, 0, 1),
    vec4(0, 0, 0, 1),
];

export const WebGL_GREEN = [
    vec4(0, 0.5, 0, 1),
    vec4(0, 0.5, 0, 1),
    vec4(0, 0.5, 0, 1),
];

export const WebGL_BLUE = [
    vec4(0, 0, 1, 1),
    vec4(0, 0, 1, 1),
    vec4(0, 0, 1, 1),
];

export const WebGL_AQUA = [
    vec4(0, 1, 1, 1),
    vec4(0, 1, 1, 1),
    vec4(0, 1, 1, 1),
];

export const WebGL_LIME = [
    vec4(0, 1, 0, 1),
    vec4(0, 1, 0, 1),
    vec4(0, 1, 0, 1),
];

export const WebGL_MULTICOLOUR = [
    WebGL_LIME,
    WebGL_AQUA,
    WebGL_BLUE,
    WebGL_GREEN,
    WebGL_BLACK,
    WebGL_RED,
];

export const WebGL_TRIANGLE = [
    vec3(-0.5, -0.5, -1.0),
    vec3(-0.5, 0.5, -1.0),
    vec3(0.5, -0.5, -1.0),
];

export const WebGL_SQUARE = [
    vec3(-0.5, -0.5, 0.0),
    vec3(-0.5, 0.5, 0.0),
    vec3(0.5, -0.5, 0.0),
    vec3(0.5, 0.5, 0.0),
];

export const WebGL_CUBE = [
    vec3(-0.5, -0.5, 0.5),
    vec3(-0.5, 0.5, 0.5),
    vec3(0.5, -0.5, 0.5),
    vec3(0.5, 0.5, 0.5),
    vec3(-0.5, -0.5, -0.5),
    vec3(-0.5, 0.5, -0.5),
    vec3(0.5, -0.5, -0.5),
    vec3(0.5, 0.5, -0.5),
];

export const WebGL_PYRAMID = [
    vec3(0.0, 0.5, 0.0),
    vec3(-0.5, -0.5, 0.5),
    vec3(0.5, -0.5, 0.5),
    vec3(-0.5, -0.5, -0.5),
    vec3(0.5, -0.5, -0.5),
];
