import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {

  Selectphotourl,

} from "../Redux/Userslice";
const Header = () => {
  const Userphoto = useSelector(Selectphotourl);
  return (
    <Container>
      <Content>
        <LogoSearch>
          <Logo>
            <Link to={"/home"}>
              <img src="/images/home-logo.svg" alt="" />
            </Link>
          </Logo>
          <Search>
            <input type="text" placeholder="Search" />
            <SearchIcon>
              <img
                src="/images/search-icon.svg"
                alt=""
                width={25}
                style={{ marginTop: "8px" }}
              />
            </SearchIcon>
          </Search>
        </LogoSearch>

        {/* here we need to put the navbar */}
        <Navbar>
          <NavListWrap>
            <NavList>
              <Link>
                <img src="/images/nav-home.svg" alt="" />
                <h6>Home</h6>
              </Link>

              <Link>
                <img src="/images/nav-network.svg" alt="" />
                <h6>My Network</h6>
              </Link>

              <Link>
                <img src="/images/nav-jobs.svg" alt="" />
                <h6>Jobs</h6>
              </Link>

              <Link>
                <img src="/images/nav-messaging.svg" alt="" />
                <h6>Messages</h6>
              </Link>

              <Link>
                <img src="/images/nav-notifications.svg" alt="" />
                <h6>Notifications</h6>
              </Link>

              <Link >
                <img src={Userphoto} alt="" width={20} />
                <User>
                  <h6>Me</h6>
                  <img src="/images/down-icon.svg" alt="" />
                </User>
              </Link>

              <Work>
                <Link>
                  <img src="/images/nav-work.svg" alt="" />
                  <User>
                    <h6>Work</h6>
                    <img src="/images/down-icon.svg" alt="" />
                  </User>
                </Link>
              </Work>
            </NavList>
          </NavListWrap>
        </Navbar>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: black;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 24px;
  width: 100vw;
  z-index: 100;
  margin-top: 10px;
  height: 40px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 100%;
  max-width: 1128px;
  margin: 0 auto;
`;

const Logo = styled.span`
  margin-right: 8px;
  & img {
    margin-top: 10px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  & > input {
    box-shadow: none;
    padding: 10px;
    border: none;
    background-color: #eef3f8;

    margin-top: 10px;
    opacity: 1;
    width: 214px;
    height: 34px;
    margin-right: 3px;
    &:hover {
      border: #2977c9;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;

  cursor: pointer;
`;

const Navbar = styled.div`
  /* margin-left: auto; */
  display: block;
  @media screen and (max-width: 786px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
    margin-bottom: 10px;
    padding: 20px;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
`;
const NavList = styled.li`
  display: flex;
  align-items: center;

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    text-decoration: none;
    color: gray;
  }

  & h6:hover {
    color: black;
  }
`;

const LogoSearch = styled.div`
  display: flex;
`;

const Work = styled.div`
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
const Singout = styled.div`
  transition: all 0.5s;
  display: none;
`;
const User = styled.div`
  display: flex;
  position: relative;

  &:hover {
    ${Singout} {
      position: relative;
      top: 60px;
      bottom: 10px;
      display: block;
    }
  }

  & > h6 {
    margin-right: 3px;
  }
`;

export default Header;
