import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/colors.json';

const Container = styled.div`
 margin-bottom: 60px;
`;

const BaseButton = styled.button`
border: none;
border-radius: 0.5em;
padding 1em 1.4em;
font-weight: bold;
font-size: 0.8em;
margin: 0 1em;
background: ${({ theme }) => theme.Fill.Base.value};
color: ${({ theme }) => theme.Content.Primary.value};

&:first-of-type{
    margin-left:0
}
`;

const CommuteButton = styled(BaseButton)`
 background: ${({ theme }) => theme.Category['Commute'].value};
 color: #fff;
`;

const FoodButton = styled(BaseButton)`
 background: ${({ theme }) => theme.Category['Food'].value};
`;

const HouseButton = styled(BaseButton)`
 background: ${({ theme }) => theme.Category['House'].value};
 color: #fff;
`;

const Buttons = () => {
 if (!theme || !theme.Fill) {
  return null;
 }

 return (
  <Container>
   <h2>Examples with styled components using theme colors</h2>
   <p>Using a Theme Provider by styled components.</p>
   <ThemeProvider theme={theme}>
    <BaseButton>Base Button</BaseButton>
    <CommuteButton>Commute Button</CommuteButton>
    <FoodButton>Food Button</FoodButton>
    <HouseButton>House Button</HouseButton>
   </ThemeProvider>
  </Container>
 );
};

export default Buttons;
