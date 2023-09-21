import styled from "styled-components"

export const StyledForm = styled.form`
   max-width: 600px;
   font-size: 18px;
`;

export const StyledFieldset = styled.fieldset`
   border: 2px solid hsl(0, 0%, 30%);
   border-radius: 20px;
   margin: 50px;
`;

export const StyledLegend = styled.legend`
   font-size: 24px;
   color: hsl(0, 80%, 10%);
`;

export const StyledInput = styled.input`
   border-radius: 20px;
   padding: 5px 10px;
   background-color: hsl(0, 0%, 90%);
   width: 100%;
   margin: 10px 0;   
`;

export const StyledSelect = styled.select`
   border-radius: 20px;
   padding: 5px 10px;
   background-color: hsl(0, 0%, 90%);
   width: 100%;
   margin: 10px 0;
`;

export const StyledButton = styled.button`
   width: 100%;
   background-color: hsl(0, 0%, 25%);
   color: hsl(208, 100%, 97%);
   border-radius: 20px;
   padding: 7px;
   border:none;
   margin: 10px;
   text-align: center;
   
   cursor: pointer;
      &:hover{
         background-color: hsl(0, 0%, 35%);
         color: hsl(0, 0%, 70%);
         scale: 1.05;
      }
      &:active{
         background-color: hsl(0, 0%, 50%);
         color: hsl(0, 0%, 95%);
      }
`;

export const StyledResult = styled.div`
   border-radius: 10px;
   text-align: center;
   background-color: hsl(0, 0%, 20%);
   color: hsl(208, 100%, 93%);
   padding: 5px;
   margin: 10px;
   text-decoration: solid;
   font-size: 24px;
`;