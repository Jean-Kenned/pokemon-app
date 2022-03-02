import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import StatItemGraph from '.';
import documents from './notes.md'

storiesOf('StatItemGraph', module)
  .add('default',
    () => <StatItemGraph baseStat={number('percentage', 50)}/>
    , {
      notes: documents
    }
  )