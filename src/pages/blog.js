import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql, navigate } from "gatsby"
import { Calendar, Clock } from 'react-feather'
import Img from "gatsby-image"
import {ContainerLayout, WorkPost, Intro, SubTitle, Title, Text, HeaderIntro, SubText, SmallText, UnderLink, ReadMore} from "../components/common"
import CategoriesTags from '../components/CategoriesTags/categoriesTags';
import kebabCase from "lodash/kebabCase"
import variables from "../data/variables";

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  
  return (
    <>
      <Layout> 
        <Seo title="Personal Blog" />
        <Intro>
          <ContainerLayout>

            <SubTitle>
              Articles
            </SubTitle>
            <HeaderIntro>
              <SubText>
                Sharing my thoughts, experiences and observations for all to read.
              </SubText>
              <CategoriesTags /> 
            </HeaderIntro>

            <ContainerLayout className="wrapper">
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}  onClick={() => navigate(node.fields.slug)}>
                    <div className="media" style={{ paddingBottom: "0.5rem" }}>
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} title={ node.frontmatter.title || node.fields.slug } />
                        </Link> 
                      </div>
                      <SmallText>
                        Image Credits : 
                        <UnderLink href={node.frontmatter.imageCredit} target="_blank" title={node.frontmatter.imageCredit}>
                          {node.frontmatter.imageCredit}
                        </UnderLink>
                      </SmallText>
                    </div>
                    
                    <div className="content">
                      <header>
                        <SmallText> 
                          <span className="align-middle">{node.frontmatter.categories.map((item, index) => (
                            <Link to={`/${kebabCase(item)}`} key={index}>
                              <span className="align-middle text-primary text-underline">#{item}</span>
                              {node.frontmatter.categories.length !== index + 1 ? <span className="align-middle text-primary"> , </span> : ""}
                            </Link>
                          ))} </span>
                        </SmallText>
                        <Title>
                          <Link className="text-primary" style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </Title>
                        <SmallText> 
                          <Calendar className="align-middle text-primary" width="18" height="18" /> 
                          <span className="align-middle"> date published : <span style={{color: variables.linkColour}}> {node.frontmatter.date} </span> </span>
                        </SmallText>
                        <SmallText> 
                          <Clock className="align-middle text-primary" width="18" height="18" /> 
                          <span className="align-middle"> read time : <span style={{color: variables.linkColour}}> {node.frontmatter.time} </span> </span>
                        </SmallText>
                      </header>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <Link to={node.fields.slug}>
                        <ReadMore style={{ color: variables.primaryColour }} className="lined-link"> read more &#8594; </ReadMore>
                      </Link>
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            time
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories
            imageCredit
            description
          }
        }
      }
    }
  }
`