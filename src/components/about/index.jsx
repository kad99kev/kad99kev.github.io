import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";
import variables from "../../data/variables";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Undergraduate Student </SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Kevlyn Kadamala </Title>
              <Text> I'm an <b style={{color: variables.primaryColour }}>Undergraduate Student</b>  from India living in Mumbai. </Text>
              <Text> My interest majorly lies in <b style={{color: variables.primaryColour }}>Artificial Intelligence</b>, <b style={{color: variables.primaryColour }}>Deep Learning</b> and <b style={{color: variables.primaryColour }}>Reinforcement Learning</b>.</Text>
              <Text>I am aspiring to become an <b style={{color: variables.primaryColour }}>AI Engineer</b> and a <b style={{color: variables.primaryColour }}>Researcher</b>.</Text>
              <Text>I also enjoy video games, football and music! :D</Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
