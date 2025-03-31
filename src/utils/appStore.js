import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth";

const appStore=configureStore({
    reducer: {
        auth:auth
    }
})
export default appStore;