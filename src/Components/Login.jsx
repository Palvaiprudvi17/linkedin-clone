import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";

import {
  Selectusername,
  Selectphotourl,
  Setofthelogindetails,
  SetoftheSignout,
} from "../Redux/Userslice";
import Home from "./Home";

const Login = () => {
  const dispatch = useDispatch();

  const UserName = useSelector(Selectusername);
  const Userphoto = useSelector(Selectphotourl);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        Setuser(user);
      }
    });
  }, [UserName]);

  const HandleAuth = async (e) => {
    e.preventDefault();
    try {
      if (!UserName) {
        const response = await signInWithPopup(auth, googleprovider);
        Setuser(response.user);
      } else {
        await auth.signOut();
        dispatch(SetoftheSignout());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const Setuser = (user) => {
    dispatch(
      Setofthelogindetails({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      })
    );
  };

  return (
    <div>
      {!UserName ? (
        <div>
          <Container>
            <Nav>
              <Link to={"/"}>
                <img src="/images/login-logo.svg" alt="" />
              </Link>

              <div>
                <Join>Join now</Join>
                <SignIn onClick={HandleAuth}>Sign In</SignIn>
              </div>
            </Nav>

            <Section>
              <Hero>
                <h1>Find jobs through your community</h1>
                <img src="/images/login-hero.svg" alt="" />
              </Hero>

              {/* tthis is special style */}

              <Google onClick={HandleAuth}>
                <img src="/images/google.svg" alt="" />
                Sign in with Google
              </Google>
            </Section>
          </Container>
        </div>
      ) : (
        <Container3>
          <Container1>
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

                    <Link onClick={HandleAuth}>
                      <img
                        src={Userphoto}
                        alt=""
                        width={35}
                        style={{ borderRadius: "50%" }}
                      />
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
          </Container1>
          <Home />
        </Container3>
      )}
    </div>
  );
};

export default Login;

const Container3 = styled.div`
  padding: 20px;
`;

// / this is login components
const Container = styled.div`
  padding: 20px;
`;
const Nav = styled.nav`
  max-width: 1120px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
  }
`;

const Join = styled.a`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 12px;
  border-radius: 4px;

  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  display: inline-block;
  /* background-color: #0077B5; */
  border: 1px solid #0077b5;
  border-radius: 24px;
  color: black;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005eab;
    color: white;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1128px;
  flex-wrap: wrap;
  /* padding-top: 40px; */
  padding-bottom: 138px;
  position: relative;
  margin: auto;
  /* padding: 60px 0; */

  min-height: 700px;
  @media screen and (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  h1 {
    width: 60%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 100;
    line-height: 70px;
  }

  img {
    margin: 30px;
    width: 600px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      width: 100%;
      text-align: center;
      font-weight: 300;
      font-size: 30px;
      line-height: 1.3;
    }
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;


const Google = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 15px;
  border-radius: 24px;
  background-color: #fff;
  width: 400px;
  height: 56px;
  font-size: 20px;

  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.3);
  }

  img {
    margin-right: 5px;
  }
`;

// the header components
const Container1 = styled.div`
  /* background-color: white; */
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

    /* margin-right: 20px; */
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
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

const User = styled.div`
  display: flex;
  position: relative;

  & > h6 {
    margin-right: 3px;
  }
`;
