import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { Bull, ReadingTime } from './Commons'

const Post = styled.article`
  border-bottom: 1px solid var(--color-secondary);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  color: var(--color-text);

  &:hover {
    background-color: var(--color-grey600);
    border-radius: 0.25rem;
    color: var(--color-white);
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  color: var(--color-textSecondary);
  &:hover {
    border-bottom: 1px dotted var(--color-text);
  }
`

const FooterLine = styled.div`
  font-size: 0.8em;
`

const PreviewCover = styled.div`
  width: auto;
  height: 300px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 5px 5px 5px 5px;
  margin: 5px;
`

const PostsListItem = props => {
  const { title, excerpt, slug, language, tags, timeToRead, heroImg } = props
  const { defaultLang } = useSiteMetadata()

  return (
    <Post>
      <PostHeader>
        <h2>
          <PostTitleLink to={`/${slug}`}>
            {defaultLang !== language && <Flag language={language} />}
            {title}
          </PostTitleLink>
        </h2>
      </PostHeader>
      <PreviewCover
        style={{ backgroundImage: `url("${heroImg}")` }}
      />
      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>

      <footer>
        <FooterLine>
          <ReadingTime min={timeToRead} />
          <Bull />
          <TagList tags={tags} />
        </FooterLine>
        <ReadPost to={`/${slug}`} aria-label={`View ${title} article`}>
          Read post ›
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem
