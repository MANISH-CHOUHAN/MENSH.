import styled from "styled-components"

const Container = styled.div `
height : 30px;
background-color : MediumSeaGreen;
color : white ;
display : flex ;
align-items : center;
justify-content : center;
font-size : 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Super Offer !!!  50% off on 1st order !!!
    </Container>
  )
}

export default Announcement