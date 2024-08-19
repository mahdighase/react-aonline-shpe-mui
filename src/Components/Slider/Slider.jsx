import React from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
background-color:coral;
`;
const Arrow=styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction==='left'&&"10px"};
right:${props=>props.direction==='right'&&"10px"};
margin:auto;
cursor:pointer;
opacity:0.5;`
const Wrapper=styled.div`
height:100%;
`;
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;`
const ImgContainer=styled.div`
height:100%;
flex:1;
position: absolute;`
const Image=styled.img`
height:90%;
width:99vw;`
const InfoContainer=styled.div`
flex:1;
padding:50px;
position:relative;
`

const Title=styled.h1`
font-size:70px;`
const Disc=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;`
const Button=styled.button``
const Slider = () => {
  return (
    <Container>

      <Wrapper>
          <Slide>
         <ImgContainer>
         <Image src='https://www.hamburg040.com/wp-content/uploads/2024/07/Summerfashion-light-shirt-with-flowers-.jpg'/>
         </ImgContainer>
         <InfoContainer>
            <Title>SUMMER SAL</Title>
            <Disc>Don't COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIvals</Disc>
            <Button>SHOW</Button>
         </InfoContainer>
          </Slide>
      </Wrapper>
      <Arrow direction="right">
          <ArrowRightIcon/>
      </Arrow>
      <Arrow direction="left">
          <ArrowLeftIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider
