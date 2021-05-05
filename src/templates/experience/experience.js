import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Calendar } from 'react-feather'

import {Intro, Title, ArticlePost, SmallText, ArticleBody} from '../../components/styled/posts'
import {ContainerLayout} from '../../components/common'


const experienceWork = ({data, pageContext, location}) => {
  const work = data.markdownRemark
  console.log(work);
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={work.frontmatter.title}
        description={work.frontmatter.description || work.excerpt}
      />
      <Intro >
        <ContainerLayout>
          <div>
            <ArticlePost>
              <header>
                <Title>
                  {work.frontmatter.title}
                </Title>
                <SmallText> 
                  <Calendar className="align-middle text-primary" width="18" height="18" /> 
                  <span className="align-middle"> last updated : {work.frontmatter.date} </span>
                </SmallText>
              </header>
              
              <ArticleBody dangerouslySetInnerHTML={{ __html: work.html }} />
            </ArticlePost>
          </div>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

export default experienceWork;

export const data = graphql`
  query experienceWorkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      rawMarkdownBody
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description,
        time,

      }
    }
  }
`