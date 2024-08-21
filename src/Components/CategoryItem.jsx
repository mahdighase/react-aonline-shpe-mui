import styled from "styled-components";
import { mobile } from "../../src/pages/responsive";

const Container = styled.div`
  flex: 1;
  margin: 1px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 99%;
  height: 99%;
//   object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button><a href="/SHOPE-NOW"></a>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;