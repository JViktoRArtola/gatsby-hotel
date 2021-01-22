import React from "react"
import Layout from "../components/layout"
import HotelImage from "../components/image"
import ContentHome from "../components/contentHome"
import useBedRooms from "../hooks/useBedRooms"
import RoomPreview from "../components/roomPreview"
import styled from "@emotion/styled"


const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }
`

const IndexPage = () => {
  const rooms = useBedRooms()
  return (
    <Layout>
      <HotelImage/>
      <ContentHome/>

      <RoomList>
        {rooms.map(room => (
          <RoomPreview
            key={room.id}
            room={room}
          />
        ))}
      </RoomList>
    </Layout>
  )
}

export default IndexPage
