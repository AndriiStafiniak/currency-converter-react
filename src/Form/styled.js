import styled from "styled-components"

export const StyledForm = styled.form`
    margin: 0 6px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.grey}; 
    background: #eee;
  `;



export const StyledFieldset = styled.fieldset`
   display: grid;
   grid-template-columns: 1fr;
   padding: 12px;
   border: none;
`;

export const StyledLegend = styled.legend`
   font-size: 24px;
   color:${({ theme }) => theme.colors.rebel};
`;

export const StyledInput = styled.input`
  width:85%;
  padding: 6px;
  margin: 8px;
  border-radius: 6px;
`;

export const StyledSelect = styled.select`
 width: 85%;
 padding: 6px;
 margin: 8px;
 border-radius: 6px;
`;

export const StyledButton = styled.button`
   background-color: ${({ theme }) => theme.colors.grey};
   color: ${({ theme }) => theme.colors.white};
   width: 85%;
   border:none;
   margin: 8px;
   padding: 8px;
   border-radius: 6px;
   cursor: pointer;
   transition: 0.5s;

      &:hover{
         filter: brightness(140%);
         color: ${({ theme }) => theme.colors.white};
         scale: 1.04;
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
   padding: 8px;
   font-weight: bold;
   width: 85%;
   margin:8px;
   border-radius: 6px;
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
