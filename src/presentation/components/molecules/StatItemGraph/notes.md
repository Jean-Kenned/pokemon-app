# Components StatItemGraph

This component aims to provide a custom `Percentage bar`, that expands its width to its parent's width.

This component accept the following props:

  * **baseStat:** Define the percentage to be showed.

**OBS:** If **baseStat** is bigger or equal to 60 its color will be green, if not, will be red.


```javascript
import React from 'react';
import {BaseStatBar, Container} from './styles';

type Props = {
  baseStat: number;
};

const StatItemGraph: React.FC<Props> = ({baseStat}: Props) => {
  return (
    <Container>
      <BaseStatBar baseStat={baseStat} />
    </Container>
  );
};

export default StatItemGraph;
```
