import React from "react"
import { graphql } from 'gatsby'
export default function Home({ data }) {

return <div>
  {data.site.siteMetadata.title} <br />
  {data.site.siteMetadata.q1.question}
</div>
}
export const query = graphql`{
    site {
      siteMetadata {
        title,
        q1 {
          question,
          o1,
          o2,
        }
      }
    }
  }
`