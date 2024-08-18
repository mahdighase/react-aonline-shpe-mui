import { Container, styled } from '@mui/material'
import { color, height } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
export default function Navbar() {
    // const Left =styled.div
    // const Center =styled.div
    // const Right=styled.div
    const Wrapper=styled.div``
    
  return (
    <Container  sx={{height:"60px",padding:'10px 20px', backgroundColor:'black',}}>
     <Wrapper sx={{color:'white'}}>
       <Left>left</Left> 
       <Center>center</Center>
       <Right>right</Right>
     </Wrapper>
    </Container>
  )
}
