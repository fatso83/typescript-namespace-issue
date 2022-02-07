import styled from 'styled-components';

export const StyledApplicationContainer = styled('div')`
  align-self: center;
  width: 100%;
  color: ${({theme}) => theme.common1};
  something: ${({theme}) => theme.wrong};
  different: ${({theme}) => theme.bar};
 `;
