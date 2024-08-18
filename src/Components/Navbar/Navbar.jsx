import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export default function Navbar() {  
  const Wrapper = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const Left = styled.div`
    flex: 1;
  `;

  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;

  const Right = styled.div`
    flex: 1;
    text-align: right;
  `;

  return (
    <Container sx={{ height: '60px', padding: '10px 20px', backgroundColor: 'black' }}>
      <Wrapper>
        <Left>left</Left> 
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
}
