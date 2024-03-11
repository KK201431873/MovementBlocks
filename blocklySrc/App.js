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
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React, { useState, useEffect } from 'react';
import './App.css';

import BlocklyComponent, {Block, Value, Field, Shadow} from './Blockly';

import './blocks/customblocks';
import './generator/generator';

var displayText = "converted"

function App(props) {
  const [display, setDisplay] = useState(displayText);

  return (
    <div className="App">
      <header className="App-header">
        <BlocklyComponent
          readOnly={false}
          trashcan={true}
          media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start" x="10" y="10"></block>
</xml>
      `}>

          <Block type="start" />
          <Block type="repeat" />
          <Block type="forward" />
          <Block type="backward" />
          <Block type="turn_right" />
          <Block type="turn_left" />
          <Block type="raise_arm" />
          <Block type="lower_arm" />
          <Block type="close_claws" />
          <Block type="open_claws" />

          <Block type="left" />
          <Block type="right" />
          
          <Block type="do" />
          <Block type="mother" />
          <Block type="Bosswars"/>

        </BlocklyComponent>
      </header>
    </div>
  );
}

export default App;

export class DisplayText {
  static setDisplay(newDisplayText) {
    console.log(newDisplayText);
  }
}