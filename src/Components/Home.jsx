import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LeftSide from "./LeftSide";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <Link>Hiring in a hurry? - </Link>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business Movies
        </p>
      </Section>

      <Layout>
        <LeftSide />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
`;
const Section = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;

  & > h5 a {
    color: #0a66c2;
    text-decoration: none;
  }

  & > h5 {
    font-size: 400;
    font-size: 24px;
  }
  & > p {
    font-size: 17px;
  }
  & > h5:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    padding: 0 20px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
