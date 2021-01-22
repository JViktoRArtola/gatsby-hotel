import React from "react"
import Layout from "../components/layout"
import HotelImage from "../components/image"
import ContentHome from "../components/contentHome"
import useBedRooms from "../hooks/useBedRooms"
import RoomPreview from "../components/roomPreview"
import { css } from "@emotion/react"

const IndexPage = () => {
  const rooms = useBedRooms()
  return (
    <Layout>
      <HotelImage/>
      <ContentHome/>

      <ul css={css`
          max-width: 1200px;
          width: 95%;
          margin: 4rem auto 0 auto;
          @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 3rem
            }
      `}>
        {rooms.map(room => (
          <RoomPreview
            key={room.id}
            room={room}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
