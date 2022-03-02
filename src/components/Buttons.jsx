import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/colors.json';

const Container = styled.div`
 margin-bottom: 60px;
`;

const BaseButton = styled.button`
border: none;
padding 8px 16px;
font-weight: bold;
margin: 0 8px;
background: ${({ theme }) => theme.Fill.Base.value};
color: ${({ theme }) => theme.Content.Primary.value};

&:first-of-type{
    margin-left:0
}
`;

const DarkGreyButton = styled(BaseButton)`
 background: ${({ theme }) => theme.Fill['Dark Gray'].value};
 color: #fff;
`;

const GreenButton = styled(BaseButton)`
 background: ${({ theme }) => theme.Fill['Offset'].value};
`;

const RoyalBlueButton = styled(BaseButton)`
 background: ${({ theme }) => theme.Fill['Royal Blue'].value};
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
    <DarkGreyButton>Dark Grey Button</DarkGreyButton>
    <GreenButton>Green Button</GreenButton>
    <RoyalBlueButton>Royal Blue Button</RoyalBlueButton>
   </ThemeProvider>
  </Container>
 );
};

export default Buttons;
