import React, { useState } from 'react';
import styled from 'styled-components';

import ColorList from './ColorList';
import Buttons from './Buttons';

export const Container = styled.div`
 padding: 1.5em;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe UI Symbol', 'Segoe UI Emoji', 'Apple Color Emoji', Roboto, Helvetica, Arial, sans-serif;
 background-color: #fff;
 color: #000;
 width: 100%;
`;

const App = () => {
 return (
  <Container>
   <Buttons />
   <ColorList />
  </Container>
 );
};

export default App;
