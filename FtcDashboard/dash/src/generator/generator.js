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
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import {javascriptGenerator} from 'blockly/javascript';

javascriptGenerator.forBlock['test_react_field'] = function (block) {
  return "console.log('custom block');\n";
};

javascriptGenerator.forBlock['test_react_date_field'] = function (block) {
  return 'console.log(' + block.getField('DATE').getText() + ');\n';
};

javascriptGenerator.forBlock['start'] = function(block, generator) {
  var statements_name = generator.statementToCode(block, 'NAME');
  // var code = `MovementSequence sequence = new MovementSequenceBuilder()\n${statements_name}.build();`;
  var code = `{\n${statements_name}}`;
  return code;
};

javascriptGenerator.forBlock['repeat'] = function(block, generator) {
  var number_iterations = block.getFieldValue('ITERATIONS');
  var statements_name = generator.statementToCode(block, 'NAME');
  var code = statements_name.repeat(number_iterations);
  return code;
};

javascriptGenerator.forBlock['forward'] = function(block, generator) {
  var number_distance = block.getFieldValue('DISTANCE');
  var code = `.forward(${number_distance})\n`;
  return code;
};

javascriptGenerator.forBlock['backward'] = function(block, generator) {
  var number_distance = block.getFieldValue('DISTANCE');
  var code = `.backward(${number_distance})\n`;
  return code;
};

javascriptGenerator.forBlock['left'] = function(block, generator) {
  var number_distance = block.getFieldValue('DISTANCE');
  var code = `.left(${number_distance})\n`;
  return code;
};

javascriptGenerator.forBlock['right'] = function(block, generator) {
  var number_distance = block.getFieldValue('DISTANCE');
  var code = `.right(${number_distance})\n`;
  return code;
};

javascriptGenerator.forBlock['turn_right'] = function(block, generator) {
  var number_angle = block.getFieldValue('ANGLE');
  var code = `.turnRight(${number_angle})\n`;
  return code;
};

javascriptGenerator.forBlock['turn_left'] = function(block, generator) {
  var number_angle = block.getFieldValue('ANGLE');
  var code = `.turnLeft(${number_angle})\n`;
  return code;
};

javascriptGenerator.forBlock['raise_arm'] = function(block, generator) {
  var number_elevation = block.getFieldValue('ELEVATION');
  // TODO: Assemble javascript into code variable.
  var code = `.raiseArm(${number_elevation})\n`;
  return code;
};

javascriptGenerator.forBlock['lower_arm'] = function(block, generator) {
  var number_elevation = block.getFieldValue('ELEVATION');
  // TODO: Assemble javascript into code variable.
  var code = `.lowerArm(${number_elevation})\n`;
  return code;
};

javascriptGenerator.forBlock['open_claws'] = function(block, generator) {
  var code = `.openBothClaws()\n`;
  return code;
};

javascriptGenerator.forBlock['close_claws'] = function(block, generator) {
  var code = `.closeBothClaws()\n`;
  return code;
};


javascriptGenerator.forBlock['Bosswars'] = function(block, generator) {
  window.open("https://scratch.mit.edu/projects/796702006/");
  return "";
};

javascriptGenerator.forBlock['mother'] = function(block, generator) {
  return "harry's mother";
};

javascriptGenerator.forBlock['do'] = function(block, generator) {
  var statements_name = generator.statementToCode(block, 'NAME');
  alert(`done${statements_name}.`);
  return "";
};

