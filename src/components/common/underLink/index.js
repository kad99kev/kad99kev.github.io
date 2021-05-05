import styled from 'styled-components';
import variables from '../../../data/variables';

export const UnderLink = styled.a`
  cursor: pointer;
  transition: color 300ms ease-in-out;
  font-family: "GT-Walsheim-Pro-Bold";
  color: ${variables.linkColour};
  padding: 0 .5rem;
  &:hover {
    color: ${variables.titleColour};
    text-decoration: underline;
  }
`