import React from 'react';
import { render } from 'react-dom';
import { css } from 'react-emotion';

const style = css`
  color: blue;
  background-color: green;
`;

render(<div className={style}>Hello World!</div>, document.getElementById('app'));
