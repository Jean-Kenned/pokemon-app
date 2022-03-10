import React from 'react';
import {storiesOf} from '@storybook/react-native';

import StatItemGraph from '.';
import { number } from '@storybook/addon-knobs';
import DefaultDecorator from '@/../storybook/defaultDecorator';

storiesOf('StatItemGraph', module)
.addDecorator(DefaultDecorator)
.add('default', () => <StatItemGraph baseStat={number('percentage',50)}/>);
