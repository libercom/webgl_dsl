import { vec3 } from "../common/MV";
import { Cube } from "./objects/Cube";
import { Pyramid } from "./objects/Pyramid";
import { Sphere } from "./objects/Sphere";
import { WebGL_BLACK, WebGL_BLUE, WebGL_RED } from "./utilConstants";
import { shuffle } from "./utilFunctions";

export default function EntityContainer(parsedObjects) {
  let _entities = {};
  let _transforms = {};

  for (const po in parsedObjects) {
    const obj = parsedObjects[po];

    const id = po;
    const type = obj.type;
    const pos = obj.pos;
    const scale = obj.scale;
    const transform = obj.transform;
    let color;
    let object = null;

    if (obj.color === "Red") {
      color = WebGL_RED;
    } else if (obj.color === "Blue") {
      color = WebGL_BLUE;
    } else {
      color = WebGL_BLACK;
    }

    if (type === "Cube") {
      object = new Cube(color);
    } else if (type === "Pyramid") {
      object = new Pyramid(color);
    } else if (type === "Sphere") {
      object = new Sphere(color);
    }

    object.translation = vec3(
      Number.parseInt(pos.X),
      Number.parseInt(pos.Y),
      Number.parseInt(pos.Z)
    );

    object.scale = vec3(scale, scale, scale);

    _entities[id] = object;
    _transforms[id] = transform;
  }

  function init() {
    for (const id in _entities) {
      _entities[id].init();
    }

    console.log(_entities);
  }

  function draw() {
    for (const id in _entities) {
      _entities[id].draw();
    }
  }

  function applyTransforms() {
    for (const id in _entities) {
      if (_transforms[id] !== undefined) {
        const posX = _entities[id].translation[0];
        const posY = _entities[id].translation[1];
        const posZ = _entities[id].translation[2];

        const transformX = Number.parseInt(_transforms[id].transformX);
        const transformY = Number.parseInt(_transforms[id].transformY);
        const transformZ = Number.parseInt(_transforms[id].transformZ);

        if (transformX !== posX && transformY !== posY && transformZ !== posZ) {
          _entities[id].translation = vec3(
            posX + transformX / 700,
            posY + transformY / 700,
            posZ + transformZ / 700
          );
        }
      }
    }
  }

  return {
    init,
    draw,
    applyTransforms,
  };
}
