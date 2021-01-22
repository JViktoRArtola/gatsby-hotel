import { graphql, useStaticQuery } from "gatsby"

const useBedRooms = () => {

  const data = useStaticQuery(graphql`
      query {
          allDatoCmsBedroom {
              nodes {
                  title
                  id
                  slug
                  content
                  image {
                      fluid(maxWidth: 1200) {
                          ...GatsbyDatoCmsFluid
                      }
                  }
              }
          }
      }

  `)

  return data.allDatoCmsBedroom.nodes.map(room => ({
    title: room.title,
    id: room.id,
    content: room.content,
    image: room.image,
    slug: room.slug
  }))
}

export default useBedRooms
