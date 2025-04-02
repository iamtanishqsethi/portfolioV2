import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth";
import portfolioSlice from "./portfolioSlice";
import projectsSlice from "./projectsSlice";
import miniProjectsSlice from "./miniProjectsSlice";

const appStore=configureStore({
    reducer: {
        auth:auth,
        portfolio:portfolioSlice,
        projects:projectsSlice,
        miniProjects:miniProjectsSlice
    }
})
export default appStore;