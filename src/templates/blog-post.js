import React from 'react'
import { Link, graphql } from 'gatsby'
import ThemeLayout from '../components/layout'
import SEO from '../components/seo'
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Layout, Menu, Icon, Card } from 'antd'

const { Content } = Layout

const StyledContent = styled(Content)`
  padding: 0 50px;
  background: #dae3ee;
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <ThemeLayout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <StyledContent>
          <Card
            title={post.frontmatter.title}
          >
            <p
            style={{
              display: `block`,
              marginBottom: ` 20px`,
              marginTop: `20px`,
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: `20px`,
            }}
          />
          </Card>
        </StyledContent>
      </ThemeLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
