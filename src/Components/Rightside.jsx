import React from "react";
import { styled } from "styled-components";
const Rightside = () => {
  return (
    <Container>
      <Title>
        <h5>Add to Your Feed</h5>
        <img src="/images/feed-icon.svg" alt="" />
      </Title>

      <HashTagGroup>
        <HashTag>
          <Avatar>
            <img src="/images/user.svg" alt="" />
          </Avatar>

          <div>
            <p># Linkedin</p>
            <button>Follow</button>
          </div>
        </HashTag>

        <HashTag>
          <div>
            <Avatar>
              <img src="/images/user.svg" alt="" />
            </Avatar>
          </div>
          <div>
            <p># Video</p>
            <button>Follow</button>
          </div>
        </HashTag>
      </HashTagGroup>
      <FollowCard>
        <h4>View all recommendations </h4>
        <img src="/images/right-icon.svg" alt="" />
      </FollowCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
  box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.8);
  padding: 20px;
  height: 300px;
  /* margin-top: 10px; */
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h5 {
    letter-spacing: 1.06px;
    font-weight: 700;
  }
`;

const HashTagGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
`;

const Avatar = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const HashTag = styled.div`
  display: flex;
  align-items: center;

  & div button {
    margin-top: 5px;
    display: inline-block;
    /* background-color: rgb(0, 119, 181); */
    border: 1px solid #0077b5;
    border-radius: 24px;
    color: black;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      background-color: #005eab;
      color: white;
    }
  }
`;

const FollowCard = styled.div`
  display: flex;
  align-items: center;
  color: #005eab;
  & h4 {
    margin-right: 10px;
  }
`;

export default Rightside;
