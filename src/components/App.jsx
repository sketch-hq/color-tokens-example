import React, { useState } from 'react';
import styled from 'styled-components';

import ColorList from './ColorList';
import Buttons from './Buttons';

export const Container = styled.div`
 padding: 16px;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
