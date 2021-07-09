import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'
import Translations from './Translations'
import Time from './Time'
import { Bull } from './Commons'

const Header = styled.header`
  margin-bottom: 2rem;
  font-size: 0.9em;
`
const HeroTitle = styled.h1`
  font-family: "Rubik", serif;
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--color-textSecondary);
`

class ContentIntro extends React.Component {
  render() {
    const { title, date, tags, translations } = this.props
    return (
      <Header>
        {title && <HeroTitle>{title}</HeroTitle>}
        {date && <Time date={date} />}
        {date && Array.isArray(tags) && tags.length > 0 && <Bull />}
        {Array.isArray(tags) && tags.length > 0 && (
          <Fragment>
            <TagList tags={tags} />
          </Fragment>
        )}

        {translations && <Translations translations={translations} />}
      </Header>
    )
  }
}

export default ContentIntro
