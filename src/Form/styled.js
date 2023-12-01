import styled from "styled-components";

export const StyledForm = styled.form`
   padding: 30px;
   border-radius: 6px;
   box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.grey}; 
   background: #eee;
   margin: 180px auto;
   max-width: 1360px;
   display: flex;
   gap: 24px;
   flex-direction: column;

   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.maxWidth}) {
      margin: 90px 16px;
      padding: 16px;
   }
`;

export const StyledFieldset = styled.fieldset`
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   font-size: 24px;
   gap: 24px;
   padding: 18px;
   border: none;

   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 12px;
      font-size: 12px;
   }
`;

export const StyledLegend = styled.legend`
   font-size: 48px;
   color: ${({ theme }) => theme.colors.rebel};

   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 20px;
   }
`;

export const StyledInput = styled.input`
   padding: 18px;
   border-radius: 6px;
   width: 80%;

   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 10px;
   }
`;

export const StyledSelect = styled.select`
   padding: 18px;
   width: 80%;
   border-radius: 6px;

   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 10px;
   }
`;

export const StyledButton = styled.button`
   background-color: ${({ theme }) => theme.colors.silver};
   color: ${({ theme }) => theme.colors.white};
   border: none;
   padding: 18px;
   border-radius: 6px;
   font-weight: bold;
   cursor: pointer;
   transition: 0.5s;
   max-width: 80%;

   &:hover {
      filter: brightness(110%);
      color: ${({ theme }) => theme.colors.white};
      scale: 1.03;
   }

   &:active {
      filter: brightness(120%);
      ${({ theme }) => theme.colors.concrete};
   }
`;

export const StyledResult = styled.div`
   background-color: ${({ theme }) => theme.colors.grey};
   text-align: center;
   color: ${({ theme }) => theme.colors.white};
   padding: 18px;
   width: 80%;
   font-weight: bold;
   border-radius: 6px;
   line-height: 140%;
`;

export const StyledError = styled.p`
   color: ${({ theme }) => theme.colors.red};
   text-align: center;
   font-size: 22px;
`;

export const LoadingMesage = styled.p`
   margin: 0 auto;
   font-size: 22px;
   color: ${({ theme }) => theme.colors.green};
`;
