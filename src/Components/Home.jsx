import Loading from "./Loading";
import {useEffect, useState} from "react";
import Main from "./Main";

const Home=()=>{
    const [isloading,setIsloading]=useState(false);
    useEffect(() => {
        setTimeout(()=>setIsloading(true),2000)
    }, []);
    if(!isloading){
        return <Loading/>
    }
    return (
            <Main/>
    )
}
export default Home