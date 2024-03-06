/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';
import play_button from './play_button.png';

import '@blockly/field-date';

const reactDateField = {
  type: 'test_react_date_field',
  message0: 'date field: %1',
  args0: [
    {
      type: 'field_date',
      name: 'DATE',
      date: '2020-02-20',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function () {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  },
};

const testReactField = {
  type: 'test_react_field',
  message0: 'i am your mother %1',
  args0: [
    {
      type: 'field_react_component',
      name: 'FIELD',
      text: 'Click me',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_field'] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  },
};

var mathChangeJson = {
  "message0": "change %1 by %2",
  "args0": [
    {"type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""]},
    {"type": "input_value", "name": "DELTA", "check": "Number"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230
};

Blockly.Blocks['math_change'] = {
  init: function() {
    this.jsonInit(mathChangeJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

Blockly.Blocks['start'] = {
  init: function() {
    this.jsonInit({
      "maxInstances": 1})
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldImage(play_button, 20, 20, { alt: "start", flipRtl: "FALSE" }))
        .appendField("clicked\n");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(20);
    this.setTooltip("When the driver station play button is pressed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("repeat ")
        .appendField(new Blockly.FieldNumber(2, 1, 10, 1), "ITERATIONS")
        .appendField(" times\n");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("Repeat the code a certain number of times.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forward ")
        .appendField(new Blockly.FieldNumber(24, 0), "DISTANCE")
        .appendField(" inches");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Drive forward a certain number of inches.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("backward ")
        .appendField(new Blockly.FieldNumber(24, 0), "DISTANCE")
        .appendField(" inches");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Drive backward a certain number of inches.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("left ")
        .appendField(new Blockly.FieldNumber(24, 0), "DISTANCE")
        .appendField(" inches");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Strafe left a certain number of inches.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("right ")
        .appendField(new Blockly.FieldNumber(24, 0), "DISTANCE")
        .appendField(" inches");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Strafe right a certain number of inches.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn right ")
        .appendField(new Blockly.FieldNumber(90, 0), "ANGLE")
        .appendField(" degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("Turn right a certain number of degrees.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn left ")
        .appendField(new Blockly.FieldNumber(90, 0), "ANGLE")
        .appendField(" degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("Turn left a certain number of degrees.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['raise_arm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("raise arm ")
        .appendField(new Blockly.FieldNumber(30, 0, 270), "ELEVATION")
        .appendField(" degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Raise the arm a certain number of degrees.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lower_arm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lower arm ")
        .appendField(new Blockly.FieldNumber(30, 0, 270), "ELEVATION")
        .appendField(" degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Lower the arm a certain number of degrees.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['open_claws'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("open claws");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("Open both of the claws.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['close_claws'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("close claws");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("Close both of the claws.");
 this.setHelpUrl("");
  }
};

