import { createSlice } from "@reduxjs/toolkit"

const  initialState={
  name:'',
  email:'',
  photoUrl:''
}
const UserSlicess=createSlice({
  name:'user',
  initialState,
  reducers:{
    Setofthelogindetails:(state,action)=>{
      state.name=action.payload.name;
      state.email=action.payload.email;
      state.photoUrl=action.payload.photoUrl;

    },
    SetoftheSignout:state=>{
      state.name=null;
      state.email=null;
      state.photoUrl=null;
    }
  }
})

export default UserSlicess.reducer
export const {Setofthelogindetails,SetoftheSignout}=UserSlicess.actions




export const Selectusername=(state)=>state.user.name

export const Selectphotourl=(state)=>state.user.photoUrl
