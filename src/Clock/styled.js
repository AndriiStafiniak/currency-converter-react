import styled from "styled-components"

export const StyledClock = styled.div`
   text-align: right;
   font-family: monospace;
   color:${({ theme }) => theme.colors.black};
   font-size: 18px;
   margin: 12px;
`;
