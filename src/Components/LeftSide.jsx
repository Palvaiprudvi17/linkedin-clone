import React from "react";
import { styled } from "styled-components";

const LeftSide = () => {
  return (
    <Container4>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <Photo />
          <h3>Welcome,Palvai Prudvi</h3>
          <p>Add a Photo</p>
          <Border />
        </UserInfo>

        <Connections>
          <div>
            <h5>Connections</h5>
            <h4>Grow Your Network</h4>
          </div>
          <img src="/images/widget-icon.svg" alt="" />
        </Connections>

        <Border />
        <Items>
          <img src="/images/item-icon.svg" alt="" />
          <h4>My Items</h4>
        </Items>
        <Border />
      </ArtCard>

      <Groups>
        <Group>
          <div>
            <h5>Groups</h5>
            <h5>Events</h5>
            <h5>Follows Hashtags</h5>
          </div>
          <img src="/images/plus-icon.svg" alt="" />
        </Group>
        <br />
        <Border />
        <h5>Discover More</h5>
      </Groups>
    </Container4>
  );
};

const Container4 = styled.div`
  grid-area: leftside;
 
`;

const ArtCard = styled.div`
  text-align: center;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.8);
`;


const Border = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  padding-top: 20px;
  padding: 20px;
  & > p {
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #0a66c2;
    cursor: pointer;
  }
  & > p:hover {
    text-decoration: underline;
  }
`;

const Connections = styled.div`
  padding: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div h5 {
    font-weight: 400;
    letter-spacing: 1.2px;
  }
`;

const Items = styled.div`
  text-align: start;
  display: flex;
  padding: 20px;
  & > img {
    padding-right: 6px;
  }
`;

const Groups = styled.div`
  box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.8);
  margin-top: 10px;
  padding: 30px;

  & > h5 {
    text-align: start;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin-top: 10px;
  }
`;
const Group = styled.div`
  & h5 {
    margin-top: 10px;
    letter-spacing: 1.1px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 350px;

  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

export default LeftSide;
