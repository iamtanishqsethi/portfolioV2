import {useDispatch} from "react-redux";
import {useCallback, useEffect} from "react";
import {setData} from "./projectsSlice";
import {BASE_URL} from "./constants";

const useFetchProjectsData=()=>{

    const dispatch = useDispatch()
    const fetchPortfolioData=useCallback(async ()=>{
        try{
            const response = await fetch(`${BASE_URL}/api/projects`,{
                method:"GET",
                credentials: "include"
            })
            if (!response.ok) throw new Error("Failed to fetch data")
            const result=await response.json()
            dispatch(setData(result))
            // console.log(result)

        }catch(e){
            console.log(e)
        }
    },[dispatch])
    useEffect(()=>{
        fetchPortfolioData()
    },[fetchPortfolioData])
    return {reFetchProjects:fetchPortfolioData}

}
export default useFetchProjectsData;