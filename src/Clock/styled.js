import styled from "styled-components"

export const StyledClock = styled.div`
   text-align: right;
   font-family: monospace;
   color:${({ theme }) => theme.colors.black};
   font-size: 14px;
   margin: 10px 0px 10px 0px;
`;
