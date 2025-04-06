import useFetchProjectsData from "./useFetchProjectsData";
import {BASE_URL} from "./constants";

const useHandleNewProject=()=>{
    const {reFetchProjects}=useFetchProjectsData()

    const addNewProject=async (data)=>{
        try{
            const response=await fetch(`${BASE_URL}/api/projects/`,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type":"application/json"},
                credentials: 'include',
            })
            if (!response.ok){
                throw new Error('Failed to Add New Project')
            }
            reFetchProjects()
        }catch (error){
            console.log(error)
            console.error(error)
        }
    }
    return addNewProject;
}
export default useHandleNewProject;