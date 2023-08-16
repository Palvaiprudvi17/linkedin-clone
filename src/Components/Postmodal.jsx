import React, { useState } from "react";
import { styled } from "styled-components";
import {
  AiOutlineClose,
  AiOutlineYoutube,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import ReactPlayer from "react-player";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../Firebase";

const Postmodel = (props) => {
  const [Name, SetName] = useState("");
  const [editorText, seteditorText] = useState("");

  const [videoLink, setvideoLink] = useState("");

  const [imageList, setimageList] = useState("")

  const [assertArea, setassertArea] = useState("");

  //   this is asssert function is for the displaying the image or video
  const SwitchAssert = (area) => {
    setimageList("");
    setvideoLink("");
    setassertArea(area);
  };

  const reset = (e) => {
    //   this is asssert function is for the displaying the image or video
    // setimageUpload("");
    setvideoLink("");
    setassertArea("");
    //   this is asssert function is for the displaying the image or video
    seteditorText("");
    props.handleClose(e);
  };

  // we are using the firebase to add the data
  const linkedin = collection(database, "linkedin");
  const Linkedpost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(linkedin, {
        name: Name,
        image: imageList,
        video: videoLink,
        description: editorText,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Contents>
          <div>
            <Header>
              <h2>Create a Post</h2>
              <AiOutlineClose
                style={{ fontSize: "30", cursor: "pointer" }}
                onClick={reset}
              />
            </Header>

            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" width={100} />
                {/* <span></span> */}
                <Inputs>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={Name}
                    onChange={(e) => SetName(e.target.value)}
                  />
                </Inputs>
              </UserInfo>
              <Editor>
                <textarea
                  name=""
                  id=""
                  value={editorText}
                  onChange={(e) => seteditorText(e.target.value)}
                  placeholder="What do you want to talk about ?"
                  autoFocus={true}
                ></textarea>

                {assertArea === "image" ? (
                  <UploadImage>
                    <input type="file" value={imageList} onChange={(e)=>setimageList(e.target.files[0])}/>
                    <Buttons onClick={UploadImage}>Submit image</Buttons>
                  </UploadImage>
                ) : (
                  <>
                    <div>
                      <Inputs>
                        <input
                          type="text"
                          placeholder="Please input a video link"
                          value={videoLink}
                          onChange={(e) => setvideoLink(e.target.value)}
                        />
                      </Inputs>
                    </div>
                    {videoLink && (
                      <div>
                        <ReactPlayer width={"100%"} url={videoLink} />
                      </div>
                    )}
                  </>
                )}
              </Editor>
            </SharedContent>

            <ShareCreation>
              <Actions>
                <BsImages
                  style={{ fontSize: "23px", marginRight: "8px" }}
                  onClick={() => SwitchAssert("image")}
                />
                <AiOutlineYoutube
                  style={{ fontSize: "30px", marginRight: "8px" }}
                  onClick={() => SwitchAssert("media")}
                />
                <AiOutlineMessage
                  style={{ fontSize: "25px", marginRight: "8px" }}
                />
              </Actions>

              <Post disabled={!editorText ? true : false} onClick={Linkedpost}>
                Post
              </Post>
            </ShareCreation>
          </div>
        </Contents>
      </Container>
    </>
  );
};
export default Postmodel;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.5s;
`;
const Contents = styled.div`
  width: 100%;
  max-width: 553px;
  background-color: white;
  position: relative;
  top: 40px;
  left: 30%;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SharedContent = styled.div``;
const UserInfo = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    border-radius: 50%;

    margin-right: 20px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
  }
`;
const ShareCreation = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;

  h6 {
    margin-bottom: 6px;
  }
`;
const Post = styled.button`
  display: inline-block;

  /* background-color: #0077B5; */
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.7)" : "#0077B5"};
  border: 1px solid #0077b5;
  border-radius: 30px;
  color: black;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  padding: 5px 14px;
  letter-spacing: 1.2px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
const Editor = styled.div`
  width: 100%;

  padding: 10px 20px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    padding: 10px;
  }
`;

const UploadImage = styled.div`
  img {
    width: 100%;
  }
  & button {
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

    background-color: #0077b5;
  }
`;
const Buttons = styled.button`
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
  margin-top: 5px;
`;
const Inputs = styled.div`
  & input {
    box-shadow: none;
    padding: 10px;
    border: none;
    background-color: #eef3f8;
    display: block;
    width: 400px;
    margin-top: 10px;
    opacity: 1;
    flex: 1;
    margin-right: 3px;
    &:hover {
      border: #2977c9;
    }
  }
`;
