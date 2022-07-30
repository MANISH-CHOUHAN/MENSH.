import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
display: flex; 
`
const Left= styled.div`
flex: 1;
`
const Center =styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`



export const Footer = () => {
  return (
    <Container>
        <Left> 
            <Logo>MENSH.</Logo>
            <Desc>Polo Assn.’s official online store, and not only do we assure 100% authenticity and quality for all our products, but we also house everything from polo shirts to those must-have sneakers you may have spotted and loved in one of our stores in passing. Don’t worry, we have them all!
            </Desc>
            <Socialcontainer>
              <SocialIcon>

                </SocialIcon> 
                <SocialIcon>
                
                </SocialIcon> <SocialIcon>
                
                </SocialIcon> 
            </Socialcontainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer