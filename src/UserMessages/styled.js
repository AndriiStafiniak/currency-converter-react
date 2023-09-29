import styled from "styled-components";

export const StyledError = styled.div`
   font-size: 24px;
   margin:50px;
   padding:10px;
   color: ${({ theme }) => theme.colors.rebel};
`;

export const StyledLoading = styled.div`
   font-size: 24px;
   margin:100px 50px;
   padding:20px;
   color: ${({ theme }) => theme.colors.rebel};
`;