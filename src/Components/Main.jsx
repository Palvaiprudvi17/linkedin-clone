import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMore, AiOutlineSend } from "react-icons/ai";
import { BiLike, BiShare } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";

import Postmodel from "./Postmodal";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { database } from "../Firebase";

import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

const Main = () => {
  // get the data from the firebase
  const [posts, setposts] = useState([]);

  useEffect(() => {
    Getthedata();
  }, []);

  const linkedin = collection(database, "linkedin");
  const Getthedata = async () => {
    try {
      const data = await getDocs(linkedin);
      const filtered = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setposts(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteLinkedin = async (id) => {
    const linkedoc = doc(database, "linkedin", id);
    await deleteDoc(linkedoc);
  };

  const [showModal, setShowModal] = useState(false);
  const handleClick = (e) => {
    console.log("this is hello world");
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <SmallContainer>
        <Sharebox>
          <Avatar>
            <img src="/images/user.svg" alt="" />
          </Avatar>
          {/* <input type="text" placeholder="Start a Post" /> */}
          <button onClick={handleClick}>Start a Post</button>
        </Sharebox>
        <Border />
        <ShareOptions>
          <div>
            {/* <img src="/images/photo.svg" alt="" width={30} /> */}
            <BiPhotoAlbum
              style={{
                color: "#0077b5",
                fontSize: "30px",
                marginBottom: "3px",
              }}
            />
            <h5>Photo</h5>
          </div>

          <div>
            {/* <img src="/images/photo.svg" alt="" width={30} /> */}
            <AiOutlineVideoCameraAdd
              style={{
                color: "lightgreen",
                fontSize: "30px",
                marginBottom: "3px",
              }}
            />
            <h5>Event</h5>
          </div>

          <div>
            {/* <img src="/images/photo.svg" alt="" width={30} /> */}
            <BsCalendarEvent
              style={{ color: "orange", fontSize: "30px", marginBottom: "3px" }}
            />
            <h5>Video</h5>
          </div>

          <div>
            {/* <img src="/images/photo.svg" alt="" width={30} /> */}
            <TfiWrite
              style={{ color: "red", fontSize: "30px", marginBottom: "3px" }}
            />
            <h5>Write Article</h5>
          </div>
        </ShareOptions>
      </SmallContainer>
      <Border />

      <BigContainer>
        {posts.map((post) => {
          return (
            <div>
              <ShareActions>
                <Actions>
                  <Link>
                    <img src="/images/user.svg" alt="" width={30} />
                  </Link>
                  <div>
                    <h4 style={{ marginLeft: "10px" }}>{post.name}</h4>
                  </div>
                </Actions>

                <AiOutlineMore
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={() => DeleteLinkedin(post.id)}
                />
              </ShareActions>

              <Description>{post.description}</Description>

           
              <Border />

              <SocialCounts>
                <div>
                  <BiLike style={{ marginRight: "5px" }} />
                  <h4>Like</h4>
                </div>

                <div>
                  <LiaCommentSolid style={{ marginRight: "5px" }} />
                  <h4>Comments</h4>
                </div>

                <div>
                  <BiShare style={{ marginRight: "5px" }} />
                  <h4>Share</h4>
                </div>

                <div>
                  <AiOutlineSend style={{ marginRight: "5px" }} />
                  <h4>Send</h4>
                </div>
              </SocialCounts>
            </div>
          );
        })}
      </BigContainer>

      {showModal && <Postmodel handleClose={handleClose} />}
    </Container>
  );
};
const Container = styled.div`
  grid-area: main;
`;
const Avatar = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;
const Sharebox = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  button {
    border: 1px solid #0077b5;
    border-radius: 30px;
    color: black;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    padding: 8px 14px;
    letter-spacing: 1.2px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    flex: 1;
    background-color: #0077b5;
  }

  & > input {
    border: 1.5px solid #0077b5;
    padding: 10px 15px;
    flex: 1;
    border-radius: 25px;
  }
  & > input:focus {
    border: 1px solid #0077b5;
  }
`;
const Border = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ShareOptions = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SmallContainer = styled.div`
  box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const ShareActions = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
`;
const Actions = styled.div`
  display: flex;
`;

const Description = styled.div`
  padding: 12px;
`;



const SocialCounts = styled.div`
  cursor: pointer;
  padding: 8px;
  display: flex;
  & > div {
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  & > div h4 {
    margin-right: 10px;
  }
`;

const BigContainer = styled.div`
  box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
  padding: 5px 10px;
`;
export default Main;
