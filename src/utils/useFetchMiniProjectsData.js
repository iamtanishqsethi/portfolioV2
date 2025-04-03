import {useDispatch} from "react-redux";
import {useCallback, useEffect} from "react";
import {setData} from "./miniProjectsSlice";

const useFetchMiniProjectsData = () => {
    const dispatch = useDispatch()
    const fetchMiniProjects = useCallback(async ()=>{
        try{
            const response = await fetch('http://localhost:3300/api/miniProjects',{
                method:"GET",
                credentials: "include"
            })
            if(!response.ok) throw new Error("Failed to fetch data")
            const result=await response.json()
            dispatch(setData(result))
            console.log(result)
        }catch (e){
            console.log("Failed to fetch mini projects data: "+ e);
        }
    },[dispatch])
    useEffect(()=>{
        fetchMiniProjects()
    },[fetchMiniProjects])

    return {reFetchMiniProjects: fetchMiniProjects};
}
export default useFetchMiniProjectsData;