import styled from "styled-components"

export const StyledForm = styled.form`
   width:100%;
   font-size: 18px;
`;

export const StyledFieldset = styled.fieldset`
   border: 3px solid #ccc ;
   margin: 50px;
`;

export const StyledLegend = styled.legend`
   font-size: 24px;
   color:${({ theme }) => theme.colors.rebel};
`;

export const StyledInput = styled.input`
   padding: 5px 10px;
   /* background-color: hsl(0, 0%, 90%); */
   width: 90%;
   margin: 15px; 
`;

export const StyledSelect = styled.select`
   
   padding: 5px 10px;
   /* background-color: hsl(0, 0%, 90%); */
   width: 90%;
   margin: 15px;
   
`;

export const StyledButton = styled.button`
   width: 90%;
   background-color: ${({ theme }) => theme.colors.grey};
   color: ${({ theme }) => theme.colors.white};
   padding: 7px;
   border:none;
   margin: 15px;
   
   cursor: pointer;
   transition: 0.5s;
      &:hover{
         filter: brightness(120%);
         color: ${({ theme }) => theme.colors.white};
         scale: 1.05;
      }
      &:active{
         filter: brightness(140%);
         ${({ theme }) => theme.colors.concrete};
      }
`;

export const StyledResult = styled.div`
   
   text-align: center;
   background-color: ${({ theme }) => theme.colors.grey};
   color: ${({ theme }) => theme.colors.white};
   padding: 5px;
   margin: 10px 0;
   text-decoration: solid;
   font-size: 24px;
   width: 90%;
   margin: 15px;
   
`;