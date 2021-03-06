// Generated from simplerlang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";

// This class defines a complete listener for a parse tree produced by simplerlangParser.
export default class simplerlangListener extends antlr4.tree.ParseTreeListener {
  // Enter a parse tree produced by simplerlangParser#prog.

  constructor() {
    super();

    this.state = {};
    this.matrices = {};
  }

  enterProg(ctx) {}

  // Exit a parse tree produced by simplerlangParser#prog.
  exitProg(ctx) {}

  // Enter a parse tree produced by simplerlangParser#statement_list.
  enterStatement_list(ctx) {}

  // Exit a parse tree produced by simplerlangParser#statement_list.
  exitStatement_list(ctx) {}

  // Enter a parse tree produced by simplerlangParser#statement.
  enterStatement(ctx) {}

  // Exit a parse tree produced by simplerlangParser#statement.
  exitStatement(ctx) {}

  // Enter a parse tree produced by simplerlangParser#var_declaration.
  enterVar_declaration(ctx) {
    const objectId = ctx.getChild(1).getText();
    const object = {};
    const pos = {};
    const color = ctx
      .getChild(3)
      .getChild(3)
      .getChild(4)
      .getText()
      .split("=")[1];

    pos.X = ctx.getChild(3).getChild(3).getChild(0).getText().split("=")[1];
    pos.Y = ctx.getChild(3).getChild(3).getChild(1).getText().split("=")[1];
    pos.Z = ctx.getChild(3).getChild(3).getChild(2).getText().split("=")[1];
    object.scale = ctx
      .getChild(3)
      .getChild(3)
      .getChild(3)
      .getText()
      .split("=")[1];

    object.type = ctx.getChild(3).getChild(1).getText();
    object.pos = pos;
    object.color = color;

    this.state[objectId] = object;
  }

  enterColor_type(ctx) {}

  exitColor_type(ctx) {}

  // Exit a parse tree produced by simplerlangParser#var_declaration.
  exitVar_declaration(ctx) {}

  // Enter a parse tree produced by simplerlangParser#create_command.
  enterCreate_command(ctx) {}

  // Exit a parse tree produced by simplerlangParser#create_command.
  exitCreate_command(ctx) {}

  // Enter a parse tree produced by simplerlangParser#transform_command.
  enterTransform_command(ctx) {}

  // Exit a parse tree produced by simplerlangParser#transform_command.
  exitTransform_command(ctx) {}

  // Enter a parse tree produced by simplerlangParser#transform_function.
  enterTransform_function(ctx) {}

  // Exit a parse tree produced by simplerlangParser#transform_function.
  exitTransform_function(ctx) {}

  // Enter a parse tree produced by simplerlangParser#transform_matrix_declaration.
  enterTransform_matrix_declaration(ctx) {
    const matrixId = ctx.getChild(1).getText();
    const transformX = ctx.getChild(3).getChild(0).getChild(2).getText();
    const transformY = ctx.getChild(3).getChild(1).getChild(2).getText();
    const transformZ = ctx.getChild(3).getChild(2).getChild(2).getText();

    this.matrices[matrixId] = { transformX, transformY, transformZ };
  }

  // Exit a parse tree produced by simplerlangParser#transform_matrix_declaration.
  exitTransform_matrix_declaration(ctx) {}

  // Enter a parse tree produced by simplerlangParser#transform_command_list.
  enterTransform_command_list(ctx) {}

  // Exit a parse tree produced by simplerlangParser#transform_command_list.
  exitTransform_command_list(ctx) {}

  // Enter a parse tree produced by simplerlangParser#apply_texture_command.
  enterApply_texture_command(ctx) {}

  // Exit a parse tree produced by simplerlangParser#apply_texture_command.
  exitApply_texture_command(ctx) {}

  // Enter a parse tree produced by simplerlangParser#apply_transform_command.
  enterApply_transform_command(ctx) {
    const objId = ctx.getChild(2).getText();
    const matrixId = ctx.getChild(4).getText();

    this.state[objId].transform = this.matrices[matrixId];
  }

  // Exit a parse tree produced by simplerlangParser#apply_transform_command.
  exitApply_transform_command(ctx) {}

  // Enter a parse tree produced by simplerlangParser#object_props.
  enterObject_props(ctx) {}

  // Exit a parse tree produced by simplerlangParser#object_props.
  exitObject_props(ctx) {}

  // Enter a parse tree produced by simplerlangParser#object_prop.
  enterObject_prop(ctx) {}

  // Exit a parse tree produced by simplerlangParser#object_prop.
  exitObject_prop(ctx) {}

  // Enter a parse tree produced by simplerlangParser#prop_name.
  enterProp_name(ctx) {}

  // Exit a parse tree produced by simplerlangParser#prop_name.
  exitProp_name(ctx) {}

  // Enter a parse tree produced by simplerlangParser#object_type.
  enterObject_type(ctx) {}

  // Exit a parse tree produced by simplerlangParser#object_type.
  exitObject_type(ctx) {}

  getState() {
    return this.state;
  }
}
