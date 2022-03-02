import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme/colors.json';

const CategoryColorItem = styled.li`
 color: ${(props) => (props.colorValue ? props.colorValue : '#000')};
`;

const Category = () => {
 if (!theme || !theme.Category) {
  return null;
 }

 const CategoryColorNames = Object.keys(theme.Category);

 return (
  <>
   <h2>Listing all colours of a kind</h2>
   <p>
    In this case, we're listing all of the colours' names under the "Category"
    section.
   </p>
   <ul>
    {CategoryColorNames.map((colorName, index) => (
     <CategoryColorItem
      key={index}
      colorValue={theme.Category[colorName].value}
     >
      {colorName}
     </CategoryColorItem>
    ))}
   </ul>
  </>
 );
};

export default Category;
