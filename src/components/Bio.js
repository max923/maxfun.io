import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'
import email from '../../content/assets/icon-email.png'
import github from '../../content/assets/icon-github.png'
import linkedIn from '../../content/assets/icon-linkedIn.png'

const Iconstyle = {
  width: '20px',
  marginTop: '10px',
  display: 'inline-block',
  boxShadow: 'none'
}
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p>
              I'm a Frontend Engineer, who focuses on providing thoughtful solutions to user based problems. <br/>
              <a
                style={Iconstyle}
                href="mailto:fangbug0923@gmail.com"
              >
                <img src={email}></img>
              </a>
              <a
                style={Object.assign({}, Iconstyle,{
                  margin: '10px 8px'
                })}
                href="https://github.com/max923"
              >
                <img src={github}></img>
              </a>
              <a
                style={Iconstyle}
                href="https://www.linkedin.com/in/maxfang923/"
              >
                <img src={linkedIn}></img>
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic-circle.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
          linkedin
        }
      }
    }
  }
`

export default Bio
