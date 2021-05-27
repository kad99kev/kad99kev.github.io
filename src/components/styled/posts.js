import styled from "styled-components";
import variables from '../../data/variables';

export const Intro = styled.div`
  padding: 8rem 0 4rem 0;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  margin-bottom: 1rem;
`

export const ArticlePost = styled.article`
  margin-bottom: 5rem;
  padding-bottom: 1rem;
  max-width: 60rem;
  margin: auto;
  text-align: left;
  img[src$="imgresponsive"] {
    max-width:80%;
  }
  color: ${variables.titleColour};
`
export const SmallText = styled.small`
    font-size: .89rem;
    padding-right: 10px;
    font-family: "GT-Walsheim-Pro-Regular";
    > span {
      padding-left: 5px;
    }
    color: ${variables.primaryColour};
`
export const ArticleBody = styled.div `
  margin-top: 5rem;
  h1 {
    color: ${variables.titleColour };
    margin-top: 2rem;
    margin-bottom: 0rem;
  }
  h2 {
    color: ${variables.subTitleColour };
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
  h4 {
    color: ${variables.primaryColour };
    margin-top: 0.5rem;
  }
  .passing-year {
    text-align: right;
    color: ${ variables.subTitleColour };
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
  p {
    font-size: 1rem;
    font-family: "OpenSans-Regular";
    font-weight: 100;
    color: ${variables.fontColour};
    text-align: justify
  }
  li {
    font-size: 1rem;
    font-family: "GT-Walsheim-Pro-Regular";
    color: ${variables.fontColour};
    margin-bottom: 0.5rem;
  }
  a{
    color: ${variables.linkColour};
    text-decoration: underline;
  }
`

export const NaviagtionList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  list-style: none;
  padding: 0;
  border-top: 4px solid ${variables.linkColour};
  border-bottom: 4px solid ${variables.linkColour};
  color: ${variables.primaryColour};
`
export const NaviagtionLi = styled.li`
  padding: 2rem 0;
  &:last-child {
    text-align: right;
  }
  a {
    font-size: 1.3rem;
    font-family: "GT-Walsheim-Pro-Regular";
    color: ${variables.primaryColour};
  }
`