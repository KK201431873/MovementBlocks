import { Values } from '@/typeHelpers';

import TileGrid from '@/components/Layout/TileGrid';
import Tile from '@/components/Layout/Tile';
import ConfigurableLayout from '@/components/ConfigurableLayout/ConfigurableLayout';

import OpModeView from '@/components/views/OpModeView';
import CameraView from '@/components/views/CameraView';
import GraphView from '@/components/views/GraphView/GraphView';
import ConfigView from '@/components/views/ConfigView/ConfigView';
import TelemetryView from '@/components/views/TelemetryView';
import FieldView from '@/components/views/FieldView/FieldView';
import App from '@/App';

import Blockly from 'blockly/core';
import {javascriptGenerator} from 'blockly/javascript';
import locale from 'blockly/msg/en';

import {useRef} from 'react';
import play_button from './play_button.png';

import {workspace} from '@/Blockly/BlocklyComponent';
import {randomValue} from '@/Blockly/BlocklyComponent';

import {getSortedKeys} from '@/components/views/ConfigView/ConfigView';
import {sortedKeysPublic} from '@/components/views/ConfigView/ConfigView';

const LayoutPreset = {
  DEFAULT: 'DEFAULT',
  FIELD: 'FIELD',
  GRAPH: 'GRAPH',
  ORIGINAL: 'ORIGINAL',
  CONFIGURABLE: 'CONFIGURABLE',
} as const;

type Layout = {
  name: string;
  content: JSX.Element;
};

// import {workspace} from '@/components/Dashboard/Dashboard';
// import {randomValue} from '@/components/Dashboard/Dashboard';

import { useSelector } from 'react-redux';

// import CustomVariable from './CustomVariable';
import BaseView, {
  BaseViewProps,
  BaseViewHeadingProps,
  BaseViewHeading,
  BaseViewBody,
  BaseViewIcons,
  BaseViewIconButton,
} from '@/components/views/BaseView';

import { ReactComponent as SaveIcon } from '@/assets/icons/save.svg';
import { ReactComponent as RefreshIcon } from '@/assets/icons/refresh.svg';

import { RootState, useAppDispatch } from '@/store/reducers';
import {
  ConfigVar,
  ConfigVarState,
  CustomVarState,
} from '@/store/types/config';

Blockly.setLocale(locale);

function generateCode() {
  var code = javascriptGenerator.workspaceToCode(workspace.current);
  let results = code.match(/{([^}]+)}/g);
  for (var i = 0; i < results.length; i++)
    console.log(results[i]);


  // <ConfigView />[0];
  // console.log(randomValue);
  // console.log(getSortedKeys());
  console.log(sortedKeysPublic);

}

const LAYOUT_DETAILS: { [key in Values<typeof LayoutPreset>]: Layout } = {
  [LayoutPreset.DEFAULT]: {
    name: 'Default',
    content: (
      <TileGrid gridTemplate=" 22% 33% 45% / 10% 90%">
        <Tile row={1} col={1}>
          <img className='convertButton' onClick={generateCode} src={play_button} />
        </Tile>
        <Tile row={2} col={1}>
          <OpModeView />
        </Tile>
        <Tile row={3} col={1}>
          <ConfigView />
        </Tile>
        <Tile row="1 / span 2" col={2}>
          <App />
        </Tile>
      </TileGrid>
    ),
  },
  [LayoutPreset.FIELD]: {
    name: 'Field',
    content: (
      <TileGrid gridTemplate="220px calc(60% - 220px) 40% / 30% 40% 30%">
        <Tile row="1 / span 1" col={1}>
          <OpModeView />
        </Tile>
        <Tile row="2 / span 2" col={1}>
          <FieldView />
        </Tile>
        <Tile row="1 / span 3" col={2}>
          <GraphView />
        </Tile>
        <Tile row="1 / span 2" col={3}>
          <ConfigView />
        </Tile>
        <Tile row={3} col={3}>
          <TelemetryView />
        </Tile>
      </TileGrid>
    ),
  },
  [LayoutPreset.GRAPH]: {
    name: 'Graph',
    content: (
      <TileGrid gridTemplate="100% / 50% 50%">
        <Tile row={1} col={1}>
          <GraphView />
        </Tile>
        <Tile row={1} col={2}>
          <GraphView />
        </Tile>
      </TileGrid>
    ),
  },
  [LayoutPreset.ORIGINAL]: {
    name: 'Original',
    content: (
      <TileGrid gridTemplate="60% 40% / 65% 35%">
        <Tile row="1 / span 2" col={1}>
          <GraphView />
        </Tile>
        <Tile row={1} col={2}>
          <ConfigView />
        </Tile>
        <Tile row={2} col={2}>
          <TelemetryView />
        </Tile>
      </TileGrid>
    ),
  },
  [LayoutPreset.CONFIGURABLE]: {
    name: 'Custom',
    content: <ConfigurableLayout />,
  },
};

export default Object.freeze({
  ...LayoutPreset,

  getName: (preset: Values<typeof LayoutPreset>) => LAYOUT_DETAILS[preset].name,

  getContent: (preset: Values<typeof LayoutPreset>) =>
    LAYOUT_DETAILS[preset]?.content ??
    LAYOUT_DETAILS[LayoutPreset.DEFAULT].content,
});

export type LayoutPresetType = Values<typeof LayoutPreset>;
