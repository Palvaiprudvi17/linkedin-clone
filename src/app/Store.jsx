import { configureStore } from "@reduxjs/toolkit";
import Userslicess from "../Redux/Userslice";

const Store=configureStore({
    reducer:{
        user:Userslicess
     
    }
})

export default Store