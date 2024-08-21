import { Badge} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {  
  const Container=styled.div`
  height:60px;`
  const Wrapper = styled.div`
    padding:10px 20px;
    // background-color: blue;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    // height:90%;
       
  `;

  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px; 
    padding: 5px;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;


  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;

  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const Input = styled.input`
    border: none;
  `;

  const Logo = styled.h1`
    font-weight: bold;
  `;

  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `;

  return (
    <Container>
        <Wrapper>
          <Left>
            <Language><a href="/EN">EN</a></Language>
            <SearchContainer>
              <Input />
              <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
            </SearchContainer>
          </Left> 
          <Center><Logo>LAMA.</Logo></Center>
          <Right>
            <MenuItem><a href="/REGISTER">REGISTER</a></MenuItem>  
            <MenuItem><a href='/SIGN-IN'>SIGN IN</a></MenuItem>  
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  );
}
