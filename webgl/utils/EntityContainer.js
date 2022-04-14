import { vec3 } from "../common/MV";
import { Cube } from "./objects/Cube";
import { Pyramid } from "./objects/Pyramid";
import { Sphere } from "./objects/Sphere";
import { WebGL_MULTICOLOUR, WebGL_RED } from "./utilConstants";
import { shuffle } from "./utilFunctions";

export default function EntityContainer(parsedObjects) {
    let _entities = {};

    console.log("hi");
    console.log(parsedObjects);

    parsedObjects.forEach((obj) => {
        const id = obj.id;
        const type = obj.type;
        const pos = obj.pos;
        const scale = obj.scale;
        let object = null;

        if (type === "Cube") {
            object = new Cube(shuffle(WebGL_MULTICOLOUR));
        } else if (type === "Pyramid") {
            object = new Pyramid(shuffle(WebGL_MULTICOLOUR));
        } else if (type === "Sphere") {
            object = new Sphere(WebGL_RED);
        }

        object.translation = vec3(
            Number.parseInt(pos.X),
            Number.parseInt(pos.Y),
            Number.parseInt(pos.Z)
        );

        object.scale = vec3(scale, scale, scale);

        console.log(object);

        _entities[id] = object;
    });

    function init() {
        for (const id in _entities) {
            _entities[id].init();
        }
    }

    function draw() {
        for (const id in _entities) {
            _entities[id].draw();
        }
    }

    return {
        init,
        draw,
    };
}
