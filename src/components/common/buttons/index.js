import styled from "styled-components";
import colors from "../../../data/variables";

export const ButtonDefault = styled.a`
  cursor: pointer;
  margin: 10% 0%;
  font-family: "GT-Walsheim-Pro-Regular";
  font-size: inherit;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration:none;
  border: 4px solid ${colors.primaryColour};
  color: ${colors.primaryColour};
  background: #fff;
  outline: none;
  position: relative;
  display: inline-block;
  padding: 15px 10px 14px;
  cursor: pointer;
  width: auto;
  min-width:200px;
  &::after {
    min-width:200px;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid ${colors.primaryColour};
    background-color: ${colors.primaryColour};
    left: 4px;
    top: 9px;
    z-index: -1;
    content: '';
    transition: all 0.5s;
  }
  &:hover:after {
    top: 0px;
    left: -4px;
  }
`;

export const ReadMore = styled.span`
color: ${colors.fontColour};
  font-size: 1rem;
  text-transform: inherit;
  letter-spacing: .7px;
  font-family: "GT-Walsheim-Pro-Regular";
  &:hover {
    color: ${colors.primaryColour};
  }
  &:after {
    bottom: 1px;
    height: 3px;
    background: ${colors.primaryColour};
  }
`

export const ResumeButton = styled.a`
  color: ${colors.fontColour};
  font-size: 1rem;
  letter-spacing: 2px;
  font-family: "GT-Walsheim-Pro-Regular";
  border: 5px solid #e8e7e7;
  display: block;
  margin: 6rem 0 2rem 0;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: .5rem;
  transition: color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: ${colors.primaryColour};
    border-color: ${colors.primaryColour}
  }
`