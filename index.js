import antlr4 from "antlr4";
import simplerlangListener from "./simplerlangListener";
import simplerlangLexer from "./simplerlangLexer";
import simplerlangParser from "./simplerlangParser";
const fs = require("fs");

export default function parseWebGLCode() {
    // const input = `Object obj1 = Create Cube {
    //     X = 2
    //     Y = 1
    //     Z = 0
    //     Scale = 1
    // }
    // Object obj2 = Create Pyramid {
    //     X = 0
    //     Y = 0
    //     Z = 0
    //     Scale = 2
    // }
    // Object obj3 = Create Sphere {
    //     X = -1
    //     Y = -2
    //     Z = 0
    //     Scale = 1
    // }`;

    const input = fs
        .readFileSync("./input.txt")
        .toString()
        .replaceAll("\t", "")
        .replaceAll("\r", "");

    const chars = new antlr4.InputStream(input);

    const lexer = new simplerlangLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new simplerlangParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.prog();
    const listener = new simplerlangListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    return listener.getState();
}

fs.writeFileSync("./some.json", JSON.stringify(parseWebGLCode()));
