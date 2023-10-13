import styled from "styled-components"

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 50vh;
   width: 80%;
   max-width: 600px;
   margin: 0 auto;
   padding: 10px;
   font-size: 18px;
   background-color:${({ theme }) => theme.colors.pampas};
`;

export const StyledFieldset = styled.fieldset`
   border: 3px solid ${({ theme }) => theme.colors.silver};
   margin: 20px;
`;

export const StyledLegend = styled.legend`
   font-size: 24px;
   color:${({ theme }) => theme.colors.rebel};
`;

export const StyledInput = styled.input`
   padding: 5px;
   width: 90%;
   margin: 10px; 
`;

export const StyledSelect = styled.select`
   padding: 5px 5px;
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
         filter: brightness(140%);
         color: ${({ theme }) => theme.colors.white};
         scale: 1.05;
      }
      &:active{
         filter: brightness(160%);
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

export const StyledError = styled.p`
   color: ${({ theme }) => theme.colors.red};
   text-align: center;
   font-size: 30px;
   
`;

export const StyledLoading = styled.p`
   color: ${({ theme }) => theme.colors.green};
   text-align: center;
   font-size: 30px;
`;