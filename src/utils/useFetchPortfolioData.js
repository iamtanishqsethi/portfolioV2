import {useDispatch} from "react-redux";
import {useCallback, useEffect} from "react";
import {setData} from "./portfolioSlice";

const useFetchPortfolioData=()=>{
    const dispatch = useDispatch();

    const fetchPortfolioData=useCallback(async ()=>{
        try{
            const response = await fetch('http://localhost:3300/api/portfolio',{
                method:"GET",
                credentials: "include"
            })
            if (!response.ok) throw new Error("Failed to fetch data")
            const result=await response.json()
            dispatch(setData(result[0]))
            console.log(result[0])
        }catch(e){
            console.log("Failed to fetch portfolio data "+ e);
        }
    },[dispatch])
    useEffect(()=>{
        fetchPortfolioData()
    },[fetchPortfolioData])
    // return {reFetch:fetchPortfolioData()}
    return { reFetch: fetchPortfolioData };
}
export default useFetchPortfolioData;