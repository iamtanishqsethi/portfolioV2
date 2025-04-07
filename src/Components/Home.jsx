import {useState,useEffect} from "react";
import {useSelector} from "react-redux";

import Loading from "./Loading"
import Main from "./Main";

const Home = () => {
    const portfolioData = useSelector(store => store.portfolio.data);
    const projectsData = useSelector(store => store.projects.data);
    const miniProjectsData = useSelector(store => store.miniProjects.data);

    const [isloading, setIsloading] = useState(true);

    useEffect(() => {
        if (
            portfolioData.length !== 0 &&
            projectsData.length !== 0 &&
            miniProjectsData.length !== 0
        ) {
            setIsloading(false);
        }
    }, [portfolioData, projectsData, miniProjectsData]);

    if (isloading) {
        return <Loading />;
    }

    return <Main />;
};

export default Home;
